import React from 'react';
import { ImCross } from 'react-icons/im';

interface IMyProps { _id: object, setOpenDeleteModal: any, }

const DeleteModal: React.FC<IMyProps> = ({ _id, setOpenDeleteModal }) => {

    const handleDelete = () => {
        fetch(`http://localhost:5000/products/${_id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    console.log(data)
                }
            })
    }


    return (
            <div className='popup_wrapper'>
            <div className="popup_content_delete relative">
                <ImCross onClick={() => setOpenDeleteModal(false)} className='absolute right-0 top-0 mr-4 mt-4 h-4 w-4 cursor-pointer' />
                <input type="checkbox" id="my-modal-6" className="modal-toggle" />
                <div>
                    <h3 className="text-lg font-bold text-center">Are you sure you want to delete this product?</h3>
                    <div className='flex justify-center items-center gap-3 mt-5'>
                            <button onClick={() => handleDelete()} className='btn-error rounded-md btn-sm font-bold text-white'>Yes</button>
                            <label onClick={()=> setOpenDeleteModal(false)} className='btn btn-success font-bold text-white rounded-md btn-sm'>No</label>

                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default DeleteModal;