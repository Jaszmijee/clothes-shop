import styles from '../Product/Product.module.scss';
import React from 'react';
import PropTypes from 'prop-types';
import clsx from "clsx";

const OptionColor = ({ colors, currentColor, handleColorChange }) => {

    const prepareColorClassName = color => {
        return styles['color' + color[0].toUpperCase() + color.substr(1).toLowerCase()];
    }

    return (
        <div className={styles.colors}>
            <h3 className={styles.optionLabel}>Select Color:</h3>
            <ul className={styles.choices}>
                {colors.map(item =>
                    <li key={item}>
                        <button type="button"
                                className={clsx(prepareColorClassName(item), item === currentColor && styles.active)}
                                onClick={() => handleColorChange(item)}/>
                    </li>
                )}
            </ul>

        </div>
    );
};

OptionColor.propTypes = {
    colors: PropTypes.arrayOf(PropTypes.string).isRequired,
    currentColor: PropTypes.string.isRequired,
    handleColorChange: PropTypes.func.isRequired,
};

export default OptionColor