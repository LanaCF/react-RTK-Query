// import React, { useState } from 'react';
// import { useEditGoodMutation } from '../redux/goodsApi';

// const EditProduct = ({ isEditing, toggleEditing, id }) => {
//     const [editedText, setEditedText] = useState('');
//     const [editGood, { isError }] = useEditGoodMutation();

//     const handleEdit = async () => {
//         try {
//             await editGood({ id, name: editedText });
//             toggleEditing(null); // Перемикаємо isEditing, щоб деактивувати режим редагування
//             console.log('Product edited successfully');
//         } catch (error) {
//             console.error('Error editing product:', error);
//             console.log('isError:', isError);
//         }
//     }

//     const handleChange = (e) => {
//         setEditedText(e.target.value); // Оновлюємо стан зі значенням введеним користувачем
//     }

//     return (
//         <>
//             <button onClick={isEditing ? handleEdit : toggleEditing} className="products__edit-btn">{isEditing ? 'Save' : 'Edit'}</button>
//             {isEditing && <textarea value={editedText} onChange={handleChange} />}
//         </>
//     );
// };

// export default EditProduct;







// import React, { useState } from 'react';
// import { useEditGoodMutation } from '../redux/goodsApi';

// const EditProduct = ({ id, initialText }) => {
//   const [ editGood, { isError } ] = useEditGoodMutation();
//   const [isEditing, setIsEditing] = useState(false);
//   const [editedText, setEditedText] = useState(initialText);

//   const handleEdit = async () => {
//     try {
//       await editGood({ id, name: editedText });
//       console.log('Product edited successfully');
//     } catch (error) {
//       console.error('Error editing product:', error);
//       console.log('isError:', isError);
//     }
//   }

//   return (
//     <>
//       <button onClick={() => setIsEditing(!isEditing)} className="products__edit-btn">{!isEditing ? 'Edit' : 'Save'}</button>
//       <textarea 
//         className='products__item'
//         value={editedText}
//         readOnly={!isEditing}
//         onChange={(e) => setEditedText(e.target.value)}
//       />
//     </>
//   );
// };

// export default EditProduct;




