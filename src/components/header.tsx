const Header: React.FC<{ currentPage: number }> = ({ currentPage }) =>
  <header className="header__container">
    <h1 className="header__title">The World of Disney</h1>
    <p className="header__page-count ">Page: {currentPage}</p>
  </header>;

export default Header;