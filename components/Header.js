import Link from 'next/link';

const linkStyle = {
  marginRight: 15
};

const Header = () => (
  <div>
    <Link href="/mission">
      <a style={linkStyle}>Mission</a>
    </Link>
    <Link href="/equipe">
      <a style={linkStyle}>Équipe</a>
    </Link>
  </div>
);

export default Header;
