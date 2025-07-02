import { useEffect } from 'react';
import styles from './DetailModel.module.scss';
import classNames from 'classnames/bind';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate, useParams } from 'react-router';
import { useTranslation } from 'react-i18next';
import { useModelsStore } from '../../hooks/useModelsStore';
import { AiFillOpenAI } from 'react-icons/ai';

const cx = classNames.bind(styles);

const DetailModel = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { id } = useParams();
  const model = useModelsStore((state) => state.models.find((model) => model.id === id));

  useEffect(() => {
    if (!model) {
      navigate('/models');
    }
  }, [model, navigate]);

  return (
    <div className={cx('wrapper')}>
      <Button
        variant="outlined"
        startIcon={<ArrowBackIcon />}
        className={cx('back-btn')}
        onClick={() => navigate('/models')}
      >
        {t('back')}
      </Button>
      <Card className={cx('detail-card')}>
        <CardContent>
          <Typography variant="h4" className={cx('model-title')} gutterBottom>
            <AiFillOpenAI className={cx('model-icon')} size={24} color="black" />
            {model?.name}
          </Typography>
          <Typography variant="body1" className={cx('model-desc')} gutterBottom>
            {model?.description}
          </Typography>
          <div className={cx('info-row')}>
            <Typography variant="subtitle2">{t('modelVersion')}:</Typography>
            <Typography variant="body2">{model?.version}</Typography>
          </div>
          <div className={cx('info-row')}>
            <Typography variant="subtitle2">{t('modelStatus')}:</Typography>
            <Typography variant="body2">{model?.status}</Typography>
          </div>
          <div className={cx('info-row')}>
            <Typography variant="subtitle2">{t('modelCreatedAt')}:</Typography>
            <Typography variant="body2">
              {model?.createdAt ? new Date(model.createdAt).toLocaleString() : ''}
            </Typography>
          </div>
          <div className={cx('info-row')}>
            <Typography variant="subtitle2">{t('modelTags')}:</Typography>
            <div className={cx('tags-list')}>
              {model?.tags.map((tag, idx) => (
                <Chip key={idx} label={tag} size="small" color="primary" />
              ))}
            </div>
          </div>
          <div className={cx('content-row')}>
            <Typography variant="subtitle2">{t('modelContent')}:</Typography>
            <Typography variant="body2">{model?.content}</Typography>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DetailModel;
