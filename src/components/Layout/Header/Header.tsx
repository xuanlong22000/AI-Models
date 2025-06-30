import { useState } from 'react';
import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import { SiSolana } from 'react-icons/si';
import { Select, MenuItem } from '@mui/material';

const cx = classNames.bind(styles);

const Header = () => {
  const [lang, setLang] = useState('en');

  return (
    <header className={cx('wrapper')}>
      <div className={cx('logo-wrapper')}>
        <span className={cx('logo')}>
          <SiSolana size={32} />
        </span>
        <span className={cx('appName')}>AI Model Manager</span>
      </div>
      <Select
        value={lang}
        onChange={(e) => setLang(e.target.value)}
        size="small"
        className={cx('langSelect')}
      >
        <MenuItem value="en">English</MenuItem>
        <MenuItem value="vi">Tiếng Việt</MenuItem>
        <MenuItem value="jp">日本語</MenuItem>
      </Select>
    </header>
  );
};

export default Header;
