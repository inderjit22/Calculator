import React, { useEffect } from "react";
import { TiArrowBack } from "react-icons/ti";
import { MdDelete } from "react-icons/md";
import { useContext } from "react";
import { AppContext } from "../AppContext";


function Hist() {
    const { GoCalculator, History, DelGetSetValue } = useContext(AppContext)

    return (
        <>
            <div onClick={GoCalculator} className="divBack bg-blue-200 w-fit rounded-full cursor-pointer gap-2 mb-4 px-4 py-2 text-xl text-center h-fit flex justify-end items-center">
                <TiArrowBack className="text-blue-800" /> Calculator
            </div>

            <div className="histDiv flex flex-col w-full h-[300px] bg-blue-100 overflow-y-scroll">
                {
                    [...History].reverse().map((item, index) => {
                        return (
                            <div key={index} className="w-full h-fit py-1 flex justify-center border-b-[1px] border-indigo-500 ">
                                {item}
                            </div>
                        )
                    })
                }
            </div>

            <div  className="div cursor-pointer w-full flex justify-center mt-4 mb-6">
                <div onClick={() => DelGetSetValue(History)} className="box  bg-red-600 text-white text-3xl font-semibold w-[70px] h-[70px] flex justify-center items-center rounded-full "><MdDelete /></div>
            </div>
        </>

    )
}

export default Hist