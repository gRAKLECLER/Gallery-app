import { ChangeEvent, useState } from 'react';
import { SelectChangeEvent } from '@mui/material';
import { useSession } from 'next-auth/react';
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@/components/atoms';
import {
  CustomFormContentContainer,
  FormContainer,
  FormHeaderText,
  FormTextContainer,
  FormTitle,
  ResponseAlert,
} from '../../atoms/Base/Form/index';

export interface FormGallerieProps {
//   firstName: string;
//   lastName: string;
//   email: string;
//   pole: string;
//   manager: string;
//   role: string;
  onClose: () => void;
}

export const CreateGallerieForm = ({
    onClose,
  }: FormGallerieProps) => {

  return (
    <FormContainer
    //   onSubmit={(...args) => void handleSubmit(onSubmit)(...args)}
    >
        <p>form</p>
        <button onClick={onClose}>close</button>
    </FormContainer>
  );
};
