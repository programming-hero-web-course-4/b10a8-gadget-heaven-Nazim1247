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
            <div className="flex">
            <Categories categories={categories}></Categories>
            <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Home;