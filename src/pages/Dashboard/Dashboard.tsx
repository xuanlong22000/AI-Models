import styles from './Dashboard.module.scss';
import classNames from 'classnames/bind';
import { Trans, useTranslation } from 'react-i18next';

const cx = classNames.bind(styles);

const Dashboard = () => {
  const { t } = useTranslation();

  return (
    <div className={cx('wrapper')}>
      <div className={cx('header')}>
        <h1>
          <Trans i18nKey="welcome" t={t} />
        </h1>
      </div>
    </div>
  );
};

export default Dashboard;
