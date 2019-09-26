import React from "react";
import Scores from "../Scores/Scores";

const Student = ({ name, bio, scores }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>{bio}</p>
      {scores.map(item => (
        <Scores scores={item.score} date={item.date} />
      ))}
    </div>
  );
};

export default Student;
