import React, {useState} from 'react'
import "./Content.css"
const Content = () => {
    const [shot,setShot] = useState(Math.floor(Math.random() * 10) + 1 );
    const [result,setResult] = useState(0);

    const handleChange =()=>{
        setResult(0)
        setShot(Math.floor(Math.random() * 10) + 1 );
    }
    const handleClick =()=>{
        
        setResult(Math.floor(Math.random() * 10) + 1 )
    }


    return (
        <div className="content" >
            <p>You're lucky shot is <span>{shot}</span></p>
            <p> {result} </p>
            <div>
                <button onClick={handleClick} className="button button-right">Start</button>
                <button onClick={handleChange} className="button button-left" >Reset</button>
            </div>
            <div className="content-msg" >
            {
                result===0?<p></p>:
                shot===result?<p>Congrats! You're lucky 👏</p>:<p>Try again 💪</p>
            }
            </div>
        </div>
    )
}

export default Content
