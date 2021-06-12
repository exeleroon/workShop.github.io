import React from 'react'
import PropTypes from 'prop-types'

const Modal = (props) =>  {
    let {header, closeBtn, text, closeModal, modalBtns} = props;
      if (closeBtn) {
        closeBtn = 'X'
      }
    
    return (
        <div className="modal show">
          <div className="modal-dialog">
            <div className='modal-content'>
            <div className='modal-header'>{header}
                <span onClick={closeModal} className='close-Btn close'>
                  {closeBtn}
                </span>
            </div>
              <div className='modal-body'>{text}
              </div>
            <div className='modal-body btns'>
              {modalBtns}
              </div>
            </div>
          </div>
      </div>
   )}


Modal.propTypes = {
  header: PropTypes.string,
  closeModal: PropTypes.func,
  text: PropTypes.string
}

Modal.defaultProps = {
  closeBtn: 'X'
}


export default Modal


