import NavLists from '../NavLists/NavLists';
import CustomButton from '../CustomButton/CustomButton';

import './Sidebar.scss';

const Sidebar = () => {
  return (
    <nav className='sidebar'>
      <div className='sidebar-nav-lists'>
        <NavLists />

        <CustomButton>Tweet</CustomButton>
      </div>

      <div></div>
    </nav>
  );
};

export default Sidebar;
