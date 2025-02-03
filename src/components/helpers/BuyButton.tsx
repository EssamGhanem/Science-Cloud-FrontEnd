'use client';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { course } from '../types';
import axios from 'axios';














export default function BuyButton(params:{course: course}) {

  const router = useRouter();
  const [orderToken, setOrderToken] = useState('');
  const course = params.course






  const authToPaymob = async () => {

    try {
      const res = await axios.post('https://accept.paymob.com/api/auth/tokens', {
        api_key: "ZXlKaGJHY2lPaUpJVXpVeE1pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SmpiR0Z6Y3lJNklrMWxjbU5vWVc1MElpd2ljSEp2Wm1sc1pWOXdheUk2TVRBeE1EWXlNeXdpYm1GdFpTSTZJakUzTXpjMk16SXpNemN1TVRreE9EZ3lJbjAueGZWcnBpTExwQlZObW4zdDV1blpuU01zS3VKNXY0VzU0RUpnaGVKQkFNMU9yRjZoRFRFU0FZandXZkxSaUVONTdzaEs0anhGcUF2WDU3d3pwWG9vemc="
      });

      return res.data.token;
    } catch (e) {
      console.log(e);
      return;
    }
  };

  const getOrderId = async (authToken: string, course: course) => {

    try {
      const res = await axios.post('https://accept.paymob.com/api/ecommerce/orders', {
        auth_token: authToken,
        amount_cents:  parseInt(course.price) * 100, // Amount in cents (e.g., 100.00 EGP = 10000 cents)
        currency: "EGP",
        items: []
      });

      return res.data.id;
    } catch (e) {
      console.log(e);
      return;
    }
  };



  const getOrderToken = async (course: course) => {

    const authToken = await authToPaymob();
    const orderId = await getOrderId(authToken,course);
    try {
      const res = await axios.post('https://accept.paymob.com/api/acceptance/payment_keys',
        {
          auth_token: authToken,
          amount_cents: parseInt(course.price) * 100,
          expiration: 4600,
          order_id: orderId,
          billing_data: {
            apartment: "NA",
            email: "customer@example.com",
            floor: "NA",
            first_name: "John",
            street: "Example St",
            building: "NA",
            phone_number: "+201234567890",
            shipping_method: "PKG",
            postal_code: "12345",
            city: "Cairo",
            country: "EG",
            last_name: "Doe",
            state: "NA"
        },
          currency: "EGP",
          integration_id: "4894778"
     });
     
      return res.data.token;
    } catch (e) {
      console.log(e);
      return;
    }
  };










  useEffect(() => {

    getOrderToken(course).then((token) => {
      
      setOrderToken(token);
    })


  }, [])


  return (


    <button onClick={() => { router.push(`https://accept.paymob.com/api/acceptance/iframes/886209?payment_token=${orderToken}`) }} className=' before:content-[""] before:w-[1000px] before:z-[0] before:h-[1000px] before:top-0  before:bg-prime px-5 bg-white before:absolute before:translate-x-[-4 0px] hover:text-white overflow-hidden before:duration-500 hover:before:translate-x-[200px] duration-300 hover:before:rotate-90 hover:before:top-[-100px]   relative before:rotate-45   w-full p-1 border-prime border-2 rounded-lg font-cairo text-[26px] max-lg:text-[22px] max-md:[16px] font-bold text-prime ' > <span className=' z-[1] relative'>شراء الأن</span></button>

  )
}
