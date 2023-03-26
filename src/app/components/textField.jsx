import React from 'react';
import PropTypes from 'prop-types';

const TextField = ({ label, type, name, value, onChange, error }) => {
    const getInputClasses = () => {
        return 'form-control' + (error ? ' is-invalid' : '');
    };
return (
 <div className='form-group mb-2'>
     <label htmlFor={name}>{label}</label>
     <div className="input-group has-validation">
     <input
         className={getInputClasses()}
         type={type}
         id={name}
         name={name}
         value={value}
         onChange={onChange}
     />
         {error && <div className="invalid-feedback">{error}</div>}
     </div>
 </div>
);
};
TextField.defaultProps = {
    type: 'text'
};
TextField.propTypes = {
    label: PropTypes.string,
    type: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    onChange: PropTypes.func,
    error: PropTypes.string
};

export default TextField;
