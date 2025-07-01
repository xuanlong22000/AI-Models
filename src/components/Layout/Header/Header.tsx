import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import { SiSolana } from 'react-icons/si';
import { Select, MenuItem } from '@mui/material';
import { Trans, useTranslation } from 'react-i18next';
import { useLanguageStore } from '../../../hooks/useLanguageStore';

const cx = classNames.bind(styles);

const Header = () => {
  const { language, setLanguage } = useLanguageStore();
  const { t } = useTranslation();

  return (
    <header className={cx('wrapper')}>
      <div className={cx('logo-wrapper')}>
        <span className={cx('logo')}>
          <SiSolana size={32} />
        </span>
        <span className={cx('appName')}>
          <Trans i18nKey="appName" t={t} />
        </span>
      </div>
      <Select
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
        size="small"
        className={cx('langSelect')}
      >
        <MenuItem value="en">English</MenuItem>
        <MenuItem value="ja">日本語</MenuItem>
      </Select>
    </header>
  );
};

export default Header;
