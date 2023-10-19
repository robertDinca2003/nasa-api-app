import axios from "axios"
import { useState,useEffect } from "react"

import Image from "next/image"


export const PhotoMars = () =>{

    const [mars, setMars] = useState({})

    let DEMO_KEY = 'eq4ELoyGSqfxgfxeXeyDMG0mBjdyij8yrv3yNgLp'
  
    const makeGetRequest = (path) =>{
      axios.get(path).then(
        (response) => {
          setMars(response.data);
          //console.log(result);
        },
        (error) =>{
          console.log(error);
        }
      )
  }

    return(
        <div className="text-white flex flex-col items-center gap-10">
            <h1 className="text-8xl">Pictures from Mars</h1>
            <form className="flex flex-col items-center gap-6">
                <label className="text-6xl italic font-light">Select a date</label>
                <div className="flex flex-row gap-5">
                    <input className="bg-transparent p-2 border-4 text-xl rounded-[20px]" type='date'/>
                    <button className="bg-transparent border-2 border-white text-3xl px-3 py-1 rounded-[20px]">View</button>
                </div>
               </form>
            <div className="h-[800px] w-[500px] bg-cyan-700">
              <Image />
            </div>
        </div>
    )
}