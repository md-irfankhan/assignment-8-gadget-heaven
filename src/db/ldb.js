const getCart=()=>{
    const data=localStorage.getItem('cart');
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
const addToCart=(id)=>{
    const cart =getCart();
    cart.push(id);
    saveCart(cart)
}
export {getCart,addToCart}