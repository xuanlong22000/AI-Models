import React from 'react';
import styles from './Layout.module.scss';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import classNames from 'classnames/bind';

interface LayoutProps {
  children: React.ReactNode;
}

const cx = classNames.bind(styles);

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={cx('wrapper')}>
      <Header />
      <div className={cx('container')}>
        <Sidebar />
        <div className={cx('content')}>{children}</div>
      </div>
    </div>
  );
};

export default Layout;
