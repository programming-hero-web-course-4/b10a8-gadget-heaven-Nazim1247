import {  useEffect, useState } from "react";
import { NavLink, useLoaderData } from "react-router-dom";
import { getStoredList, getStoredWishList, removeCart } from "../Utilities";
import AddList from "../Components/AddList";
import WishList from "../Components/WishList";
import toast from "react-hot-toast";
import group from '../assets/Group.png';


const Dashboard = () => {
    const allProducts = useLoaderData();
    const [addList, setAddList] = useState([]);
    const [wishList, setWishList] = useState([]);
    const [product, setProduct] = useState(addList);
    const [purchase, setPurchase] = useState(false);
    const [active, setActive] = useState({
        cart: true,
        status: 'addList'
    })


    const handleRemove = (id) => {
        removeCart(id);
        const storedAddList = getStoredList();
        setAddList(storedAddList);
    }

    const handleRemoveWish = (id) => {
        removeCart(id);
        const wishAddList = getStoredWishList();
        setWishList(wishAddList);
    }

    const handlePurchase = () => {
        setAddList([]);
        setPurchase(true);
    }

    const handleSort = (sortBy) => {
        if (sortBy === 'price') {
            const sorted = [...addList].sort((a, b) => b.price - a.price);
            setProduct(sorted);
            // setAddList([]);
            toast.success('Sorted Successfully')
        } else {
            setProduct(addList)

        }
    }

    const handleAddWish = (status) => {
        if (status == 'addList') {
            setActive({
                cart: true,
                status: 'addList'
            })
        } else {
            setActive({
                cart: false,
                status: 'wishList'
            })
        }
    }

    useEffect(() => {
        const wishAddList = getStoredWishList();
        const wishProductListInt = wishAddList.map(id => parseInt(id));
        const wishProductList = allProducts.filter(product => wishProductListInt.includes(product.id));
        setWishList(wishProductList);
    }, [allProducts])

    useEffect(() => {
        const storedAddList = getStoredList();
        const storedAddListInt = storedAddList.map(id => parseInt(id));

        const addProductList = allProducts.filter(product => storedAddListInt.includes(product.id));
        setAddList(addProductList);

        // if(addProductList){
        //     setPurchase(true);
        // }
    }, [allProducts])

    const [modal, setModal] = useState(false);
    const openModal = () => {
        setModal(true);
    }
    const closeModal = () => {
        setModal(false);
    }
    const style = {
        modalOverlay: {
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
        modalContent: {
            backgroundColor: 'white',
            padding: '20px',
            borderRadius: '8px',
            width: '300px',
            textAlign: 'center',
        },
    }
    return (
        <div>
            {
                modal && (
                    <div style={style.modalOverlay} onClick={closeModal}>
                        <div style={style.modalContent} onClick={(e) => e.stopPropagation()}>
                            <img className="mx-auto mb-3" src={group} alt="" />
                            <h3 className="text-xl font-bold mb-2">Payment Successfully</h3>
                            <hr className="mb-2" />
                            <p className="text-gray-500 mb-2">Thanks for purchasing.
                                Total:2449.96</p>
                            <button className="btn btn-sm w-full rounded-full" onClick={closeModal}>close</button>
                        </div>
                    </div>
                )
            }

            <div className="text-center bg-[#9538E2] text-white py-8">
                <h3 className="text-2xl font-bold">Dashboard</h3>
                <p className="text-gray-300 md:w-8/12 mx-auto">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                <div className="space-x-4 mt-4">
                    <NavLink onClick={() => handleAddWish('addList')} className={`${active.cart ? 'btn btn-sm text-black bg-white' : 'btn btn-sm'}`}>AddList</NavLink>
                    <NavLink onClick={() => handleAddWish('wishList')} className={`${active.cart ? 'btn btn-sm' : 'btn btn-sm text-black bg-white'}`}>Wishlist</NavLink>
                </div>
            </div>

            <div className="flex justify-between items-center py-8">
                <h3 className="text-xl font-bold">Cart</h3>
                <div className="flex justify-center items-center gap-4">
                    <h3>Total cost: {addList.length}</h3>
                    <NavLink onClick={() => handleSort('price')} className={({ isActive }) => `${isActive ? 'btn btn-sm bg-[#9538E2]' : ''}`}>Sort by Price</NavLink>
                    <NavLink disabled={purchase} onClick={() => (handlePurchase(), openModal())} className={({ isActive }) => `${isActive ? 'btn btn-sm bg-[#9538E2]' : ''}`}>Purchase</NavLink>
                </div>
            </div>
            addList: {addList.length}


            {
                active.cart ? addList.map(cart => <AddList handleRemove={handleRemove} key={cart.id} cart={cart}></AddList>) : wishList.map(cart => <WishList handleRemoveWish={handleRemoveWish} key={cart.id} cart={cart}></WishList>)
            }

            {/* {
                active.cart ? addList.map(cart => <AddList handleRemove={handleRemove} key={cart.id} cart={cart}></AddList>) : wishList.map(cart => <WishList handleRemoveWish={handleRemoveWish} key={cart.id} cart={cart}></WishList>)
            } */}

            {product.map(cart => <AddList key={cart.id} cart={cart}></AddList>)}
        </div>
    );
};

export default Dashboard;