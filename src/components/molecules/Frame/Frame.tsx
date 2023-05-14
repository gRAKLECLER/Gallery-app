import Image from 'next/image'
import styles from '../Frame/Frame.module.css'
import { DeleteOutlineIcon } from '@/components/atoms'
import { useState } from 'react';
import { Modal } from '../Modal/Modal';


interface FrameProps {
    src: string,
    alt: string | null,
    height: number,
    width: number,
    deleteElement?: (e: any) => void;
}

export default function Frame({src, alt, deleteElement}: FrameProps) {

    const [isHovering, setIsHovering] = useState(false);
    const [isFrameModalOpen, setFrameModalOpen] = useState(false);

    const handleMouseOver = () => {
      setIsHovering(true);
    };
  
    const handleMouseOut = () => {
      setIsHovering(false);
    };

    const CloseModalFrame = () => {
        setFrameModalOpen(false);
      };
    
    
    return (
        <>
            <div 
                className={styles.container}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
                onClick={() => setFrameModalOpen(true)}
            >
                {(isHovering && deleteElement) && <div className={styles.deleteContent}  onClick={deleteElement}>
                <DeleteOutlineIcon color={isHovering && 'error'}/>
                </div>}
                <Modal formComponent={<Frame src={src} width={600} height={600} alt={alt}/>} isModalOpen={isFrameModalOpen} handleModalClose={() => setFrameModalOpen(false)}/>
                
                <Image className={styles.frame} src={src} alt={alt ?? ''} width={100} height={100}/>
            </div>
        </>
    )
  }
  