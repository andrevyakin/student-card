import React from 'react';
import PropTypes from 'prop-types';

const Profile = ({ item, value }) => {
    return (
        <div className='d-flex d-inline-block'>
            <h3 className='fw-bold me-3'>{item}:</h3>
            <h3>{value}</h3>
        </div>
    );
};

export default Profile;

Profile.propTypes = {
    item: PropTypes.string,
    value: PropTypes.string
};
