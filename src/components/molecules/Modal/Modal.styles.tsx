import Dialog from '@mui/material/Dialog';
import styled from '../../../utils/styled';

export const Container = styled('div')``;

export const ModalDialog = styled(Dialog)`
  .MuiPaper-root {
    padding: 2rem;
    display: flex;
    flex-direction: column;
    width: 100%;
    border-radius: 10px;
  }
`;
