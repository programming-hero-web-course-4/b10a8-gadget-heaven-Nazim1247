import { useEffect, useState } from "react";
import { NavLink, useLoaderData, useLocation } from "react-router-dom";
import { getStoredList, removeCart } from "../Utilities";
import AddList from "../Components/AddList";
import WishList from "../Components/WishList";
import toast from "react-hot-toast";


const Dashboard = () => {
    const allProducts = useLoaderData();
    const [addList, setAddList] = useState([]);
    const [product, setProduct] = useState(addList);
    const [purchase, setPurchase] = useState(false);

    // const {pathname} = useLocation();
    // console.log(pathname);

    const handleRemove = (id)=>{
        removeCart(id);
        const storedAddList = getStoredList();
        setAddList(storedAddList);
    }

    const handlePurchase = ()=>{
        setAddList([]);
        setPurchase(true);
    }

    const handleSort = (sortBy)=>{
        if(sortBy === 'price'){
            const sorted = addList.sort((a, b)=> b.price - a.price);
            setProduct(sorted);
            setAddList([]);
            toast.success('Sorted Successfully')
        }else{
            setProduct(addList)
        }
    }

    // const [wishList, setWishList] = useState([]);

    // useEffect(()=>{
    //     const wishAddList = getStoredList();
    //     const wishProductListInt = wishAddList.map(id => parseInt(id));
    //     const wishProductList = allProducts.filter(product => wishProductListInt.includes(product.id));
    //     setWishList(wishProductList);
    // },[])

    useEffect(() => {
        const storedAddList = getStoredList();
        const storedAddListInt = storedAddList.map(id => parseInt(id));

        const addProductList = allProducts.filter(product => storedAddListInt.includes(product.id));
        setAddList(addProductList);
        // if(addProductList){
        //     setPurchase(true);
        // }
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

            <div className="flex justify-between items-center py-8">
                <h3 className="text-xl font-bold">Cart</h3>
                <div className="flex justify-center items-center gap-4">
                    <h3>Total cost:</h3>
                    <NavLink onClick={()=> handleSort('price')} className={({ isActive }) => `${isActive ? 'active btn btn-sm bg-[#9538E2]' : ''}`}>Sort by Price</NavLink>
                    <NavLink disabled={purchase} onClick={handlePurchase} className={({ isActive }) => `${isActive ? 'btn btn-sm bg-[#9538E2]' : ''}`}>Purchase</NavLink>
                </div>
            </div>
            addList: {addList.length}
            {addList.map(cart => <AddList handleRemove={handleRemove} key={cart.id} cart={cart}></AddList>)}
            {product.map(cart => <AddList key={cart.id} cart={cart}></AddList>)}
            {/* {wishList.map(cart => <WishList key={cart.id} cart={cart}></WishList>)} */}
        </div>
    );
};

export default Dashboard;