import React from 'react'
import PropTypes from 'prop-types'
import { Formik } from 'formik';
import '../App.css';
import { useDispatch, useSelector } from 'react-redux';
import { closeModalToBuy, buyerInfo } from '../store/general/actions';
import { buyImitation } from '../store/cart/actions';



const FormModal = (props) =>  {
    let { closeBtn, closeModal, boughtGoods } = props;
      if (closeBtn) {
        closeBtn = 'X'
    }
    const dispatch = useDispatch();

    const HandleCloseModalBuy = () => {
        dispatch(closeModalToBuy())
    }

    const clearState = () => {
        dispatch(buyImitation())
    }

    const handleSubmitForm = (values) => {
            const form = {
                name: values.name,
                surname: values.surname,
                age: values.age,
                address: values.address,
                contact: values.contact
            }
            localStorage.setItem('Ordered', JSON.stringify(form));
        const pushBuyer = () => {
            dispatch(buyerInfo(form))
        }
            pushBuyer();
            HandleCloseModalBuy();
            clearState();
            console.log(`Buyer:`, form);
    }

    const handleValidate = (values) => {
          const { name, surname, age, address, contact } = values;
          const errors = {};
        
        if(!name) {
            errors.name = 'Enter the name'
        }
        if(!surname) {
            errors.surname = 'Enter the surname'
        }
        if(!age) {
            errors.age = 'Enter the age'
        }
        if(!address) {
            errors.address = 'Enter the address'
        }
        if(!contact) {
            errors.contact = 'Enter your mobile number'
        }
        return errors
    }


    
    return (
        <div>
        <Formik
            initialValues={{
                name: '',
                surname: '',
                age: '',
                address: '',
                contact: ''
            }}
            onSubmit={handleSubmitForm}
            validate={handleValidate}
        >
            {({ values, errors, touched, isSubmitting, handleBlur, handleChange, handleSubmit}) => {
                return (
      <form onSubmit={handleSubmit}>
        <div className="modal show">
          <div className="modal-dialog" style={{margin: '120px auto'}}>
            <div className='modal-content' style={{backgroundColor: '#0d6efd'}} >
            <div className='modal-header'> Are you confirm to buy this items?
                <span onClick={closeModal} className='close-Btn close'>
                  {closeBtn}
                </span>
            </div>
              <div className='modal-body' style={{ textAlign: 'left' }} >
                <label htmlFor='name'>Name: </label>
                <input name="name" type="text" onChange={handleChange} onBlur={handleBlur} value={values.name} id="name" />
                {touched.name && errors.name && (<div className="error" style={{color:'red'}}>{errors.name}</div> )}
                <div>
                    <label htmlFor='surname'>Surname: </label>
                    <input name="surname" type="text" onChange={handleChange} onBlur={handleBlur} value={values.surname} id="surname" />
                {touched.surname && errors.surname && (<div className="error" style={{color: 'red'}}>{errors.surname}</div>)}
                </div>
                <div>
                    <label htmlFor="age">Age: </label>
                    <input name='age' type="number" onChange={handleChange} onBlur={handleBlur} value={values.age} id="age" />
                {touched.age && errors.age && (<div className="error" style={{color: 'red'}}>{errors.age}</div>)}
                </div>
                <div>
                    <label htmlFor='address' >Address: </label>
                    <input name='address' type="text" onChange={handleChange} onBlur={handleBlur} value={values.address} id="address" />
                {touched.address && errors.address && (<div className="error" style={{color: 'red'}}>{errors.address}</div>)}
                </div>
                <div>
                    <label htmlFor='contact'>Mobile phone: </label>
                    <input name='contact' type="text" onChange={handleChange} onBlur={handleBlur} value={values.contact} id='contact' />
                {touched.contact && errors.contact && (<div className="error" style={{color: 'red'}}>{errors.contact} </div>)}
                </div>
              </div>
            <div className='modal-body btns'>
              <button onClick={boughtGoods} className='buyBtn' type="submit" disabled={isSubmitting} >BUY</button>
              </div>
            </div>
          </div>
        </div>
      </form>
            )
        }}
        </Formik>
      </div> )
}   

   FormModal.propTypes = {
    header: PropTypes.string,
    closeModal: PropTypes.func,
    text: PropTypes.string
  }
  
  FormModal.defaultProps = {
    closeBtn: 'X'
  }

  export default FormModal
  