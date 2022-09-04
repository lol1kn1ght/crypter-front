import "css/Header.css";
import logo from "png/logo.png";
import search from "svg/search.svg";
import { Notification } from "components/Notification";

export const Header = () => {
  return (
    <header className='app-header'>
      <div className='left-content'>
        <div className='logo'>
          <img src={logo} alt='logo' />
          <div className='text-logo'>crypto</div>
        </div>
        <span className='divider'></span>
        <div className='header-button'>Discover</div>
        <div className='header-button gray'>How it work</div>
      </div>
      <div className='right-content'>
        <div className='search-plate'>
          <img src={search} alt='search' className='search-icon' />
          <input type='text' className='search-field' placeholder='Search' />
        </div>
        <Notification fresh={true} />
        <div className='header-buttons'>
          <div className='action-button blue'>Upload</div>
          <div className='action-button'>Connect Wallet</div>
        </div>
      </div>
    </header>
  );
};
