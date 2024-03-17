import styles from '../Product/Product.module.scss';
import PropTypes from "prop-types";
import clsx from 'clsx';

const OptionSize = ({ sizes, currentSize, handleSizeChange }) => {
    return (
        <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>Select Size:</h3>
            <ul className={styles.choices}>
                {sizes.map(item =>
                 <li key={item.name}>
                       <button type="button"
                              className={clsx(styles.name, item.name === currentSize && styles.active)}
                             onClick={() => handleSizeChange(item.name)}> {item.name}</button>
                 </li>
               )}
            </ul>
        </div>
    );
};

OptionSize.propTypes = {
    sizes: PropTypes.arrayOf(PropTypes.object).isRequired,
    currentSize: PropTypes.string.isRequired,
    handleSizeChange: PropTypes.func.isRequired,
};


export default OptionSize ;