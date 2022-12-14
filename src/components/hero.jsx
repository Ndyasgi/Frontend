import React, {useEffect} from "react";
import vid from "../assets/video (2).mp4";

const Hero = () => {
    return(
        <div className="main">
            <div className="overlay"></div>
            <video src={vid} autoPlay loop muted />
            <div className="content max-w-[1140px] m-auto">
                <div className="absolute top-[40%] w-full md:-[50%] max-w-[700px] h-full flex flex-col text-white p-4">
                    <h1 className="font-bold text-4xl">Temukan Perjalanan Spesial</h1>
                    <h2 className="text-4xl py-4 italic">Bersama Trap</h2>
                    <p>Aplikasi Sarana Informasi Tempat Wisata di Sulawesi Utara Berbasis Website</p>
                </div>
            </div>
        </div>
    )

}
  export default Hero