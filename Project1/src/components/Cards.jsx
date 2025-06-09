import React from "react";

const Cards = (props) => {
    return (
        <a href={props.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit" }}>
            <div className="cards">
                <h2>{props.title}</h2>
                <img src={props.image} alt={props.title} style={{ width: "90%" }} />
                <p>{props.description}</p>
            </div>
        </a>
    );
}

export default Cards;