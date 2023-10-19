"use client"

import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useEffect, useState } from 'react'
import axios from 'axios'
import PhotoDay from '../components/photoDay.js'
import { PhotoMars } from '@/components/photoMars.js'
import Hero from '../components/hero.js'
const inter = Inter({ subsets: ['latin'] });






export default function Home() {

  const [result,setResult] = useState({});

  let DEMO_KEY = 'eq4ELoyGSqfxgfxeXeyDMG0mBjdyij8yrv3yNgLp'

  const makeGetRequest = (path) =>{
    axios.get(path).then(
      (response) => {
        setResult(response.data);
        //console.log(result);
      },
      (error) =>{
        console.log(error);
      }
    )
}


useEffect(()=>{
    makeGetRequest(`https://api.nasa.gov/planetary/apod?api_key=${DEMO_KEY}`);
},[])


useEffect(()=>{console.log(result)},[result])
  return (
    <main
      className={`flex overflow-hidden gap-20 bg-gradient-to-b from-cyan-300 via-blue-500  to-cyan-900  min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
        <Hero/>
        <PhotoDay url={result.url} title={result.title} date={result.date} explanation={result.explanation} />
        <PhotoMars/>
    </main>
  )
}
