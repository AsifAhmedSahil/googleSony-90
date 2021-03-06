

function Avater({url , className}) {

  return <img
   className={`h-10 w-10 rounded-full cursor-pointer animate-bounce transition duration-150 transform hover:scale-110 ${className}`} 
   loading="lazy"
    src={url} alt="profile picture"
    
    />

}

export default Avater