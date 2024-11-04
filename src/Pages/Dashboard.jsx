import { useEffect, useState } from "react";
import { NavLink, useLoaderData } from "react-router-dom";
import { getStoredList } from "../Utilities";
import AddList from "../Components/AddList";
import WishList from "../Components/WishList";


const Dashboard = () => {
    const allProducts = useLoaderData();
    const [addList, setAddList] = useState([]);

    // const [wishList, setWishList] = useState([]);

    // useEffect(()=>{
    //     const wishAddList = getStoredList();
    //     const wishProductListInt = wishAddList.map(id => parseInt(id));
    //     const wishProductList = allProducts.filter(product => wishProductListInt.includes(product.id));
    //     setWishList(wishProductList);
    // },[])

    useEffect(()=>{
        const storedAddList = getStoredList();
        const storedAddListInt = storedAddList.map(id => parseInt(id));

        const addProductList = allProducts.filter(product => storedAddListInt.includes(product.id));
        setAddList(addProductList);
    }, [])
    return (
        <div>
            <div className="text-center bg-[#9538E2] text-white py-8">
                <h3 className="text-2xl font-bold">Dashboard</h3>
                <p className="text-gray-300 md:w-8/12 mx-auto">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                <div className="space-x-4 mt-4">
                    <NavLink className="btn btn-sm">AddList</NavLink>
                    <NavLink className="btn btn-sm">Wishlist</NavLink>
                </div>
            </div>
            {addList.map(cart => <AddList key={cart.id} cart={cart}></AddList>)}
            {/* {wishList.map(cart => <WishList key={cart.id} cart={cart}></WishList>)} */}
        </div>
    );
};

export default Dashboard;