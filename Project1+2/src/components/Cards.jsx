import React from "react";

const Cards = ({ title, description, image, link, isStudyMode }) => {
  if (isStudyMode) {
    return (
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img src={image} alt={title} style={{width: '90%', height: '75%', objectFit: 'cover', borderRadius: '7px'}} />
            <h3 style={{fontSize: '1.5em'}}>Who is this?</h3>
          </div>
          <div className="flip-card-back">
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <a href={link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit" }}>
      <div className="cards" onClick={() => window.open(link, '_blank')}>
        <img src={image} alt={title} className="card-image" />
        <h3 className="card-title">{title}</h3>
        <div className="card-description">{description}</div>
        {/* ...other content... */}
      </div>
    </a>
  );
}

export default Cards;