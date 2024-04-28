import React, { useState } from 'react';
import { useEditGoodMutation } from '../redux/goodsApi';
import DelProduct from './DelProduct';

const ProductsList = ({ data }) => {
  const [editGood, { isError }] = useEditGoodMutation();

  const [editingId, setEditingId] = useState(null);  
  const [editedText, setEditedText] = useState({});

  const handleEdit = async (id) => {
    try {
      await editGood({ id, name: editedText[id] });
      setEditingId(null);
      console.log('Product edited successfully');
    } catch (error) {
      console.error('Error editing product:', error);
      console.log('isError:', isError);
    }
  }

  const handleChange = (e, id) => {
    setEditedText({ ...editedText, [id]: e.target.value });
  }

  const handleToggleEditing = (id) => {
    setEditingId(id === editingId ? null : id);
  }

  return (
    <>
      {
        data.length
        ? (
            <div className="products">
              <h3>Products list</h3>
              <div className="products__list">
                {
                  data.map(item => (
                    <div key={item.id} className="products__box">

                      <DelProduct id={item.id} />

                      <button 
                        onClick={() => {
                          if (editingId === item.id) {
                            handleEdit(item.id);
                          } else {
                            handleToggleEditing(item.id);
                          }
                        }} 
                        className="products__edit-btn"
                      >
                        { editingId === item.id ? 'Save' : 'Edit' }
                      </button>

                      <textarea
                        className={ editingId === item.id ? 'products__item active' : 'products__item' }
                        disabled={ editingId !== item.id }
                        value={ editedText[item.id] || item.name }
                        onChange={ (e) => handleChange(e, item.id) }
                      ></textarea>
                    </div>
                  ))
                }
              </div>
            </div>
          )
        : <h3>No products!</h3>
      }
    </>
  );
};

export default ProductsList;















// import React, { useState } from 'react';
// import { useEditGoodMutation } from '../redux/goodsApi';
// import DelProduct from './DelProduct';

// const ProductsList = ({ data }) => {
//     const [editingId, setEditingId] = useState(null);
//     const [editGood, { isError }] = useEditGoodMutation();
//     const [editedText, setEditedText] = useState({});

//     const handleEdit = async (id) => {
//         try {
//             await editGood({ id, name: editedText[id] });
//             setEditingId(null); // Скидаємо ID редагованого елемента
//             console.log('Product edited successfully');
//         } catch (error) {
//             console.error('Error editing product:', error);
//             console.log('isError:', isError);
//         }
//     }

//     const handleChange = (e, id) => {
//         setEditedText({ ...editedText, [id]: e.target.value }); // Оновлюємо стан зі значенням введеним користувачем
//     }

//     const handleToggleEditing = (id) => {
//         setEditingId(id === editingId ? null : id); // Активуємо / деактивуємо редагування для вибраного елемента
//     }

//     return (
//         <>
//             {
//                 data.length
//                     ? (
//                         <div className="products">
//                             <h3>Products list</h3>
//                             <div className="products__list">
//                                 {
//                                     data.map(item => (
//                                         <div key={item.id} className="products__box">

//                                             <DelProduct id={item.id} />

//                                             <button onClick={() => handleToggleEditing(item.id)} className="products__edit-btn">
//                                                 {editingId === item.id ? 'Save' : 'Edit'}
//                                             </button>

//                                             <textarea
//                                                 className={editingId === item.id ? 'products__item active' : 'products__item'}
//                                                 disabled={editingId !== item.id}
//                                                 value={editedText[item.id] || item.name}
//                                                 onChange={(e) => handleChange(e, item.id)}
//                                             ></textarea>

//                                         </div>
//                                     ))
//                                 }
//                             </div>
//                         </div>
//                     )
//                     : <h3>No products!</h3>
//             }
//         </>
//     );
// };

// export default ProductsList;