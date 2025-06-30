import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';
import { NavLink } from 'react-router';
import { AiOutlineHome, AiOutlineDatabase } from 'react-icons/ai';

const cx = classNames.bind(styles);

const Sidebar = () => {
  return (
    <aside className={cx('wrapper')}>
      <nav>
        <NavLink to="/" className={({ isActive }) => cx('navItem', { active: isActive })}>
          <AiOutlineHome size={20} style={{ marginRight: 8 }} />
          Dashboard
        </NavLink>
        <NavLink to="/models" className={({ isActive }) => cx('navItem', { active: isActive })}>
          <AiOutlineDatabase size={20} style={{ marginRight: 8 }} />
          AI Models
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
