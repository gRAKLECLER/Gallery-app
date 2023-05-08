import Image from 'next/image'
import styles from '../Frame/Frame.module.css'
import { DeleteOutlineIcon } from '@/components/atoms'
import { useState } from 'react';
// import { deleteFrame } from '@/utils/firebase/firebase';


interface FrameProps {
    src: string,
    alt: string | null,
    height: number,
    width: number,
    id: string,
}

export default function Frame({src, alt, height, width, id}: FrameProps) {

    const [isHovering, setIsHovering] = useState(false);

    const handleMouseOver = () => {
      setIsHovering(true);
    };
  
    const handleMouseOut = () => {
      setIsHovering(false);
    };
    
    const deleteEl = () => {
        console.log('delete', id);
    }
    
    return (
        <>
            <div className={styles.container}  onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}>
            {isHovering && <div className={styles.deleteContent}  onClick={deleteEl}>
            <DeleteOutlineIcon color={isHovering && 'error'}/>
            </div>}
            
            <Image className={styles.frame} src={src} alt={alt ?? ''} width={100} height={100}/>
            </div>
        </>
    )
  }
  