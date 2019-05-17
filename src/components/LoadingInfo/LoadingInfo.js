import React from 'react';
import classes from './LoadingInfo.module.css';
import WarningIcon from "../UI/WarningIcon/WarningIcon";

const LoadingInfo = props => {
    let content = null;
    switch (props.status) {
    case 'loading':
        content = <span className={classes.loading}>LOADING WEBHOOK</span>;
        break;
    case 'failed':
        content = (
            <>
                <WarningIcon size="standard" />
                <p className={classes.paragraph}>
                    <span className={classes.failedUpper}>Webhook is not running</span><br />
                    <span className={classes.failedLower}>Please make sure the Webhook is up and running...</span>
                </p>
            </>
        );
        break;
    }

    return (
        <div className={classes.content}>
            {content}
        </div>
    );
}

export default LoadingInfo;