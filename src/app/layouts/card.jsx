import React from 'react';
import { Link } from 'react-router-dom';
import { trueRussianDecline } from '../utils/trueRussianDecline';
import Profile from '../components/profile';

const Card = () => {
    const persistedValue = JSON.parse(window.localStorage.getItem('data'));

    return (
        <div className='container'>
            <div className='row'>
                <h1 className='text-center m-3 fw-bold'>Карточка студента</h1>
                <div className='card col-md-6 offset-md-3'>
                    {!persistedValue && <h3>Нет данных</h3>}
                    {persistedValue && (
                        <>
                            <Profile item='Имя' value={persistedValue.firstName}/>
                            <Profile item='Фамилия' value={persistedValue.lastName}/>
                            <div className='d-flex d-inline-block'>
                                <Profile item='Год рождения' value={persistedValue.birthYear}/>
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

export default Card;
