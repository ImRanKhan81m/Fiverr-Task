import React from 'react';


const DetailsModal = () => {
    return (
        <div>
            {/* The button to open modal */}
           
            <label  htmlFor="my-modal-5" className="bg-primary text-white  btn-sm rounded-md  flex justify-center items-center duration-100 border-none hover:bg-success hover:shadow w-full " >Details
            </label>


            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my-modal-5" className="modal-toggle" />
            <label htmlFor='my-modal-5' className="modal modal-bottom sm:modal-middle">
                <label htmlFor='' className="modal-box relative">
                    <label htmlFor="my-modal-5" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold py-10">Product Details Modal !</h3>
                </label>
            </label>
        </div>
    );
};

export default DetailsModal;