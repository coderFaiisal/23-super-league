import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ClubContext } from "../../App";
import "./Club.css";

const Club = ({ club }) => {
  const { strTeam, strSport, strTeamBadge, idTeam } = club;
  const [clubInfo, setClubInfo] = useContext(ClubContext);
  return (
    <div className="club-card">
      <img src={strTeamBadge} alt="" />
      <h2>{strTeam}</h2>
      <p>Sports type: {strSport}</p>
      <p>{idTeam}</p>
      <Link to={"/club/" + idTeam}>
        <button
          onClick={() => {
            setClubInfo(club);
          }}
          className="main-button"
        >
          Explore
        </button>
      </Link>
    </div>
  );
};

export default Club;
