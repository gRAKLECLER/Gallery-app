import { signInWithGoogle } from '../../../../src/utils/firebase/authentification';
import { useRouter } from 'next/router';
import { Button } from '@mui/material';

import { Container } from './Login.styles';




export default function ProfileCard() {



const router = useRouter();


const LoginWithGoogle = () => {


    signInWithGoogle().then(
      () => {
        router.push(`/Gallery`)
      }
    ).catch(
      error => {
       console.log('error login ty again');
      }
    )
  }

    return (
        <Container>
            <Button variant='contained' onClick={LoginWithGoogle}>Login</Button>
        </Container>
    )
  }
  