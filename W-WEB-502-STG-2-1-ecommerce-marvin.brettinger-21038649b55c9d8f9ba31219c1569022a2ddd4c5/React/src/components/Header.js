import React from "react";
import "./Style/Header.css";
import SearchIcon from '@material-ui/icons/Search';
import PersonIcon from '@mui/icons-material/Person';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import imgLogo from '../components/assets/logo.png';
import { Link } from 'react-router-dom';


function Header() {
  return (
    <nav className="header">
      <img className="header_logo" src={imgLogo} />
      <div className="header_search">
        <input type="text" className="header_searchInput" />
        <SearchIcon className="header_searchIcon" />
      </div>
      <div className="header_option">
        <Link to="/" className="header_link">
          <PersonIcon className="header_userIcon" />
        </Link>
        <Link to="/" className="header_link">
          <LocalGroceryStoreIcon className="header_shopIcon" />
        </Link>
      </div>
    </nav>
  )
}

export default Header;