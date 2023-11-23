import { CartContext } from "@/components/CartContext";
import { useContext, useEffect, useState } from "react";
import axios from "axios";

export default function CartPage() {
  const { cartProducts, addProduct, removeProduct, clearCart } =
    useContext(CartContext);
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [streetAddress2, setStreetAddress2] = useState("");
  const [country, setCountry] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (cartProducts?.length > 0) {
      axios.post("/api/cart", { ids: cartProducts }).then((response) => {
        setProducts(response.data);
      });
    } else {
      setProducts([]);
    }
  }, [cartProducts]);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }
    if (window?.location.href.includes("success")) {
      setIsSuccess(true);
      clearCart();
    }
  }, []);

  function increaseCartProduct(id) {
    addProduct(id);
  }

  function decreaseCartProduct(id) {
    removeProduct(id);
  }

  async function goToPayment() {
    const res = await axios.post("/api/checkout", {
      name,
      email,
      city,
      postalCode,
      streetAddress,
      country,
      cartProducts,
    });
    if (res.data.url) {
      window.location = res.data.url;
    }
  }

  let total = 0;
  for (const productId of cartProducts) {
    const price = products.find((p) => p._id === productId)?.price || 0;
    total += price;
  }
  if (isSuccess) {
    return (
      <>
        <div>Thanks for your order</div>
      </>
    );
  }

  return (
    <>
      <div className="max-w-[900px] m-auto">
        <div className="grid grid-cols-[1.3fr_minmax(300px,_.7fr)] gap-4 text-black">
          <div className="bg-white rounded-md p-[30px]">
            {!cartProducts?.length && <div>Your cart is empty</div>}
            {products?.length > 0 && (
              <table className="cartTable">
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product) => (
                    <tr>
                      <td>
                        <div className="productImageBox">
                          <img src={product.images}></img>
                        </div>
                        {product.title}
                      </td>
                      <td>
                        <button
                          onClick={() => decreaseCartProduct(product._id)}
                          className="cartDecrease"
                        >
                          -
                        </button>
                        {cartProducts.filter((id) => id === product._id).length}
                        <button
                          onClick={() => increaseCartProduct(product._id)}
                          className="cartIncrease"
                        >
                          +
                        </button>
                      </td>
                      <td>
                        $
                        {(
                          product.price *
                          cartProducts.filter((id) => id === product._id).length
                        ).toFixed(2)}
                      </td>
                    </tr>
                  ))}
                  <tr>
                    <td></td>
                    <td></td>
                    <td>${total.toFixed(2)}</td>
                  </tr>
                </tbody>
              </table>
            )}
          </div>

          {!!cartProducts.length && (
            <div className="bg-white rounded-md p-[30px] cartInfo">
              <h2>Order Information</h2>

              <input
                type="text"
                placeholder="Name"
                value={name}
                name="name"
                onChange={(e) => setName(e.target.value)}
              ></input>
              <input
                type="text"
                placeholder="Email"
                value={email}
                name="email"
                onChange={(e) => setEmail(e.target.value)}
              ></input>
              <div className="flex gap-1">
                <input
                  type="text"
                  placeholder="City"
                  value={city}
                  name="city"
                  onChange={(e) => setCity(e.target.value)}
                ></input>
                <input
                  type="number"
                  placeholder="Postal Code"
                  value={postalCode}
                  name="postalCode"
                  onChange={(e) => setPostalCode(e.target.value)}
                ></input>
              </div>

              <input
                type="text"
                placeholder="Street Address"
                value={streetAddress}
                name="streetAddress"
                onChange={(e) => setStreetAddress(e.target.value)}
              ></input>
              <input
                type="text"
                placeholder="Country"
                value={country}
                name="country"
                onChange={(e) => setCountry(e.target.value)}
              ></input>
              {/* <input
                type="hidden"
                name="products"
                value={cartProducts.join(",")}
              /> */}
              <button
                onClick={goToPayment}
                type="submit"
                className="px-2 py-1 bg-black rounded-md block w-full text-white"
              >
                Continue to Payment
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
