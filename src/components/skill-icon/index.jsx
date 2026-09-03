import React, {useState} from "react";

function SkillIcon({ name, icon}) {

  const isCypress = icon.toLowerCase().includes("cypress");

  return (
    <>
    <div className="skill-icon" >
      <img src={icon} alt={name} className={isCypress ? "logo-cypress-fundo" : ""} />
      <p>{name}</p>
    </div>
    </>
  );
}

export default SkillIcon;