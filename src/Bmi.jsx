import { useRef,useState } from "react";
export default function Bmi(){
    const W_input = useRef(null);
    const h_input = useRef(null);
    const [bmi,setBmi] = useState(0.00);
    function hadleClick(){
        let W = W_input.current.value;
        let h = h_input.current.value/100;
        setBmi(W/Math.pow(h,2));
    }
    return (<>
    Weight : <input ref={W_input}/> 
    Height : <input ref={W_input}/>
    <button onClick={hadleClick}>Calculate</button>
    <br />
    BMI : {bmi.toFixed(2)}
    </>
    )
}