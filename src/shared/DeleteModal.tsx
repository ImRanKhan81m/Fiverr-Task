import React from 'react';
import { RiDeleteBin6Line } from "react-icons/ri";

interface IMyProps { id: object, }
interface ProductData {
    _id: number;
}

const DeleteModal: React.FC<IMyProps> = ({ id }) => {


    // destructuring product
    const { _id } = id as ProductData;

    console.log(_id)

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
        <div>
            {/* The button to open modal */}
            <label htmlFor="my-modal-6" className="bg-warning text-white btn btn-square rounded-full btn-sm flex justify-center items-center duration-100 border-none hover:bg-error hover:shadow" > <RiDeleteBin6Line size={18} />
            </label>


            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="my-modal-6" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">Are you sure you want to delete this product?</h3>
                    <div className='flex justify-center items-center gap-3 mt-5'>
                        <button onClick={() => handleDelete()} className='btn-error rounded-md btn-sm font-bold text-white'>Yes</button>
                        <label htmlFor="my-modal-6" className='btn btn-success font-bold text-white rounded-md btn-sm'>No</label>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteModal;