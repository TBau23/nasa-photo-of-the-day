import React, { useState } from 'react'
import styled, {keyframes} from 'styled-components'

const kf = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`

const StyledDiv = styled.div`
    background-color: black;
    border: 5px solid orange;
    color: white;
    
    img {
        animation: ${kf} 1s ease-in-out;
    }
      
`


export default function PrimaryDiv(props) {

    const { nasaData, setNasaData } = props


    return(

        <StyledDiv className='container'>
            <h1>NASA Photo of the Day</h1>
            <h3>{nasaData.date}</h3>
            <h3>{nasaData.title}</h3>
            <h3>Copyright: {nasaData.copyright}</h3>

            <img src={nasaData.url} />

            <h3>Explanation</h3>
            <p>{nasaData.explanation}</p>

        </StyledDiv> 

    )


}