// Button.tsx
import { Button as MuiButton } from '@mui/material';

export const Button = ({ label, onClick }: { label: string; onClick?: () => void }) => {
  return <MuiButton onClick={onClick}>{label}</MuiButton>;
};
