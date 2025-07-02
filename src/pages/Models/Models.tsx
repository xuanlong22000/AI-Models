import { useEffect } from 'react';
import styles from './Models.module.scss';
import classNames from 'classnames/bind';
import { useModelsStore } from '../../hooks/useModelsStore';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';

const cx = classNames.bind(styles);

const Models = () => {
  const models = useModelsStore((state) => state.models);
  const error = useModelsStore((state) => state.error);
  const fetchModels = useModelsStore((state) => state.fetchModels);
  const { t } = useTranslation();
  const navigate = useNavigate();

  useEffect(() => {
    if (models.length === 0) {
      fetchModels();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={cx('wrapper')}>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <Box className={cx('models-list')}>
        {models.map((model) => (
          <Card
            key={model.id}
            className={cx('model-card')}
            onClick={() => navigate(`/models/${model.id}`)}
          >
            <CardContent>
              <Typography variant="h6" gutterBottom className={cx('model-title')}>
                {model.name}
              </Typography>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                {t('modelDescription')}: {model.description}
              </Typography>
              <Typography variant="caption" color="text.secondary">
                {t('modelVersion')}: {model.version} | {t('modelStatus')}: {model.status}
              </Typography>
              <Typography variant="caption" color="text.secondary" display="block">
                {t('modelCreatedAt')}: {new Date(model.createdAt).toLocaleString()}
              </Typography>
              <Box mt={1} className={cx('model-tags')}>
                {model.tags.map((tag, idx) => (
                  <Chip key={idx} label={tag} size="small" />
                ))}
              </Box>
            </CardContent>
          </Card>
        ))}
      </Box>
      {models.length === 0 && !error && (
        <Typography variant="body1" color="text.secondary">
          {t('noModelsFound')}
        </Typography>
      )}
    </div>
  );
};

export default Models;
