import { Link } from "react-router-dom";
import { MdOutlineDeleteForever } from "react-icons/md";


const AddList = ({ cart, handleRemove }) => {
    const { id, image, title, price, description } = cart;
    return (
        <div>
            <div>
            {/* <h3>cart: {cart.length}</h3> */}
            </div>
            <div className="flex items-center gap-6 my-6">
                <img className="w-36 rounded-xl" src={image} alt="" />
                <div className="flex justify-between items-center w-full">
                    <div className="space-y-1">
                        <h3 className="text-xl font-bold">{title}</h3>
                        <p className="text-gray-400">{description}</p>
                        <p>Price: {price}</p>
                    </div>
                    <Link onClick={()=>handleRemove(id)} className="btn btn-sm text-xl p-2 rounded-2xl">
                        <MdOutlineDeleteForever />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AddList;