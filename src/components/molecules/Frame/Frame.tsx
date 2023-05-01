import Image from 'next/image'
import styles from '../Frame/Frame.module.css'


interface FrameProps {
    src: string,
    alt: string | null,
    height: number,
    width: number,
}

export default function Frame({src, alt, height, width}: FrameProps) {
    return (
           <Image className={styles.frame} src={src} alt={alt ?? ''} height={height} width={width}/>
    )
  }
  