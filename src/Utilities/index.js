const getStoredList = ()=>{
    const storedListStr = localStorage.getItem('add-list');
    if(storedListStr){
        const storedList = JSON.parse(storedListStr);
        return storedList;
    }else{
        return [];
    }
}

const addToStoredList = (id)=>{
    const storedList = getStoredList();
    if(storedList.includes(id)){
        alert('already added');
    }else{
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem('add-list', storedListStr);
    }
}

const getStoredWishList = ()=>{
    const storedListStr = localStorage.getItem('wish-list');
    if(storedListStr){
        const storedList = JSON.parse(storedListStr);
        return storedList;
    }else{
        return [];
    }
}

const addToStoredWishList = (id)=>{
    const storedList = getStoredWishList();
    if(storedList.includes(id)){
        alert('already added');
    }else{
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem('wish-list', storedListStr);
    }
}

export {addToStoredList,addToStoredWishList,getStoredList}