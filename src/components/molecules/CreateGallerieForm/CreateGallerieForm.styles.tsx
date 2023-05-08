import { Typography } from '@mui/material';
import styled from '../../../utils/styled';


export const Title = styled(Typography)`
    font-size: 1.2rem;
    color: grey;
`

export const ButtonContainer = styled('div')`
    display: flex;
    gap: 2rem;
    width: 100%;

    button {
        width: 100%;
    }
`

export const UploadContent = styled('div')`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px dashed blue;
    text-align: justify;
    width: 100%;
    padding: .5rem;
`

export const FileUpload =  styled('div')`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const ProgressBarContent = styled('div')`
    display: flex;
    justify-content: space-between;
`