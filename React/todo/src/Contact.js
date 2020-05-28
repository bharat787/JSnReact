import React from 'react'

function Contact(props) {
    return (
        <div className="Contact">
            <img src={props.imgUrl}/>
            <h1>{props.name}</h1>
            <p>Contact: {props.phone}</p>
        </div>
    )
}

export default Contact