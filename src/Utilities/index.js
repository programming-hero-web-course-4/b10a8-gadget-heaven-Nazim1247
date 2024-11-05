import toast from "react-hot-toast";

const getStoredList = () => {
    const storedListStr = localStorage.getItem('add-list');
    if (storedListStr) {
        const storedList = JSON.parse(storedListStr);
        return storedList;
    } else {
        return [];
    }
}

const addToStoredList = (id) => {
    const storedList = getStoredList();
    if (storedList.includes(id)) {
        toast.error('already added');
    } else {
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem('add-list', storedListStr);
        toast.success('successfully added');
    }
}

const getStoredWishList = () => {
    const storedListStr = localStorage.getItem('wish-list');
    if (storedListStr) {
        const storedList = JSON.parse(storedListStr);
        return storedList;
    } else {
        return [];
    }
}

const addToStoredWishList = (id) => {
    const storedList = getStoredWishList();
    if (storedList.includes(id)) {
        toast.error('already added');
    } else {
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem('wish-list', storedListStr);
        toast.success('successfully added');
    }
}

const removeCart = (id) => {
    const removed = getStoredList();
    const remaining = removed.filter(cart => cart != parseInt(id));
    localStorage.setItem('add-list', JSON.stringify(remaining));
    localStorage.setItem('wish-list', JSON.stringify(remaining));
    toast.success('Successfully Removed')
}

export { addToStoredList, addToStoredWishList, getStoredList, removeCart, getStoredWishList }