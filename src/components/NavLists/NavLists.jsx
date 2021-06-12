import { Link } from 'react-router-dom';

import { ReactComponent as Home } from '../../assets/icons/home.svg';
import { ReactComponent as Profile } from '../../assets/icons/profile.svg';

import './NavLists.scss';

const NavLists = () => {
  const navLists = [
    {
      path: '/home',
      icon: <Home className='nav-icons' />,
      name: 'Home',
      className: 'nav-list',
    },
    {
      path: '/profile',
      name: 'Profile',
      icon: <Profile className='nav-icons' />,
      className: 'nav-list',
    },
  ];

  return navLists.map(({ path, icon, name, className }, i) => (
    <Link key={i} className={className} to={path}>
      {icon} <span className='nav-list-name'>{name}</span>
    </Link>
  ));
};

export default NavLists;
