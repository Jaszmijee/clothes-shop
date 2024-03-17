import styles from './Product.module.scss';
import PropTypes from 'prop-types';
import productsData from "../../data/products";
import {useMemo, useState} from "react";
import ProductImage from "../ProductImage/ProductImage";
import ProductForm from "../ProductForm/ProductForm";

const Product = ({name, title, basePrice}) => {

    const product = productsData.find(product => product.name === name);

    const [currentColor, setCurrentColor] = useState(product.colors[0]);
    const [currentSize, setCurrentSize] = useState(product.sizes[0].name);


    const handleColorChange = color => {
        setCurrentColor(color);
    };

    const handleSizeChange = size => {
        setCurrentSize(size);
    };

    const price = useMemo(() => {
        const size = product.sizes.find(item => item.name === currentSize);
        return basePrice + size.additionalPrice;
    }, [currentSize]);

    const handleAddToCart = e => {
        e.preventDefault();
        console.log("Summary:");
        console.log("Name:", title);
        console.log("Price:", price);
        console.log("Size:", currentSize);
        console.log("Color:", currentColor);

    };

    return (
        <article className={styles.product}>
            <ProductImage name={name} title={title} currentColor={currentColor}/>
            <ProductForm price={price} sizes={product.sizes} currentSize={currentSize}
                         handleSizeChange={handleSizeChange} name={name} currentColor={currentColor} title={title}
                         colors={product.colors} handleColorChange={handleColorChange}
                         handleAddToCart={handleAddToCart}/>

        </article>
    )
};

Product.propTypes = {
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    basePrice: PropTypes.number.isRequired,
}

export default Product;