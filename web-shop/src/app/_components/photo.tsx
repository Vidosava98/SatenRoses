import React, { useEffect, useState } from "react";
import  { ShoppingCartIcon } from '@heroicons/react/24/outline'; 
import { CheckBadgeIcon } from "@heroicons/react/24/solid";
import { ArrowsPointingInIcon } from "@heroicons/react/16/solid";
type Props = { src: string; desc: string; price: string; color: string };
function Photo({ src, desc, price, color }: Props) {
  const [buy, setBuy] = useState(1);
  const [colorRose, setColorRose] = useState(color);
  const [showPopup, setShowPopup] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState<{ desc: string; price: string; quantity: number; color: string; src:string }[]>([]);
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

    setTimeout(() => {
      setShowPopup(false);
    }, 3000);
  };
  function removefromList(item:{desc: string; price: string; quantity: number; color: string; src:string}){
    const updatedList = cartItems.filter(el => el !== item);
    setCartItems(updatedList);
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
        <div className="fixed top-0 right-0 w-96 h-full bg-white border-l shadow-xl z-50 p-6 overflow-y-auto">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Your Cart</h2>
            <button onClick={() => setShowCart(false)} className="text-gray-500 hover:text-black text-xl">
              <ArrowsPointingInIcon className="w-6 h-6"/>
            </button>
          </div>
          {cartItems.length === 0 ? (
            <p className="text-gray-500">Cart is empty.</p>
          ) : (
            <ul className="space-y-4">
              {cartItems.map((item, index) => (
                <li key={index} className="border-0 p-2 rounded shadow-xl">
                  <div className="flex flex-row">
                    <div className="flex flex-row items-center justify-center w-95">
                      <div className="flex flex-col pr-8">
                        <div><strong>{item.desc}</strong></div>
                        <div>Price: {item.price}</div>
                        <div>Count: {item.quantity}</div>
                        <div>Color: <span style={{ backgroundColor: item.color }} className="inline-block w-4 h-4 rounded-full ml-1 border"></span></div>
                      </div>
                      <div>
                        <img src={item.src} className="w-20 h-20"/>
                      </div>
                    </div>
                    <button onClick={() => removefromList(item)} className="text-gray-500 hover:text-black text-xl top-0 right-0 w-5 self-start">✖</button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
      <div className="flex flex-col text-left lg:pr-16 md:pr-16 pr-1 lg:mt-20">
        <p className="text-2xl md:text-4xl lg:text-4xl min-w-64 max-w-64 min-h-16 max-h-16 lg:min-h-28 lg:max-h-28">
          {desc}
        </p>
        <p className="text-2xl md:text-4xl lg:text-4xl pb-8">{price}</p>
        <p className="">
          <input
            type="color"
            value={colorRose}
            onChange={(e) => setColorRose(e.target.value)}
            className="h-10 w-10 rounded border-none mb-8"
          ></input>
        </p>
        <div className="flex flex-row">
          <button className="flex flex-col justify-center items-center bg-(--accent) hover rounded-3xl mr-8 lg:p-4 md:p-4 p-2 cursor-pointer active:scale-90" onClick={addToCart}>
            <span>Add to cart</span>
            <ShoppingCartIcon className="h-6 w-6" />
          </button>
          <input
            type="number"
            className="border-none w-16 text-center shadow-[0_4px_2px_-2px_rgba(0,0,0,0.2)]"
            placeholder="More"
            value={buy}
            onChange={(e) => setBuy(Number(e.target.value))}
          />
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
