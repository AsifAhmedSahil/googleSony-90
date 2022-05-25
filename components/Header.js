import { MicrophoneIcon, SearchIcon, XIcon } from "@heroicons/react/solid";
import Image from "next/image"
import {useRouter} from 'next/router';
import { useRef } from "react";
import Avater from "./Avater";
import HeaderOptions from "./HeaderOptions";
import HeaderOption from "./HeaderOptions";



const Header = () => {
    const router = useRouter();
    const searchInputRef = useRef(null);
    const search = e =>{
        e.preventDefault();

        const term = searchInputRef.current.value;
        if(!term) return;
        router.push(`/search?term=${term}`);
    }
  return (

    
    <header className="sticky top-0 bg-white">
        

            <div className="flex w-full p-6 items-center">
            <Image
            src="https://www.google.co.uk/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
            width={120}
            height={40}
            className="cursor-pointer"
            onClick={() => router.push("/")}
         />

            <form className="flex border border-gray-200 flex-grow rounded-full shadow-lg max-w-3xl items-center px-6 py-3 ml-10 mr-5 ">
             <input ref={searchInputRef} className=" flex-grow w-full focus:outline-none" type="text" />

             <XIcon className="h-7 sm:mr-3 cursor-pointer text-gray-600 transition duration-500 transform hover:scale-125 pr-4"
             onClick={()=>(searchInputRef.current.value = "")}
             />

             <MicrophoneIcon className="h-6 mr-3 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300"/>

             <SearchIcon className="h-6 text-blue-500 sm:inline-flex hidden"/>

             <button className="hidden" type="submit" onClick={search}>Search</button>
         </form>
         <Avater className="ml-auto" url="https://th.bing.com/th/id/OIP.BK0uNDyYSQRsZwmpAFB39QHaHa?w=173&h=180&c=7&r=0&o=5&pid=1.7"/>

            </div>

            {/* Header Option */}
            <HeaderOptions/>

           
    
    </header>
  )
}

export default Header