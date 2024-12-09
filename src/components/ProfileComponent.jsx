import React from "react";

const ProfileComponent = ({ person }) => {
  return (
    <div className="profile">
      <h2>{person.fullName}</h2>
      <img src={person.imgSrc} alt={person.fullName} />
      <BioComponent bio={person.bio} />
      <p>
        <strong>Profession:</strong> {person.profession}
      </p>
    </div>
  );
};

const BioComponent = ({ bio }) => (
  <div>
    <strong>Bio:</strong>
    {bio.map((line, index) => (
      <p key={index}>{line}</p>
    ))}
  </div>
);

export default ProfileComponent;
