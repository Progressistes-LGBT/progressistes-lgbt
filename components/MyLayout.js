import Header from './Header';
import '../styles/main.scss';

const layoutStyle = {
};

const Layout = props => (
  <div style={layoutStyle} className="layout">
    <Header />
    {props.children}
  </div>
);

export default Layout;
