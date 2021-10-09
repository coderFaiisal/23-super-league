import React, { useContext } from "react";
import "./ClubDetail.css";
import { ClubContext } from "../../App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import femaleImg from "../../images/female.png";
import maleImg from "../../images/male.png";

const ClubDetail = () => {
  const [clubInfo] = useContext(ClubContext);
  const {
    strTeamBanner,
    strTeam,
    strGender,
    intFormedYear,
    strCountry,
    strSport,
    strDescriptionEN,
    strStadiumDescription,
    strTwitter,
    strYoutube,
    strWebsite,
  } = clubInfo;
  return (
    <div>
      <div>
        <img className="club-banner-img" src={strTeamBanner} alt="" />
      </div>
      <div>
        <div className="club-banner-info-container">
          <div className="club-banner-info">
            <div>
              <h3>{strTeam}</h3>
              <p>Founded: {intFormedYear}</p>
              <p>Country: {strCountry}</p>
              <p>Sport type: {strSport}</p>
              <p> Gender: {strGender}</p>
            </div>
            <div>
              {strGender === "female" ? (
                <img className="banner-info-img" src={femaleImg} alt="" />
              ) : (
                <img className="banner-info-img" src={maleImg} alt="" />
              )}
            </div>
          </div>
        </div>
        <div className="club-description">
          <p>{strDescriptionEN}</p>
          <p>{strStadiumDescription}</p>
        </div>
        <div className="club-social-icons">
          <a href={"https://" + strTwitter} target="_blank" rel="noreferrer">
            <span className="twitter">
              <FontAwesomeIcon icon={faTwitter} />
            </span>
          </a>
          <a href={"https://" + strWebsite} target="_blank" rel="noreferrer">
            <span className="facebook">
              <FontAwesomeIcon icon={faFacebook} />
            </span>
          </a>
          <a href={"https://" + strYoutube} target="_blank" rel="noreferrer">
            <span className="youtube">
              <FontAwesomeIcon icon={faYoutube} />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ClubDetail;
