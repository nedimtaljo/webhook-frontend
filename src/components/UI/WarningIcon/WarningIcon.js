import React from 'react';
import warning from '../../../assets/icons/warning.svg';
import classes from './WarningIcon.module.css';

const WarningIcon = props => (
    <img src={warning} alt="Attention!" className={[classes.general, classes[props.size]].join(' ')} />
);

export default WarningIcon;