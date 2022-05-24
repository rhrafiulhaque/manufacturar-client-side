import React from 'react';
import { toast } from 'react-toastify';

const ProductRow = ({ product, index,setDeletingProduct }) => {
    const { _id, name, price, img, avilable_quantity } = product;
   
    return (
        <tr>
            <th>{index + 1}</th>
            <td><div class="avatar">
                <div class="w-9 rounded">
                    <img src={img} alt={name} />
                </div>
            </div></td>
            <td>{name}</td>
            <td>{price}</td>
            <td>{avilable_quantity}</td>
            <td>
                <label onClick={()=>setDeletingProduct(product)} for="delete-confirm-modal" class="btn btn-xs btn-error">Delete</label>
            </td>
        </tr>
    );
};

export default ProductRow;