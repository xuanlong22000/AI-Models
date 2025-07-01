import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';
import { NavLink } from 'react-router';
import { AiOutlineHome, AiOutlineDatabase } from 'react-icons/ai';
import { Trans, useTranslation } from 'react-i18next';

const cx = classNames.bind(styles);

const Sidebar = () => {
  const { t } = useTranslation();

  return (
    <aside className={cx('wrapper')}>
      <nav>
        <NavLink to="/" className={({ isActive }) => cx('navItem', { active: isActive })}>
          <AiOutlineHome size={20} style={{ marginRight: 8 }} />
          <Trans i18nKey="dashboard" t={t} />
        </NavLink>
        <NavLink to="/models" className={({ isActive }) => cx('navItem', { active: isActive })}>
          <AiOutlineDatabase size={20} style={{ marginRight: 8 }} />
          <Trans i18nKey="aiModels" t={t} />
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
