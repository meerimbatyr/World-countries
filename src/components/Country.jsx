import React from "react";

export default function Country({ country }) {
  const { flags, name, capital, population } = country;
  return (
    <div className="card">
      <img src={flags.svg} alt="flag" />
      <p className="name">{name.common}</p>
      <p>
        <span className={capital ? "capital" : "none"}>Cap:</span>
        {capital ? capital[0] : "None"}
      </p>
      <p>
        <span>Pop:</span>
        {population}
      </p>
    </div>
  );
}
