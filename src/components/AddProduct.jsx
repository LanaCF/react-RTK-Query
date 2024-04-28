import { useState } from "react";
import { useAddGoodMutation } from "../redux/goodsApi";

const AddProduct = () => {
    const [ text, setText ] = useState('');
    const [ addGood, { isError } ] = useAddGoodMutation();
    
    const clickHandler = async () => {
        const goodName = text.trim();
        if (goodName) {
            try {
                await addGood({ name: goodName }).unwrap();
                console.log("Товар успішно додано:", goodName);
                setText('');
            } catch (error) {
                console.error("Сталася помилка під час додавання товару:", error);
                console.error(isError);
            }
        }
    }

    return (
        <div className="add-product">
            <input value={text} onChange={e => setText(e.target.value)} type="text" placeholder="Enter product name" />
            <button onClick={clickHandler} >Add</button>
        </div>
    );
};

export default AddProduct;