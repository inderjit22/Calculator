import { createContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext();

function AppContextProvider({ children }) {

    const [History, SetHistory] = useState(GetData())

    const [Ans, SetAns] = useState()

    const showDisplay = useRef(null);

    function RemoveData() {
        showDisplay.current.innerHTML = ""
    }

    function RemoveElem() {
        let NewData = showDisplay.current.innerHTML.slice(0, -1);
        showDisplay.current.innerHTML = NewData
    }

    function HandelBTN(e) {
        showDisplay.current.innerHTML += e.target.innerHTML
    }

    const go = useNavigate()

    function GoHistory() {
        showDisplay.current.innerHTML = ""
        go('/history')
    }

    function GoCalculator() {
        go('/')
    }

    function DelGetSetValue() {
        SetHistory([])
        SetData()
    }

    useEffect(() => {
        SetData()
    }, [History])

    function SetData() {
        localStorage.setItem('HistoryData', JSON.stringify(History))
    }
    SetData()

    function GetData() {
        let get = JSON.parse(localStorage.getItem('HistoryData'));
        return get || [];
    }
    GetData()

    function calc() {
        if (showDisplay.current.innerHTML === '') {
            return;
        }

        try {
            let expression = showDisplay.current.innerHTML;
            let result = eval(expression);
            let fullResult = `${expression} = ${result}`;
            SetHistory([...History, fullResult]); // Save the result to history
            SetData(); // Save the updated history to localStorage
            showDisplay.current.innerHTML = result; // Update the display with the result
        } catch (error) {
            console.error("Invalid expression", error);
            showDisplay.current.innerHTML = "Error"; // Show error if the expression is invalid
        }
    }

    const value = {
        RemoveData,
        History,
        showDisplay,
        HandelBTN,
        Ans,
        SetAns,
        RemoveElem,
        GoHistory,
        GoCalculator,
        calc,
        DelGetSetValue

    }

    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}
export default AppContextProvider