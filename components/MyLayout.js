import Header from './Header';
import Footer from './Footer';
import '../styles/main.scss';

const Layout = props => (
  <div className="layout">
    <Header />
    {props.children}
    <Footer />
  </div>
);

export default Layout;
