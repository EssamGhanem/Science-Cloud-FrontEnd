import { requests } from '@/data'
import React from 'react'
import RequestCard from './RequestCard';

export default function RequestsPage() {
  
 
  const pendingRequests = requests.filter((req)=>req.state==="pending");
  const acceptedRequests =  requests.filter((req)=>req.state==="accepted");
  const rejectedRequests =  requests.filter((req)=>req.state==="rejected");
  
  
  return (
    <>

    <div className=' p-container flex flex-col justify-center items-center gap-10'>
        <p className='w-full p-2 text-center font-kanit text-[26px] text-prime '>Join Requests</p>

      {/* pendding */}
        <div className='w-full border-2 border-black/30 rounded-lg p-2 '>
        <p className='w-full p-2 text-center font-kanit text-[22px] text-black/50 '>Pendding Requests</p>

          {
            pendingRequests.map((joinReq)=>{
              return  <RequestCard key={joinReq.id} request={joinReq} />
            })
          }
        </div>

      {/* accepted */}
      <div className='w-full border-2 border-black/30 rounded-lg p-2 '>
        <p className='w-full p-2 text-center font-kanit text-[22px] text-green-800/70 '>Accepted Requests</p>

          {
            acceptedRequests.map((joinReq)=>{
              return  <RequestCard key={joinReq.id} request={joinReq} />
            })
          }
        </div>

        {/* rejected */}
        <div className='w-full border-2 border-black/30 rounded-lg p-2 '>
        <p className='w-full p-2 text-center font-kanit text-[22px] text-red-800/70 '>Rejected Requests</p>

          {
            rejectedRequests.map((joinReq)=>{
              return  <RequestCard key={joinReq.id} request={joinReq} />
            })
          }
        </div>



    </div>
    
    
    
    </>
  )
}
