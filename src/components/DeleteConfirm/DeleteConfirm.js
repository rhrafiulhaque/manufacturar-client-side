import React from 'react';
import { toast } from 'react-toastify';

const DeleteConfirm = ({deletingProduct,refetch,setDeletingProduct}) => {
    const{name,_id} =deletingProduct;
    const handleDelete = () => {
        fetch(`https://dry-journey-86237.herokuapp.com/product/${_id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                    toast.success(`${name} is Deleted`);
                    setDeletingProduct(null)
                    refetch();
            })
    }
    return (
        <div>
            <input type="checkbox" id="delete-confirm-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg text-red-500">Are you sure you want to delete {name}!</h3>
                    <p class="py-4">If you delete once You can not retrive the product. Please Pay Attention</p>
                    <div class="modal-action">
                        <button onClick={() => handleDelete()} class="btn btn-xs btn-error">Delete</button>
                        <label for="delete-confirm-modal" class="btn btn-xs">Cancel</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteConfirm;