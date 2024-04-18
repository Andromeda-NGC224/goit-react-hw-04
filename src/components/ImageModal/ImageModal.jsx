import Modal from 'react-modal';
import css from './ImageModal.module.css'

export default function ImageModal({ currantImg, onCloseModal, onOpenModal }) { 

    const customStyles = {
        overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.75)'
    },
        content: {
    padding: `none`,
    border: `none`,
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    overflow: 'hidden',
  }};
    
    return (
        <Modal  isOpen={onOpenModal} onRequestClose={onCloseModal}
            style={customStyles}
      >
        <img  style={{
            maxWidth: `95vw`,
    maxHeight: '95vh',
            objectFit: 'contain',
          }} src={currantImg.urls.regular} alt={currantImg.slug} />
        </Modal>
    )
} 