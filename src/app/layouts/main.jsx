import React from 'react';
import { Link } from 'react-router-dom';
import { trueRussianDecline } from '../utils/trueRussianDecline';

const Main = () => {
    const persistedValue = JSON.parse(window.localStorage.getItem('data'));

    return (
        <div className='container'>
            <div className='row'>
                <h1 className='text-center m-3 fw-bold'>Карточка студента</h1>
                <div className='card col-md-6 offset-md-3'>
                    {!persistedValue && <h3>Нет данных</h3>}
                    {persistedValue && (
                        <>
                            <div className='d-flex d-inline-block'>
                                <h3 className='fw-bold me-3'>Имя:</h3>
                                <h3>{persistedValue.firstName}</h3>
                            </div>
                            <div className='d-flex d-inline-block'>
                                <h3 className='fw-bold me-3'>Фамилия:</h3>
                                <h3>{persistedValue.lastName}</h3>
                            </div>
                            <div className='d-flex d-inline-block'>
                                <h3 className='fw-bold me-3'>Год рождения:</h3>
                                <h3>{persistedValue.birthYear}</h3>
                                <h3 className='ms-3'>({trueRussianDecline(persistedValue.birthYear)})</h3>
                            </div>
                            <div className='d-flex d-inline-block'>
                                <h3 className='fw-bold me-3'>Портфолио:</h3>
                                <h3>
                                    <a href='#' className='link-primary'>{persistedValue.portfolio}</a>
                                </h3>
                            </div>
                        </>
                    )}
                    <div className='col-md-auto'>
                        <button className='btn btn-primary mt-3'>
                            <Link className='nav-link' to='/edit'>{persistedValue
                                ? 'Редактировать'
                                : 'Добавить'}
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;
