import React, { useEffect, useState } from "react";

const CartPage = () => {
    const [cart, setCart] = useState<any[]>([]);

    useEffect(() => {
        const cartData = JSON.parse(localStorage.getItem("cart") || "[]");
        setCart(cartData);
    }, []);

    const updateQuantity = (id: number, size: string, quantity: number) => {
        const updatedCart = cart.map((item) => {
            if (item.id === id && item.size === size) {
                return { ...item, quantity };
            }
            return item;
        });
        setCart(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
    };

    const removeItem = (id: number, size: string) => {
        const updatedCart = cart.filter((item) => item.id !== id || item.size !== size);
        setCart(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
    };

    const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <div>
            <div className="bg-gray-100 h-40">
                <div className="flex items-center max-w-7xl m-auto">
                    <h2 className="text-4xl font-bold text-secondary mt-14">Cart</h2>
                </div>
            </div>

            <div className="flex items-center justify-between max-w-7xl m-auto">

                <div className="mt-20 flex flex-col gap-10">
                    <div>
                        <h2 className="text-xl font-bold text-secondary border-b-2">Your cart</h2>
                    </div>


                    {cart.length === 0 ? (
                        <p className="text-gray-500">Your cart is empty.</p>
                    ) : (
                        cart.map((item) => (
                            <div key={`${item.id}-${item.size}`} className="flex gap-56 items-center justify-between border-b pb-4">

                                <div className="flex align-center gap-10 pb-5">
                                    <img src={item.image} alt={item.title} className="w-20 h-20 object-contain rounded-md bg-gray-200"/>

                                    <div className="flex flex-col gap-2 py-2">
                                        <h2 className="text-secondary font-bold">{item.title}</h2>
                                        <span className="text-gray-500">
                                            Size: {item.size}
                                        </span>
                                    </div>
                                </div>


                                <div className="flex items-center gap-7">
                                    <span className="font-semibold text-secondary">${item.price}</span>
                                        <div className="flex items-center gap-5 px-2 py-1 border rounded-md">
                                            <button
                                                className="text-secondary font-semibold text-2xl"
                                                onClick={() =>
                                                    updateQuantity(
                                                        item.id,
                                                        item.size,
                                                        item.quantity - 1
                                                    )
                                                }
                                                disabled={item.quantity <= 1}
                                            >
                                                -
                                            </button>
                                            <span className="text-secondary font-semibold">{item.quantity}</span>
                                            <button
                                                className="text-secondary font-semibold text-xl"
                                                onClick={() =>
                                                    updateQuantity(
                                                        item.id,
                                                        item.size,
                                                        item.quantity + 1
                                                    )
                                                }
                                            >
                                                +
                                            </button>
                                        </div>
                                    <button
                                        className="text-red-500 font-medium"
                                        onClick={() => removeItem(item.id, item.size)}
                                    >
                                        <img src="/images/close.png" alt="" />
                                    </button>
                                </div>
                            </div>
                        ))
                    )}

                </div>


                <div className="py-3 px-5 border border-black">
                    {cart.length > 0 && (
                        <div className="flex-col justify-between items-center mt-10">
                            <h2 className="text-secondary font-bold text-2xl">
                                Total: ${totalPrice.toFixed(2)}
                            </h2>
                            <button className="secondary text-white font-semibold text-2xl py-3 px-6 rounded-md">Checkout</button>
                        </div>
                    )}
                </div>
                
            </div>

        </div>
    );
};

export default CartPage;