import { Container, ModalDialog } from '../Modal/Modal.styles';
import { ReactNode } from 'react';
import CloseIcon from '@mui/icons-material/Close';


interface ModalProps {
    formComponent?: ReactNode;
    userId?: string;
    buttonComponent?: ReactNode;
    isModalOpen: boolean;
    handleModalClose?: () => void;
  }
  export const Modal = ({
    formComponent,
    buttonComponent,
    isModalOpen,
    handleModalClose,
  }: ModalProps) => {
    return (
      <Container>
        <ModalDialog
          onClose={(_, reason) => reason === 'backdropClick' && handleModalClose}
          open={isModalOpen}
        >
          {handleModalClose && <div onClick={handleModalClose}>
            <CloseIcon />
            </div>
            }
          {formComponent}
        </ModalDialog>
        {buttonComponent}
      </Container>
    );
  };