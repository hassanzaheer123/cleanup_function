import { useEffect, useState } from "react"

function App() {
const [size,setSize]=useState(window.innerWidth);

const handleresize=()=>{
  setSize(window.innerWidth);
}
useEffect(() => {
  window.addEventListener('resize', handleresize);

  return () => {
    window.removeEventListener('resize', handleresize);
  };
}, []);

  return (
    <>
      <div className="container-fluid">
        <h1 className="text-center mt-5 text-danger">Screen Size is {size}</h1>
      </div>
    </>
  )
}

export default App
