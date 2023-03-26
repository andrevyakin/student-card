import React, { useState, useEffect, useRef } from 'react';
import TextField from '../components/textField';
import { validator } from '../utils/validator';
import ModalWindow from '../components/modalWindow';
import { Modal } from 'bootstrap';
import { Link } from 'react-router-dom';

const Edit = () => {
    const [data, setData] = useState(() => {
        const persistedValue = window.localStorage.getItem('data');
        return persistedValue !== null
            ? JSON.parse(persistedValue)
            : {
                firstName: '',
                lastName: '',
                birthYear: '',
                portfolio: ''
            };
    });
    const newRecord = window.localStorage.getItem('newRecord');
    const [errors, setErrors] = useState({});
    const modalRef = useRef();
    const showModal = () => {
        const modalEle = modalRef.current;
        const bsModal = new Modal(modalEle, {
            backdrop: 'static',
            keyboard: false
        });
        bsModal.show();
    };

    const hideModal = () => {
        const modalEle = modalRef.current;
        const bsModal = Modal.getInstance(modalEle);
        bsModal.hide();
        if (!newRecord) {
            window.localStorage.setItem('newRecord', 'true');
        }
    };
    const handleChange = ({ target }) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
    };
    const validatorConfig = {
        firstName: {
            isRequired: {
                message: 'Поле "Имя" обязательно для заполнения'
            }
        },
        lastName: {
            isRequired: {
                message: 'Поле "Фамилия" обязательно для заполнения'
            }
        },
        birthYear: {
            isRequired: {
                message: 'Поле "Год роджения" обязательно для заполнения'
            },
            isBirthYear: {
                message: 'Поле "Год рождения" не корректно'
            }
        },
        portfolio: {
            isRequired: {
                message: 'Поле "Портфолио" обязательно для заполнения'
            },
            isUrl: {
                message: 'Поле "Портфолио" должно быть ссылкой'
            }
        }
    };
    useEffect(() => {
        validate();
    }, [data]);
    const validate = () => {
        const errors = validator(data, validatorConfig);
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };
    const isValid = Object.keys(errors).length !== 0;

    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = validate();
        if (!isValid) return null;
        window.localStorage.setItem('data', JSON.stringify(data));
    };
    return (
        <div>
            <div className='container'>
                <div className='row'>
                    <h1 className='text-center m-3'>{!newRecord
                        ? 'Создать'
                        : 'Редактировать'}
                    </h1>
                    <div className='card col-md-6 offset-md-3'>
                        <div className='card-body'>
                            <form onSubmit={handleSubmit}>
                                <TextField
                                    label='Имя'
                                    name='firstName'
                                    value={data.firstName}
                                    onChange={handleChange}
                                    error={errors.firstName}
                                />
                                <TextField
                                    label='Фамилия'
                                    name='lastName'
                                    value={data.lastName}
                                    onChange={handleChange}
                                    error={errors.lastName}
                                />
                                <TextField
                                    label='Год рождения'
                                    type='number'
                                    name='birthYear'
                                    value={data.birthYear}
                                    onChange={handleChange}
                                    error={errors.birthYear}
                                />
                                <TextField
                                    label='Портфолио'
                                    type='url'
                                    name='portfolio'
                                    value={data.portfolio}
                                    onChange={handleChange}
                                    error={errors.portfolio}
                                />
                                <div className='d-flex d-inline-block'>
                                    {newRecord && <button
                                        className='btn btn-secondary me-3'
                                    >
                                        <Link className='nav-link' to='/'>Назад</Link>
                                    </button>}
                                    <button
                                        className='btn btn-primary'
                                        onClick={showModal}
                                        disabled={isValid}
                                    >
                                        {!newRecord
                                            ? 'Создать'
                                            : 'Обновить'
                                        }
                                    </button>
                                </div>
                                <ModalWindow
                                    modalRef={modalRef}
                                    hideModal={hideModal}
                                />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Edit;
