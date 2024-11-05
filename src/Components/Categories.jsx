import { NavLink } from "react-router-dom";


const Categories = ({categories}) => {
    
    return (
        <div className="bg-base-100 shadow-md p-4 mr-6 rounded-md">
            <NavLink className={({isActive})=>`btn btn-sm w-full ${isActive? 'bg-[#9538E2] text-white':''}`} to="/">All Products</NavLink>
            {/* <button className="btn btn-sm w-full">All Products</button> */}
            {categories.map(category => <div className="mt-2 btn btn-sm flex flex-col" key={category.category} >
                <NavLink className={({isActive})=>`btn btn-sm w-full ${isActive? 'bg-[#9538E2] text-white':''}`} to={`/category/${category.category}`}>{category.category}</NavLink>
            </div>)}
        </div>
    );
};

export default Categories;