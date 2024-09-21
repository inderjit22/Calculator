import Btn from "./Btn"
import { Routes , Route } from "react-router-dom"
import Hist from "./Hist"
import { useContext } from "react";
import { AppContext } from "../AppContext";

function App() {

  const {showDisplay} = useContext(AppContext)

  return (
    <>
      {/* Outer Div */}
      <div className=" relative m-auto outerDiv w-full max-w-[500px] h-screen">
        {/* Title */}
        <div className="titleBox w-full h-fit py-4 flex justify-center items-center">
          <h1 className=" font-bold text-2xl text-zinc-800">Calculator</h1>
        </div>
        {/* Action Div */}
        <div className="ActionDiv absolute bottom-0 right-0 w-full h-fit flex flex-wrap px-2">
          {/* display */}
          <div ref={showDisplay} className="display w-full text-4xl font-medium h-fit py-4 flex justify-end items-center overflow-hidden">
          </div>
          {/* Btn Div & History */}
          <Routes>
            <Route path="/" element={<Btn/>} />
            <Route path="/history" element={<Hist/>} />
          </Routes>          
        </div>
      </div>
    </>
  )
}

export default App
