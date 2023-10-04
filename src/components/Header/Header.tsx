import '../../styles/Header.scss';

const Header = () => {
  return (
    <div className="header">
      <img className="logo" src="/src/assets/logo-pack.svg" alt="Logotype"></img>
      <div className="search">
        <input className="search-input" type="text" placeholder="Search tasks" />
      </div>
      <a className="link" href="#">
        Go to Projects Dashboard
      </a>
      {/* <div className="darktheme">
        <div className="darktheme-text">Dark Theme</div>
        <div className="darktheme-toggle">
          <label className="switch">
            <input type="checkbox" />
            <span className="slider round"></span>
          </label>
        </div>
      </div> */}
    </div>
  );
};

export default Header;
