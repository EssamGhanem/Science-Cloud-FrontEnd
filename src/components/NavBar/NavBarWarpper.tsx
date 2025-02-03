'use client'
import { store } from '@/app/store/store'
import { Provider } from 'react-redux'
import NavBar from './NavBar'


export default function NavBarWarpper() {
  
  




  return (
    



      

    <>
        <Provider store={store} >

                <NavBar  />

        </Provider>
    </>


  )
}
