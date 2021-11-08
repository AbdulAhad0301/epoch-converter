import React from "react"

const times = [
    {country:"Albania", gmt:"+1"},
    {country:"Bulgaria", gmt:"+2"},
    {country:"Turkey", gmt:"+3"},
    {country:"Armenia", gmt:"+4"},
    {country:"Pakistan", gmt:"+5"},
]

function Info(){

    return times.map(function (element){
        return <p>{element.country} is {element.gmt}</p>
    })
}
export default Info;