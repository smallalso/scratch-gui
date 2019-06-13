import classNames from 'classnames';
// import {FormattedMessage} from 'react-intl';
import PropTypes from 'prop-types';
import React from 'react';
import Button from '../button/button.jsx';

import styles from './release-button.css';

const ReleaseButton = ({
    className,
    isReleasing,
    onClick
}) => (
    <Button
        className={classNames(
            className,
            styles.releaseButton,
            {[styles.releaseButtonIsReleased]: isReleasing}
        )}
        onClick={onClick}
    >
        {isReleasing ? '发布中' : '去发布'}
    </Button>
);

ReleaseButton.propTypes = {
    className: PropTypes.string,
    isReleasing: PropTypes.bool,
    onClick: PropTypes.func
};

ReleaseButton.defaultProps = {
    onClick: () => {}
};

export default ReleaseButton;
