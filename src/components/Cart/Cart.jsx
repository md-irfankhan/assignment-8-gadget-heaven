import { useEffect, useState } from "react";
import { getCart, saveCart } from '../../db/ldb'
import SwapVertIcon from '@mui/icons-material/SwapVert';
import CartCard from "../CartCard/CartCard";
import { useContext } from 'react';
import { CartContext } from '../../App';
import SImage from '../../assets/Group.png'
import { useLoaderData, useLocation, useNavigate } from "react-router";
import { toast } from "react-toastify";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "flowbite-react";
import HelmetExport from "react-helmet";
import { Helmet } from "react-helmet-async";

const Cart = () => {
    const [openModal, setOpenModal] = useState(false);
    const cartLs = getCart();
    const [cart, setCart] = useState([])
    const [total, setTotal] = useState(0)
    const { lcart, setLCart } = useContext(CartContext)
    const products = useLoaderData();
    const navigate =useNavigate()

    // useEffect(() => {
    //     fetch('/api.json')
    //         .then(res => res.json())
    //         .then(data => setProduct(data));
    // }, []);
    console.log(products);

    console.log(cart);

    useEffect(() => {

        const saveCart = []
        if (products.length !== 0) {
            for (let i of cartLs) {
                console.log(i);

                const filtered = products.find(el => i == el.product_id)
                console.log(filtered);

                saveCart.push(filtered)
            }

        }
        setCart(saveCart)



    }, [])
    console.log(cart);

    useEffect(() => {
        let totals = 0
        if (cart.length !== 0) {
            cart.map(el => {

                totals = totals + el.price
            })
            setTotal(totals)
        }

    }, [cart, lcart])

    const handleCartRemove = (id, price) => {
        let ccart = cartLs;
        ccart.splice(ccart.indexOf(id), 1)
        // setCart(ccart)
        saveCart(ccart);

        setLCart(ccart)
        toast.success('Product Removed')
        const savedCart = []
        if (products.length !== 0) {
            for (let i of ccart) {
                console.log(i);

                const filtered = products.find(el => i == el.product_id)
                console.log(filtered);

                savedCart.push(filtered)
            }

        }
        setCart(savedCart)
        setTotal(total - price)


        // let totals = 0
        // if (ccart.length !== 0) {
        //     cart.map(el => {

        //         totals = totals + el.price
        //     })
        //     setTotal(totals)
        // }


    }
    const handleModal=()=>{
        setOpenModal(true)
        saveCart([])
    }
    const handleModalClose =()=>{
        navigate('/');
        setOpenModal(false);
        
    }
    const location=useLocation()
    return (
        <>
        <Helmet  key={location.pathname}>
            <title>Cart</title>
        </Helmet>
        <div className="pt-7 bg-base-200 pb-7">
            <div className="flex pb-4 flex-col lg:flex-row items-center justify-between max-w-[1250px] mx-auto">
                <div>
                    <h1 className="text-[24px] font-bold">Cart</h1>
                </div>
                <div className="flex flex-col lg:flex-row items-center gap-2">
                    <h3 className="text-[24px] font-bold">Total Cost:{total}$</h3>
                    <button className="flex items-center border border-[#9538E2] rounded-full py-1 px-3 text-[#9538E2] font-medium">Sort By Price
                        <SwapVertIcon></SwapVertIcon>
                    </button>
                    <button onClick={()=>handleModal()}  style={{
                        boxShadow: 'inset 0px 4px 50px 0px rgba(11, 11, 11, 0.15)'
                    }} className="bg-[#9538E2] py-1 px-3 rounded-full text-white font-medium">Purchase</button>
                </div>


            </div>
            <div className="flex flex-col gap-2">
                {
                   cart.length!==0? cart.map((productt, idx) => <CartCard key={idx} handleCartRemove={handleCartRemove} product={productt}></CartCard>):<h1 className="text-2xl">No data here</h1>
                }
            </div>

            <Modal  show={openModal} onClose={() => setOpenModal(false)} className="rounded-3xl" >
                <ModalBody className="rounded-2xl">
                  <div className="flex flex-col justify-center items-center p-10 rounded-2xl">
                      <div>
                        <img src={SImage} alt="" srcset="" />
                      </div>
                      <div className="flex flex-col items-center justify-center">
                        <h1 className="font-bold text-[24px]">Payment Successfully</h1>
                        <hr className="opacity-[0.3] my-2" />
                        <p className="opacity-[0.5]">Thanks for purchasing.</p>
                        <p className="opacity-[0.5]">Total: {total}</p>
                        <button onClick={()=>handleModalClose()} >Close</button>
                      </div>
                  </div>
                     
                </ModalBody>

            </Modal>
        </div>
        </>
    );
};

export default Cart;