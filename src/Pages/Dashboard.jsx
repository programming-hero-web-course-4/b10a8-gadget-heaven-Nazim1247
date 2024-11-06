import { useEffect, useState } from "react";
import { NavLink, useLoaderData, useNavigate } from "react-router-dom";
import { getStoredList, getStoredWishList, removeCart, removeWish } from "../Utilities";
import AddList from "../Components/AddList";
import WishList from "../Components/WishList";
import toast from "react-hot-toast";
import group from '../assets/Group.png';

const Dashboard = () => {
    const allProducts = useLoaderData();
    const [modal, setModal] = useState(false);
    const [addList, setAddList] = useState([]);
    const [wishList, setWishList] = useState([]);
    const [purchase, setPurchase] = useState(false);
    const [active, setActive] = useState({
        cart: true,
        status: 'addList'
    });

    const navigate = useNavigate();

    let sum = 0;
    for(let i = 0; i < addList.length; i++){
        sum += addList[i].price;
    }

    const handleRemove = (id) => {
        removeCart(id);
        const storedAddList = getStoredList();
        setAddList(storedAddList);
    }

    const handleRemoveWish = (id) => {
        removeWish(id);
        const wishAddList = getStoredWishList();
        setWishList(wishAddList);
    }

    const handlePurchase = () => {
        setPurchase(true);
    }

    const handleSort = () => {
        const sorted = [...addList].sort((a, b) => b.price - a.price);
        setAddList(sorted);
        toast.success('Sorted Successfully');
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
    }, [allProducts]);
  
    const openModal = () => {
        setModal(true);
    }
    const closeModal = () => {
        setModal(false);
        navigate('/');
        localStorage.clear(addList);
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
                                Total: {sum}</p>
                            <button className="btn btn-sm w-full rounded-full" onClick={closeModal}>close</button>
                        </div>
                    </div>
                )
            }

            <div className="text-center bg-[#9538E2] text-white py-8">
                <h3 className="text-2xl font-bold">Dashboard</h3>
                <p className="text-gray-300 md:w-8/12 mx-auto">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                <div className="space-x-4 mt-4">
                    <NavLink onClick={() => handleAddWish('addList')} className={`${active.cart ? 'btn btn-tiny' : 'btn btn-sm'}`}>Cart</NavLink>
                    <NavLink onClick={() => handleAddWish('wishList')} className={`${active.cart ? 'btn btn-sm' : 'btn btn-tiny'}`}>Wishlist</NavLink>
                </div>
            </div>

            <div>
            <div className="flex justify-between items-center py-8">
                <h3 className="text-xl font-bold">Cart</h3>
                <div className="flex justify-center items-center gap-4">
                    <h3>Total cost: {sum}</h3>
                    <button onClick={()=>handleSort()} className="bg-[#9538E2] btn btn-sm rounded-full">Sort by Price</button>
                    <button disabled={purchase} onClick={() => (handlePurchase(), openModal())} className="bg-[#9538E2] btn btn-sm rounded-full">Purchase</button>
                </div>
            </div>

            {
                active.cart ? addList.map(cart => <AddList handleRemove={handleRemove} key={cart.id} cart={cart}></AddList>) : wishList.map(cart => <WishList handleRemoveWish={handleRemoveWish} key={cart.id} cart={cart}></WishList>)
            }

            </div>
        </div>
    );
};

export default Dashboard;