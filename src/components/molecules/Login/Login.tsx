import Image from 'next/image'
import styles from '../ProfileCard/ProfileCard.module.css'
import { logOut, signInWithGoogle } from '../../../../src/utils/firebase/authentification';
import { useRouter } from 'next/router';




export default function ProfileCard() {

const router = useRouter();


const LoginWithGoogle = () => {
    signInWithGoogle().then(
      () => {
        router.push('/Gallery')
      }
    ).catch(
      error => {
       console.log('error login ty again');
      }
    )
  }

    return (
        <div>
            <button onClick={LoginWithGoogle}>login</button>
        </div>
    )
  }
  