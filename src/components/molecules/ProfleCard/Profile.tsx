import Image from 'next/image'
import styles from '../ProfileCard/ProfileCard.module.css'
import { logOut, signInWithGoogle } from '../../../../src/utils/firebase/authentification';
import { useRouter } from 'next/router';


interface ProfileCardProps {
    firstname: string,
    lastname: string,
}


export default function ProfileCard({firstname, lastname}: ProfileCardProps) {

const router = useRouter();


const LoginWithGoogle = () => {
    signInWithGoogle().then(
      () => {
        router.push('/')
      }
    ).catch(
      error => {
       console.log('error login ty again');
      }
    )
  }

  const Logout = () => {
    logOut().then(
      () => {
        router.push('/')
        console.log('logout');
        
      }
    ).catch(
      error => {
        console.log('error logout');
      }
    )
  }

    return (
        <div>
            <h3>{firstname} {lastname}</h3>
            <button onClick={LoginWithGoogle}>login</button>
            <button onClick={Logout}>logout</button>
        </div>
    )
  }
  