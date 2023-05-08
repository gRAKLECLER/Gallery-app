import { logOut, signInWithGoogle } from '../../../utils/firebase/authentification';
import { useRouter } from 'next/router';
import { Container } from './Profile.styles';
import { Button } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';


interface ProfileCardProps {
    fullName: string,
    email: string;
}


export default function ProfileCard({fullName, email}: ProfileCardProps) {

const router = useRouter();

  const Logout = () => {
    logOut().then(
      () => {
        router.push('/Gallery')
        
      }
    ).catch(
      error => {
        console.log('error logout');
      }
    )
  }

    return (
        <Container>
          <div>
            <h3>{fullName}</h3>
            <span>{email}</span>
          </div>
            <div onClick={Logout}>
              <LogoutIcon  color="inherit"/>
            </div>
        </Container>
    )
  }

  