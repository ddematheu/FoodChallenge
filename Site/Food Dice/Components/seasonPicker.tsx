import React, { useState } from "react"
import PropTypes from "prop-types"
import {useStaticQuery, graphql} from 'gatsby'
import Img, { FixedObject } from "gatsby-image"
import { seasonButtonStyle, seasonSelectButtonStyle, seasonStyle } from "./styles/season.styles";
import { Season } from "./start";

export interface SeasonProps{
    setSeason:any;
    currentSeason:string;
}

export default function SeasonPicker (props: SeasonProps){

    return(
        <div style={seasonStyle}>
            <div style={props.currentSeason === Season.Spring ? seasonSelectButtonStyle : seasonButtonStyle} onClick = {(e) => props.setSeason(Season.Spring)}>
                Spring
            </div>
            <div style={props.currentSeason === Season.Summer ? seasonSelectButtonStyle : seasonButtonStyle} onClick = {(e) => props.setSeason(Season.Summer)}>
                Summer
            </div>
            <div style={props.currentSeason === Season.Fall ? seasonSelectButtonStyle : seasonButtonStyle} onClick = {(e) => props.setSeason(Season.Fall)}>
                Fall
            </div>
            <div style={props.currentSeason === Season.Winter ? seasonSelectButtonStyle : seasonButtonStyle} onClick = {(e) => props.setSeason(Season.Winter)}>
                Winter
            </div>
        </div>
    );
}