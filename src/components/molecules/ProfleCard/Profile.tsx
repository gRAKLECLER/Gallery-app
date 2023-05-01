import Image from 'next/image'
import styles from '../ProfileCard/ProfileCard.module.css'


interface ProfileCardProps {
    firstname: string,
    lastname: string,
}

export default function ProfileCard({firstname, lastname}: ProfileCardProps) {
    return (
        <div>
            <h3>{firstname} {lastname}</h3>
            <a href="api/auth/signin">login</a>
            <a href="api/auth/signout">logout</a>
        </div>
    )
  }
  