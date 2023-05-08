import { alertClasses } from '@mui/material/Alert';

import styled from '@/utils/styled';
import { Alert, Box, Typography } from '@/components/atoms';

export const FormContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  color: black;
  .${alertClasses.root} {
    display: flex;
    flex-direction: row;
  }
`;

export const DeleteFormContainer = styled(FormContainer)`
  text-align: center;
`;

export const FormTextContainer = styled('div')`
  display: flex;
  flex-direction: column;
`;

export const DeleteFormTextContainer = styled(FormTextContainer)`
  gap: 2rem;
`;

export const FormTitle = styled(Typography)`
  font-size: 16px;
  font-weight: bold;
`;

export const FormHeaderText = styled(Typography)`
  color: darkgrey;
`;

export const FormHeaderTextBold = styled('span')`
  color: grey;
  font-weight: bold;
`;

export const FormContentContainer = styled('div')`
  display: flex;
  gap: 2rem;
  button {
    width: 100%;
  }
`;

export const CustomFormContentContainer = styled(FormContentContainer)`
  flex-direction: column;
`;

export const ResponseAlert = styled(Alert)`
  color: darkgreen;
`;

export const FormButtonContainer = styled('div')`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  button {
    width: 100%;
    height: auto;
    &:nth-of-type(1) {
      background: none;
      border: 1px solid lightgrey;
      color: black;
      &:hover {
        background-color: darkgray;
      }
    }
  }
`;
