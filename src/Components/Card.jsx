import { Link } from "react-router-dom";


const Card = ({ product }) => {
    const { id, title, image, price, category } = product;
    return (
        <div className="card bg-base-100 shadow-md">
            <figure className="px-6 pt-6">
                <img
                    src={image}
                    alt=""
                    className="rounded-xl w-full h-40" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>Price: {price}</p>
                <div className="card-actions">
                    <Link to={`/productDetail/${id}`} className="btn btn-sm border-[#9538E2] text-[#9538E2]">View Details</Link>
                </div>
            </div>
        </div>
    );
};

export default Card;