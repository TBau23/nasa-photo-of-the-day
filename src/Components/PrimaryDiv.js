import React, { useState } from 'react'


export default function PrimaryDiv(props) {

    const { nasaData, setNasaData } = props


    return(

        <div className='container'>
            <h1>NASA Photo of the Day</h1>
            <h3>{nasaData.date}</h3>
            <h3>{nasaData.title}</h3>
            <h3>{nasaData.copyright}</h3>

            <img src={nasaData.url} />

            <h3>Explanation</h3>
            <p>{nasaData.explanation}</p>

        </div>

    )


}