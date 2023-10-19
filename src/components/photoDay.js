import Image from "next/image";
import nasaLogo from '/public/assets/NASA_logo.png'

export const PhotoDay = (props) =>{
    console.log(props)
    return(
        <div className="text-white min-h-screen gap-8  flex flex-wrap justify-center flex-col items-center ">
            <h1 className="text-6xl font-bold italic">Picture of the day</h1>
            <h3 className="font-extralight italic text-4xl">{props.date}</h3>
            <div className="rounded-[40px] bg-cyan-800 border-4 border-emerald-500 flex flex-wrap h-[850px] p-5 drop-shadow-lg">
                <Image className="object-cover h-[800px] rounded-[50px] border-4 border-emerald-500 w-auto " src={props.url} width={600} height={1200}/>
            </div>
            <h2 className="text-4xl font-mono italic underline">{props.title}</h2>
            <h2 className="p-5 text-xl bg-cyan-700 rounded-[30px] text-slate-100 border-8 border-emerald-500">{props.explanation}</h2>
        </div>

    );

}

export default PhotoDay;