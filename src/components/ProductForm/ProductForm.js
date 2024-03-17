import styles from '../Product/Product.module.scss';
import OptionSize from "../OptionSize/OptionSize";
import OptionColor from "../OptionColor/OptionColor";
import Button from "../Button/Button";
import PropTypes from "prop-types";


const ProductForm = ({title, getPrice, basePrice, colors, sizes, currentColor, currentSize, handleColorChange, handleSizeChange, handleAddToCart }) => {
    return (
        <form>
            <header>
                        <h2 className={styles.name}>{title}</h2>
                        <span className={styles.price}>Price: {getPrice(basePrice, currentSize.additionalPrice)}$</span>

                    </header>
            <OptionSize
            sizes={sizes}
            handleSizeChange={handleSizeChange}
            currentSize={currentSize} />
            <OptionColor

                colors={colors}
                currentColor={currentColor}
                handleColorChange={handleColorChange}
            />
            <Button className={styles.button} type="button"
                            onClick={handleAddToCart}>
                       <span className="fa fa-shopping-cart"/>
                   </Button>
        </form>
    );
};


ProductForm.propTypes = {
    title: PropTypes.string.isRequired,
    basePrice: PropTypes.number.isRequired,
    colors: PropTypes.arrayOf(PropTypes.string).isRequired,
    sizes: PropTypes.arrayOf(PropTypes.object).isRequired,
    currentColor: PropTypes.string.isRequired,
    handleColorChange: PropTypes.func.isRequired,
    handleSizeChange: PropTypes.func.isRequired,
    handleAddToCart: PropTypes.func.isRequired,
};

export default ProductForm;