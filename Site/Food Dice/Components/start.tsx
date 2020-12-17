import React, { useState } from "react"
import { buttonDivStyle, buttonStyle, startStyle, titleStyle } from "./styles/start.styles";
import SeasonPicker from "./seasonPicker";
import Ingredients from "./ingredients";
import Challenge from "./challenge";

export interface StartProps{

}

export enum Pages {
    Home = "Home",
    Ingredients = "Ingredients",
    Challenge = "Challenge"
  }

export enum Season {
    Summer = "Summer",
    Spring = "Spring",
    Fall = "Fall",
    Winter = "Winter"
  }

export enum Background {
    Home = 'url(../../background2.png)',
    Ingredients = 'url(../../background3.png)',
    Challenge = 'url(../../background4.png)'
}


export default function Start (props: StartProps){

    const [page, setPage] = useState(Pages.Home);
    const [options, setOptions] = useState(null);
    const [season, setSeason] = useState(Season.Spring);
    const [background, setBackground] = useState(Background.Home)

    function getOptions(season:string){
        let url = 'https://fooddice.azurewebsites.net/api/FoodDice?season=' + season
        fetch(url, {
            method: "GET",
            headers : {
                "access-control-allow-origin" : "no-cors"
            }
        })
        .then(res => res.json())
        .then((data) => {
            console.log(data)
            setOptions(data)
            setPage(Pages.Ingredients)
            setBackground(Background.Ingredients)
        })
        return 1;
    }

    return(
    <div style = {
        {
            backgroundImage: background,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
        }
    }>
        {
        (page === Pages.Home) &&
        <div style={startStyle}>
            <div style={titleStyle}>
                David and Tati's Food Challenge
            </div>
            <SeasonPicker 
            currentSeason = {season}
            setSeason = {setSeason}/>
            <div style={buttonDivStyle}>
                <button style={buttonStyle} onClick={(e) => getOptions(season)}>
                    Start Challenge!
                </button>
            </div>
        </div>
        }
        {
        (page === Pages.Ingredients) &&
        <Ingredients options = {options} setPage = { setPage } setBackground = {setBackground}/>
        }
        {
        (page === Pages.Challenge) &&
        <Challenge setPage = { setPage } setBackground = {setBackground}/>
        }
    </div>
    );
}