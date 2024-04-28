import React from 'react';
import { useDelGoodMutation } from '../redux/goodsApi';

const DelProduct = (props) => {
    const { id } = props;
    const [ delGood, { isError } ] = useDelGoodMutation();

    const clickDelHandler = async () => {
       try {
        await delGood(id).unwrap();
        console.log('Product deleted successfully');
        } catch (error) {
        console.error('Error deleting product:', error);
        console.log('isError:', isError);
        }
    }

    return (
        <>
            <button onClick={ clickDelHandler } className="products__del-btn">X</button>
        </>
    );
};

export default DelProduct;