import React, { useEffect, useState } from "react"
import { Background, Pages } from "./start";
import { buttonDivStyle, backButtonStyle, challengeStyle, challengeTitleStyle, ingredientAreaStyle, ingredientsStyle, nextButtonStyle } from "./styles/Ingredients.styles";


export interface ChallengeProps{
    setPage:any;
    setBackground:any;
}

export default function Challenge (props: ChallengeProps){

    const [timeLeft, setTimeLeft] = useState(3600);
    const [startCounter, setStartCounter] = useState(false);

    let time = secondsToTime(timeLeft) ;


    useEffect(() => {
        const timer = timeLeft > 0 && startCounter === true && setInterval(() => {
            setTimeLeft(timeLeft - 1)
            time = secondsToTime(timeLeft)
        }, 1000);
        return () => clearInterval(timer);
      }, [startCounter, timeLeft]);

    function secondsToTime(secs){
        let hours = Math.floor(secs / (60 * 60));
    
        let divisor_for_minutes = secs % (60 * 60);
        let minutes = Math.floor(divisor_for_minutes / 60);
    
        let divisor_for_seconds = divisor_for_minutes % 60;
        let seconds = Math.ceil(divisor_for_seconds);
    
        let obj = {
          "h": hours,
          "m": minutes,
          "s": seconds
        };
        return obj;
      }

    return(
        <div style={challengeStyle}>
            <div style={challengeTitleStyle}>
                Time Left: {time.h}:{time.m}:{time.s}
            </div>
            <div style={buttonDivStyle}>
                <button style={backButtonStyle} onClick={(e) => 
                    {
                        props.setBackground(Background.Ingredients)
                        props.setPage(Pages.Ingredients)
                    }
                }>
                    Back
                </button>
                <button style={nextButtonStyle} onClick={(e) => {
                    setStartCounter(true);
                }}>
                    Start
                </button>
            </div>
        </div>
    );
}