import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "../Components/Banner";
import Categories from "../Components/Categories";


const Home = () => {
    const categories = useLoaderData();
    return (
        <div>
            {/* banner */}
            <Banner></Banner>
            {/* categories and product */}
            <h2 className="text-3xl font-bold text-center text-[#9538E2] mb-4">Explore Cutting-Edge Gadgets</h2>
            <div className="flex">
            <Categories categories={categories}></Categories>
            <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Home;