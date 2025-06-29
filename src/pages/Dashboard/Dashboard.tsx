import React from 'react';
import styles from './Dashboard.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Dashboard = () => {
  return <div className={cx('wrapper')}>Dashboard</div>;
};

export default Dashboard;
