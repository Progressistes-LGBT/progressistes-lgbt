import Link from 'next/link';

const Header = () => (
  <div className="header">
    {/*
    <div className="header__l-menu">
      <Link href="/">
        <a>Accueil</a>
      </Link>
      <Link href="/mission">
        <a>Mission</a>
      </Link>
      <Link href="/equipe">
        <a>Équipe</a>
      </Link>
    </div>
    */}
    <div className="header__logo">
      <img src="/static/logo.svg" />
      <div>Progressistes LGBT+</div>
    </div>
    {/*
    <div className="header__r-menu">
      <Link href="/">
        <a target="_blank">Donner</a>
      </Link>
    </div>
    */}
  </div>
);

export default Header;
