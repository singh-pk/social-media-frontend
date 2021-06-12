import { withRouter } from 'react-router-dom';

const Header = ({ location }) => {
  const { pathname } = location;

  return <header>{pathname === '/home' ? 'Home' : 'Profile'}</header>;
};

export default withRouter(Header);
