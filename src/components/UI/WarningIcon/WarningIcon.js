import React from 'react';
import warningIcon from '../../../assets/icons/warning.svg';
import classes from './WarningIcon.module.css';

const WarningIcon = props => (
    <img src={warningIcon} alt="Attention!" className={[classes.general, classes[props.size]].join(' ')} />
);

export default WarningIcon;