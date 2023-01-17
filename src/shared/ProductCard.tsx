import { useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { AiOutlineHeart } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import DeleteModal from "./DeleteModal";
import DetailsModal from "./DetailsModal";


interface IMyProps { product: object, }
interface ProductData {
  _id: any;
  name: string;
  image: string;
  category: string;
  brand: string;
  price: number;
  year: number;
}

const ProductCard: React.FC<IMyProps> = ({ product }) => {

  // destructuring product
  const { _id, name, image, category, brand, price, year } = product as ProductData;
  // console.log(_id, name, image, category, brand, price, year);

  const [isAlreadyAvailable, setIsAlreadyAvailable] = useState(false);
  const navigate = useNavigate();


  return (
    <div className="bg-white rounded-md shadow  hover:shadow-lg duration-100 relative">

      <div onClick={() => navigate(`/product/s`)} className="w-full h-[200px] overflow-hidden relative cursor-pointer ">
        <img
          src={image}
          alt=""
          className="w-full h-full object-cover "
        />
        {/* <Image
          src={product?.imageURLs[0]}
          alt="product image"
          width={300}
          height={200}
          className="rounded-t-md object-cover h-[200px]"
        ></Image> */}
      </div>

      <label
        // onClick={}
        tabIndex={0}
        className="btn btn-sm btn-ghost btn-circle absolute top-0 right-0 bg-[#00000033]"
      >
        <div className="">
          <AiOutlineHeart
            className="text-secondary hover:text-primary"
            size={22}
          />
        </div>
      </label>

      <div className="p-4">
        <h1 className=" font-semibold">{name}</h1>
        <div className="flex justify-between items-center gap-2 mt-4 w-full">
          <div className="w-[80%]">
           <DetailsModal/>
          </div>
          <div className="flex items-center justify-center w-[20%]">
            <DeleteModal id={_id}/>
            {/* <div>
              <button className="bg-error text-white btn btn-sm rounded-md  flex justify-center items-center duration-100 border-none hover:bg-error hover:shadow " > <span className="flex gap-2 justify-center items-center">Delete <RiDeleteBin6Line size={18} /></span>
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;