import { Container, ModalDialog } from '../Modal/Modal.styles';
import { ReactNode } from 'react';


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
          {/* Here are component JSX components (form, message validation,etc...)*/}
          {/* {handleModalClose && <CloseButton onClick={handleModalClose} />} */}
          {formComponent}
        </ModalDialog>
        {/* JSX component wich open the modal*/}
        {buttonComponent}
      </Container>
    );
  };