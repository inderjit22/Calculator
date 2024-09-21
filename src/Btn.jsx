import React, { useEffect } from "react";
import { MdHistory } from "react-icons/md";
import { useContext } from "react";
import { AppContext } from "../AppContext";

function Btn() {
    const {HandelBTN,RemoveElem,RemoveData,GoHistory,calc} = useContext(AppContext)

    return (
        <>
            <div className="btnDiv w-full h-fit flex flex-wrap gap-2 px-5  mt-4 mb-[40px]">
                <div className="div w-full flex justify-between">
                    <div onClick={RemoveData} className="box cursor-pointer text-zinc-800  bg-blue-200 text-2xl font-semibold w-[70px] h-[70px] flex justify-center items-center rounded-full ">AC</div>
                    <div onClick={HandelBTN} className="box cursor-pointer text-zinc-800  bg-blue-200 text-2xl font-semibold w-[70px] h-[70px] flex justify-center items-center rounded-full ">%</div>
                    <div onClick={HandelBTN} className="box cursor-pointer text-zinc-800  bg-blue-200 text-2xl font-semibold w-[70px] h-[70px] flex justify-center items-center rounded-full ">/</div>
                    <div onClick={RemoveElem} className="box cursor-pointer text-zinc-800  bg-blue-200 text-2xl font-semibold w-[70px] h-[70px] flex justify-center items-center rounded-full ">Del</div>
                </div>
                <div className="div w-full flex justify-between">
                    <div onClick={HandelBTN} className="box cursor-pointer text-zinc-800  bg-zinc-200 text-2xl font-semibold box w-[70px] h-[70px] flex justify-center items-center rounded-full ">7</div>
                    <div onClick={HandelBTN} className="box cursor-pointer text-zinc-800  bg-zinc-200 text-2xl font-semibold box w-[70px] h-[70px] flex justify-center items-center rounded-full ">8</div>
                    <div onClick={HandelBTN} className="box cursor-pointer text-zinc-800  bg-zinc-200 text-2xl font-semibold box w-[70px] h-[70px] flex justify-center items-center rounded-full ">9</div>
                    <div onClick={HandelBTN} className="box cursor-pointer text-zinc-800  bg-blue-200 text-2xl font-semibold box w-[70px] h-[70px] flex justify-center items-center rounded-full ">*</div>
                </div>
                <div className="div w-full flex justify-between">
                    <div onClick={HandelBTN} className="box cursor-pointer text-zinc-800  bg-zinc-200 text-2xl font-semibold box w-[70px] h-[70px] flex justify-center items-center rounded-full ">4</div>
                    <div onClick={HandelBTN} className="box cursor-pointer text-zinc-800  bg-zinc-200 text-2xl font-semibold box w-[70px] h-[70px] flex justify-center items-center rounded-full ">5</div>
                    <div onClick={HandelBTN} className="box cursor-pointer text-zinc-800  bg-zinc-200 text-2xl font-semibold box w-[70px] h-[70px] flex justify-center items-center rounded-full ">6</div>
                    <div onClick={HandelBTN} className="box cursor-pointer text-zinc-800  bg-blue-200 text-2xl font-semibold box w-[70px] h-[70px] flex justify-center items-center rounded-full ">-</div>
                </div>
                <div className="div w-full flex justify-between">
                    <div onClick={HandelBTN} className="box cursor-pointer text-zinc-800  bg-zinc-200 text-2xl font-semibold box w-[70px] h-[70px] flex justify-center items-center rounded-full ">1</div>
                    <div onClick={HandelBTN} className="box cursor-pointer text-zinc-800  bg-zinc-200 text-2xl font-semibold box w-[70px] h-[70px] flex justify-center items-center rounded-full ">2</div>
                    <div onClick={HandelBTN} className="box cursor-pointer text-zinc-800  bg-zinc-200 text-2xl font-semibold box w-[70px] h-[70px] flex justify-center items-center rounded-full ">3</div>
                    <div onClick={HandelBTN} className="box cursor-pointer text-zinc-800  bg-blue-200 text-2xl font-semibold box w-[70px] h-[70px] flex justify-center items-center rounded-full ">+</div>
                </div>
                <div className="div w-full flex justify-between">
                    <div onClick={GoHistory} className="box cursor-pointer text-zinc-800  bg-orange-400 text-3xl font-semibold box w-[70px] h-[70px] flex justify-center items-center rounded-full "><MdHistory /></div>
                    <div onClick={HandelBTN} className="box cursor-pointer text-zinc-800  bg-zinc-200 text-2xl font-semibold box w-[70px] h-[70px] flex justify-center items-center rounded-full ">0</div>
                    <div onClick={HandelBTN} className="box cursor-pointer text-zinc-800  bg-zinc-200 text-2xl font-semibold box w-[70px] h-[70px] flex justify-center items-center rounded-full ">.</div>
                    <div onClick={calc} className="box cursor-pointer bg-blue-600 text-white text-4xl font-semibold w-[70px] h-[70px] flex justify-center items-center rounded-full ">=</div>
                </div>
            </div>
        </>
    )
}

export default Btn