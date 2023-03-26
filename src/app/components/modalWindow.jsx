import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ModalWindow = ({ modalRef, hideModal }) => {
    return (
        <div
            className='modal fade'
            tabIndex='-1'
            ref={modalRef}
        >
                <div className='modal-dialog modal-dialog-centered'>
                    <div className='modal-content'>
                        <div className='modal-body'>
                            Обновлено!
                        </div>
                        <div className='modal-footer'>
                            <button
                                type='button'
                                className='btn btn-secondary'
                                onClick={ hideModal }
                            >
                                <Link className='nav-link' to='/'>Close</Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
           );
};

export default ModalWindow;

ModalWindow.propTypes = {
    modalRef: PropTypes.object,
    hideModal: PropTypes.func
};
