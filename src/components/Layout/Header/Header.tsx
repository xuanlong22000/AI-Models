import React from 'react';
import styles from './Header.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Header = () => {
  return <header className={cx('wrapper')}>Header</header>;
};

export default Header;
