import styles from './Dashboard.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Dashboard = () => {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('header')}>
        <h1>Welcome to AI Model Manager</h1>
      </div>
    </div>
  );
};

export default Dashboard;
