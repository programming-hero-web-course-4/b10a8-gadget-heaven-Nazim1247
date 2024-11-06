import { useLoaderData } from "react-router-dom";
import Card from "../Components/Card";
import NoData from "../Components/NoData";


const Favorites = () => {
    const data = useLoaderData();
    const cart = data.slice(0, 6);
    return (
        <div>
            <div className="text-center bg-[#9538E2] text-white py-12 my-8">
                <h3 className="text-2xl font-bold mb-4">My Favorites Products</h3>
                <p className="text-gray-300 md:w-8/12 mx-auto">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto">
                {cart.length > 0 ? cart.map(product => <Card key={product.id} product={product}></Card>) : <NoData></NoData>}
            </div>
        </div>
    );
};

export default Favorites;