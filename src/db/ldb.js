const getCart=()=>{
    const data=localStorage.getItem('cart');
    if(data){
        return JSON.parse(data);
    }
    else{
        return [];
    }
}
const getWishList=()=>{
    const data=localStorage.getItem('wishlist');
    if(data){
        return JSON.parse(data);
    }
    else{
        return [];
    }
}

const saveCart=(data)=>{
    localStorage.setItem('cart',JSON.stringify(data))
}
const saveWishList=(data)=>{
    localStorage.setItem('wishlist',JSON.stringify(data))
}
const addToCart=(id)=>{
    const cart =getCart();
    cart.push(id);
    saveCart(cart)
}
const addToWishList=(id)=>{
    const wishlist =getWishList();
    if(!wishlist.includes(id)){
       wishlist.push(id);
    }
    
    saveWishList(wishlist)
}
export {getCart,addToCart,getWishList,addToWishList,saveCart,saveWishList}