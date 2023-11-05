import React,{ useEffect, useRef, useState} from "react";
import { makeRandomNumber } from "./utils";

function Timer(){
    const [price, setPrice] = useState(0);
    const [color, setColor] = useState('black')
    const prevPriceRef = useRef(price)

    useEffect(()=> {
        const prevPrice = prevPriceRef
        console.log({ price, prevPrice})

        if(price > prevPrice){
            setColor("green")
        }else if(price < prevPrice){
            setColor('red')
        }else{
            setColor('black')
        }

        prevPriceRef.current = price
    },[price])

    useEffect(()=>{
        //every second, generate a new price
        const id = setInterval(()=> setPrice(makeRandomNumber),1000);
        return function(){
            clearInterval(id)
        }
    },[])
    return(
        <div>
            <h1>TickerMaster</h1>
            <h2 style={{ color: color }}>Price: Ksh:{price}</h2>
        </div>
    )
}

export default Timer