"use client"

import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useEffect, useState } from 'react'
import axios from 'axios'
const inter = Inter({ subsets: ['latin'] });






export default function Home() {

  const [result,setResult] = useState({});

  const makeGetRequest = (path) =>{
    axios.get(path).then(
      (response) => {
        setResult(response.data);
        console.log(result);
      },
      (error) =>{
        console.log(error);
      }
    )
}

useEffect(()=>{
    makeGetRequest('https://randomuser.me/api/');
},[])

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
        <h1>Hello world</h1>
    </main>
  )
}
