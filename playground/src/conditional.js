import React from "react"
import { loadavg } from "os"

function Conditional(props) {
    if(props.isLoading === true) {
        return (
            <h1>loading...</h1>
        )
            
    } else {
        return (
            <h1>some cool stuff coming</h1>
        )
    }
}

export default Conditional