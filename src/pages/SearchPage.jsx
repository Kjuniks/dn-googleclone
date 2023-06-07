import React from "react";
import "./SearchPage.css";
import { useStateValue } from "../StateProvider";
import useGoogleSearch from "../useGoogleSearch";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import Search from "../components/Search";

const SearchPage = () => {
  const [{ term }, dispatch] = useStateValue();
  const { data } = useGoogleSearch(term);

  return (
    <div className="searchPage">
      <div className="searchPage__header">
        <Link to="/">
          <img className="searchPage__logo" src={Logo} alt="" />
        </Link>
        <div className="searchPage__headerBody">
          <Search hideButtons/>
        </div>
      </div>
      <div className="searchPage__results"></div>
    </div>
  );
};

export default SearchPage;
