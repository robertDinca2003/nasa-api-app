import Image from "next/image";
import nextLogo from 'public/assets/NASA_logo.png'

export const Hero = () =>{
    return(
        <div className=" grid grid-rows-1 grid-cols-2 items-center text-white content-center justify-center w-[100vw] min-h-screen gap-10">
           <Image className="h-[35vw] w-[35vw] justify-self-center justify-center" src={nextLogo} height={300} width={300}/>
            <div className="px-10">
                <h1 className="justify-self-center text-center text-8xl">{'{APIs}'}</h1>
                <h2 className="text-center text-3xl"> This website is based on an <a href="https://api.nasa.gov/" target="_blank " className="underline font-bold hover:text-slate-300 transition-colors duration-200">open-source</a> api from Nasa</h2>
                <h2 className="text-center text-3xl">We are providing you with information about universe</h2>
            </div> 
        </div>
    );
}

export default Hero;