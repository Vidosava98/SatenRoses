import React, { useEffect, useRef, useState } from "react";
import  { ShoppingCartIcon } from '@heroicons/react/24/outline'; 
import { CheckBadgeIcon } from "@heroicons/react/24/solid";
import { ArrowsPointingInIcon } from "@heroicons/react/16/solid";
import { ArrowsPointingOutIcon } from "@heroicons/react/24/outline";
type Props = { src: string; desc: string; price: string; color: string };
function Photo({ src, desc, price, color }: Props) {
  const [buy, setBuy] = useState(1);
  const [colorRose, setColorRose] = useState(color);
  const [showPopup, setShowPopup] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState<{ desc: string; price: string; quantity: number; color: string; src:string }[]>([]);
  const [ordersNumber, setOrderNumbers] = useState(0);
  const [orderFullPrice, setOrderFullPrice] = useState(0);
  const [showOrderPage, setShowOrderPage] = useState(false);
  const [freeShipping, setFreeShipping] = useState(false);
  const countRendered = useRef(1);
  useEffect(() => {
    countRendered.current = countRendered.current + 1;
    console.log("Rendered ", countRendered.current);
  });
  useEffect(() => {
    setColorRose(color);
  }, [color]);

   const addToCart = () => {
    const newItem = {
      desc,
      price,
      quantity: buy,
      color: colorRose,
      src:src,
    };
    setCartItems((prev) => [...prev, newItem]);
    setShowPopup(true);
    setOrderNumbers(ordersNumber + 1);
    const newValue = orderFullPrice + parseFloat(newItem.price) * newItem.quantity;
    setOrderFullPrice(newValue);
    if(!freeShipping){
     if(newValue >= 50){
      setFreeShipping(true);
     }
    }
    setTimeout(() => {
      setShowPopup(false);
    }, 3000);
  };
  function removefromList(item:{desc: string; price: string; quantity: number; color: string; src:string}){
    const updatedList = cartItems.filter(el => el !== item);
    setCartItems(updatedList);
    setOrderNumbers(ordersNumber - 1)
    const newValue =  Math.round((orderFullPrice - parseFloat(item.price) * item.quantity) * 100) / 100;
    setOrderFullPrice(newValue);
    if(freeShipping){
     if(newValue < 50){
      setFreeShipping(false);
     }
    }
  }
  const openOrderPage = () =>{
    console.log("Order page");
    setShowCart(false);
    setShowOrderPage(true);
  }
  return (
    <div className="flex flex-col items-center justify-centermin-h-[400px] lg:flex-row md:flex-row" id = "cart">
      {showPopup && (
        <div className="fixed bottom-6 right-1/2 translate-x-1/2 sm:right-6 sm:translate-x-0 z-50 bg-white border border-gray-300 shadow-xl rounded-xl p-4 w-[90vw] max-w-sm animate-fade-in">
          <p className="text-black mb-2"> <CheckBadgeIcon className="h-6 w-6"/>You add to cart!</p>
          <button
            onClick={() => {
              setShowCart(true);
              setShowPopup(false);
            }}
            className="bg-(--accent) hover rounded-3xl lg:p-4 md:p-4 p-2 cursor-pointer active:scale-90"
          >
            See cart
          </button>
        </div>
      )}
      {showCart && (
        <div className="fixed top-0 right-0 w-96 h-screen bg-white border-l shadow-xl z-50 p-6 mt-20 pb-24">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Your Cart</h2>
            <button onClick={() => setShowCart(false)} className="text-gray-500 hover:text-black text-xl">
              <ArrowsPointingInIcon className="w-6 h-6"/>
            </button>
          </div>
          {cartItems.length === 0 ? (
            <p className="text-gray-500">Cart is empty.</p>
          ) : (
            <ul className="space-y-8 overflow-y-auto max-h-3/4 pr-2">
              {cartItems.map((item, index) => (
                <li key={index} className="border-0 p-2 rounded shadow-xl">
                  <div className="flex flex-row">
                    <div className="flex flex-row w-95 justify-between">
                      <div className="flex flex-col text-left">
                        <div className="w-40"><strong>{item.desc}</strong></div>
                        <div>Price: {item.price}</div>
                        <div>Count: {item.quantity}</div>
                        <div>Color: <span style={{ backgroundColor: item.color }} className="inline-block w-4 h-4 rounded-full ml-1 border"></span></div>
                      </div>
                      <div className="mr-4">
                        <img src={item.src} className="w-30 h-30"/>
                      </div>
                    </div>
                    <button onClick={() => removefromList(item)} className="text-gray-500 hover:text-black text-xl top-0 right-0 w-5 self-start">✖</button>
                  </div>
                </li>
              ))}
            </ul>
          )}
          {ordersNumber > 0 &&
          (<div className="fixed bottom-0">
            <div className="flex flex-row items-center mt-4 space-x-28 mb-2">
              <div className="flex flex-col">
                <span>Total <span className="font-bold text-3xl">${orderFullPrice}</span>.</span>
                {!freeShipping &&(<span className="text-red-800">Plus shipping $4.</span>)}
                {freeShipping &&(<span className="text-red-800">Free shipping!</span>)}
              </div>
              <button className="flex bg-(--accent) hover rounded-3xl lg:p-4 md:p-4 p-2 cursor-pointer active:scale-90 " onClick={() => openOrderPage()}>
                Order now
              </button>
            </div>
             <p className="text-left mb-2">** Check your cart before order.</p>
          </div>
          )}
        </div>
      )}
      {showOrderPage && (
        <div className="fixed w-96 h-full top-0 right-0 justify-center z-50 bg-white shadow-xl overflow-y-auto mt-20 p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Finish your order</h2>
            <button onClick={() => setShowOrderPage(false)} className="text-gray-500 hover:text-black text-xl">
              <ArrowsPointingInIcon className="w-6 h-6"/>
            </button>
          </div>
          <div className="text-left">
            <div className="flex flex-row"> 
              <input type="text" placeholder="First name" className="p-2 m-2 shadow-2xs w-36" required/>
              <input type="text" placeholder="Last name" className="p-2 m-2 shadow-2xs w-36"/>
            </div>           
            <div className="flex flex-row">
              <input type="email" placeholder="Email" className="p-2 m-2 shadow-2xs w-36"/>
              <input type="tel" placeholder="Phone number" className="p-2 m-2 shadow-2xs w-36"/>
            </div>
            <div className="flex flex-row">
             <input type="text" placeholder="City" className="p-2 m-2 shadow-2xs w-24"/>
             <input type="text" placeholder="Street" className="p-2 m-2 shadow-2xs w-32"/>
             <input type="text" placeholder="Number" className="p-2 m-2 shadow-2xs w-20"/>
            </div>
           <textarea
            placeholder="Some extra information about your order."
            className="w-80 h-32 p-3 mt-2 placeholder:text-sm placeholder:text-gray-400 border border-gray-300 rounded shadow-2xs resize-none"
           />
          </div>
          <button className="fixed flex bg-(--accent) hover rounded-3xl lg:p-4 md:p-4 p-2 cursor-pointer active:scale-90 bottom-2" onClick={() => openOrderPage()}>
            Confirm
          </button>
        </div>
      )}
      <div className="flex flex-col text-left lg:pr-16 md:pr-16 pr-1 lg:mt-20">
        <p className="text-2xl md:text-4xl lg:text-4xl min-w-64 max-w-64 min-h-16 max-h-16 lg:min-h-28 lg:max-h-28">
          {desc}
        </p>
        <p className="text-2xl md:text-4xl lg:text-4xl pb-8">${price}</p>
        <p className="flex mb-8 items-center justify-center">
          <input
            type="color"
            value={colorRose}
            onChange={(e) => setColorRose(e.target.value)}
            className="h-10 w-10 border-0 mr-8"
          />
          <input
            type="number"
            className="border-none w-16 text-center shadow-[0_4px_2px_-2px_rgba(0,0,0,0.2)]"
            placeholder="More"
            value={buy}
            onChange={(e) => setBuy(Number(e.target.value))}
          />
        </p>
        <div className="flex flex-row">
          <button className="flex flex-col justify-center items-center bg-(--accent) hover rounded-3xl mr-8 lg:p-4 md:p-4 p-2 cursor-pointer active:scale-90" onClick={addToCart}>
            <span>Add to cart</span>
            <ShoppingCartIcon className="h-6 w-6" />
          </button>
          <div className="relative">
            <button
              className="flex flex-col justify-center items-center bg-[var(--accent)] rounded-3xl mr-8 lg:p-4 md:p-4 p-2 cursor-pointer active:scale-90 hover:brightness-110 transition relative"
              onClick={() => setShowCart(true)}>
              <span>Open cart</span>
              <ArrowsPointingOutIcon className="h-6 w-6" />
              {ordersNumber > 0 && (
                <span className="absolute top-0 right-0 bg-red-600 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center shadow-md">
                  {ordersNumber}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
      <img
        src={src}
        alt="Not found"
        className="py-8 px-4 md:p-0 lg:p-0 w-[400px] h-[400px] object-fill rounded-xl"
      />
    </div>
  );
}

export default Photo;
