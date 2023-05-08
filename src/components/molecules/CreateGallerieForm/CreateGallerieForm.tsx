import { useState } from 'react';
import { Box, Button, IconButton, Typography } from '@mui/material';
import LinearProgress, { LinearProgressProps } from '@mui/material/LinearProgress';
import ClearIcon from '@mui/icons-material/Clear';
import PhotoIcon from '@mui/icons-material/Photo';
import {
  UploadIcon
} from '@/components/atoms';
import {
  FormContainer,
} from '../../atoms/Base/Form/index';
import { addGallerie } from '@/utils/firebase/gallery.firestore';
import Image from 'next/image';
import { storage } from '@/utils/firebase/firebase';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { GalleryCollection } from '@/types';
import { ButtonContainer, Title, UploadContent, FileUpload, ProgressBarContent } from './CreateGallerieForm.styles';

export interface FormGallerieProps {
  onClose: () => void;
  userId: string;
  galleryArray: GalleryCollection[] | undefined;
}

export const CreateGallerieForm = ({
    onClose,
    userId,
    galleryArray
  }: FormGallerieProps) => {

    const [picture, setPicture] = useState<File>()
    const [downloadURL, setDownloadURL] = useState('')
    const [progress, setProgress] = useState(0)

    function LinearProgressWithLabel(props: LinearProgressProps & { value: number }) {
      return (
        <FileUpload>
          <PhotoIcon color='primary'/>
          <Box sx={{ width: 150}}>
            <ProgressBarContent>
              <h5>{picture?.name}</h5>
              <Typography variant="body2" color="text.secondary">{`${Math.round(
                props.value,
              )}%`}</Typography>
            </ProgressBarContent>
            <LinearProgress variant="determinate" {...props} />
          </Box>
          <Box sx={{ width: 50}}>
           
          </Box>
          <IconButton onClick={handleRemoveFile}>
           <ClearIcon/>
         </IconButton>
        </FileUpload>
      );
    }

    const sendGallery = () => {
            const name = picture?.name 
            console.log(name);
            
            const storageRef = ref(storage, name);

            const uploadTask = uploadBytesResumable(storageRef, picture);

            uploadTask.on('state_changed', 
            (snapshot) => {
              // let inProgress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
              console.log('Upload is ' + progress + '% done');
              switch (snapshot.state) {
                case 'paused':
                  console.log('Upload is paused');
                  break;
                case 'running':
                  console.log('Upload is running');
                  break;
              }
            }, 
            (error) => {
            console.error(error);
            }, 
            () => {
              getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                setDownloadURL(url)
                setProgress((uploadTask.snapshot.bytesTransferred / uploadTask.snapshot.totalBytes) * 100);
                if (downloadURL !== '') {
                  const gallery = {
                  userImage: {
                    image: downloadURL,
                    userImageId: userId
                  }
                }
          
                addGallerie(gallery)
          
                galleryArray?.push(gallery)
                }
              });
            }
            
          );

     
      console.log(galleryArray ,downloadURL, picture);
      
    }

    const handleSelectFile = (file: any) => {

      if (file && file[0].size < 1000000){
        setPicture(file[0])
      }else {
        console.log('error');
      }

    }

    const handleRemoveFile = () => setPicture(undefined)

  return (
    <FormContainer
    >
        <Title>Add new image to your Gallery</Title>


        {!picture ? 
        <UploadContent>
          <Typography color="GrayText">Upload your file here</Typography>
          <Typography color="GrayText">file supported .png, .jpeg, .webp</Typography>
          <Button variant="contained" component="label">
            Upload
            <input hidden accept="image/*" type="file" onChange={(file) => handleSelectFile(file.target.files)}/>
          </Button>
         </UploadContent>
       
         : 
         <div>
          <LinearProgressWithLabel value={progress} />
         {downloadURL !== '' ?? <Image src={downloadURL} alt={downloadURL} width={200} height={200}/>}
       </div>
       }
         <ButtonContainer>
            <Button variant='contained' onClick={sendGallery}>Send</Button>
            <Button variant='contained' onClick={onClose}>close</Button>
         </ButtonContainer>
    </FormContainer>
  );
};
