import React from "react";
import "./Home.css"
import { useEffect, useState } from "react";
import Club from "../Club/Club";

const Home = () => {
  const [clubs, setClubs] = useState([]);;
  useEffect(() => {
    const url =
      "https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setClubs(data.teams));
  }, []);
  return (
    <div className="home-container">
      {clubs.map((club) => (
        <Club club={club}></Club>
      ))}
    </div>
  );
};

export default Home;
