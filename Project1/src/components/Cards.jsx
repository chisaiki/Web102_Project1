import React from "react";

const Cards = (props) => {
    const { image, title, description, link } = props;
    return (
        <a href={link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit" }}>
            <div className="cards">
                <img src={image} alt={title} className="card-image" />
                <h3 className="card-title">{title}</h3>
                <div className="card-description">{description}</div>
                {/* ...other content... */}
            </div>
        </a>
    );
}

export default Cards;