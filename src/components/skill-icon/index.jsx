import React, {useState} from "react";

function SkillIcon({ name, icon}) {
  return (
    <>
    <div className="skill-icon" >
      <img src={icon} alt={name} />
      <p>{name}</p>
    </div>
    </>
  );
}

export default SkillIcon;