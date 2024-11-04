import { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { GiRoyalLove } from "react-icons/gi";
import { IoCartOutline } from "react-icons/io5";
import { addToStoredList, addToStoredWishList } from "../Utilities";



const ProductDetail = () => {
    const data = useLoaderData();
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const { id: productId, title, image, category, price, description, specification, availability, rating } = product;

    useEffect(() => {
        const singleData = data.find(product => product.id == id);
        setProduct(singleData);
    }, [data, id]);

    const handleAddToCard = (id)=>{
        addToStoredList(id);
    }

    const handleAddToWish = (id)=>{
        addToStoredWishList(id);
    }

    return (
        <div className="relative mb-[420px] md:mb-72">
            <div className="text-center text-white bg-[#9538E2] pt-8 pb-44">
                <h2 className="text-2xl font-bold">Product Details</h2>
                <p className="text-gray-300 p-4 md:w-8/12 mx-auto">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
            </div>
            <div className="w-9/12 md:flex justify-center items-center gap-8 bg-base-100 shadow-2xl p-8 rounded-xl absolute md:top-36 md:left-32 left-10 top-52">
                <img className="w-96 h-full rounded-xl" src={image} alt="" />
                <div className="space-y-1">
                    <h2 className="text-xl font-bold">{title}</h2>
                    <p className="font-semibold">Price: ${price}</p>
                    <span className="border border-green-400 rounded-full text-green-400 px-1">In Stock</span>
                    <p className="text-gray-500 max-w-96">{description}</p>
                    <p className="font-bold">Specification:</p>

                    {specification?.map((item, i) => <li className="text-gray-500" key={i}>{item}</li>)}

                    <div className="flex items-center gap-2">
                        <p className="font-bold">Rating</p>
                        <div className="rating rating-sm">
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                        </div>
                    </div>

                    <div className="rating rating-sm items-center">
                        <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                        <input
                            type="radio"
                            name="rating-6"
                            className="mask mask-star-2 bg-orange-400"
                            defaultChecked />
                        <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                        <p className="ml-2">{rating}</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <Link onClick={()=>handleAddToCard(id)} className="btn btn-sm rounded-full bg-[#9538E2] text-white">Add to Card
                            <IoCartOutline />
                        </Link>
                        <Link onClick={()=>handleAddToWish(id)} className="btn btn-sm text-xl rounded-full p-2">
                            <GiRoyalLove />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;