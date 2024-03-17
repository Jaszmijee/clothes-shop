import styles from '../Product/Product.module.scss';
import PropTypes from "prop-types";

const ProductImage = ({ name, title, currentColor }) => {
    const imagePath = `${process.env.PUBLIC_URL}/images/products/shirt-${name}--${currentColor}.jpg`;

    return (
        <div className={styles.imageContainer}>
            <img
                className={styles.image}
                alt={title}
                src={imagePath} />
        </div>
    );
};

ProductImage.propTypes = {
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    currentColor: PropTypes.string.isRequired
}

export default ProductImage;
