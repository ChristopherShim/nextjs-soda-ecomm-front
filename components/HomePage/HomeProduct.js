import { useContext, useEffect } from "react";
import { CartContext } from "../CartContext";
import { useRouter } from "next/router";
import Link from "next/link";

export default function HomeProduct({ product }) {
  const { addProduct } = useContext(CartContext);

  const router = useRouter()

  function goToProductHandler(p){
    router.push("/product/" + p._id)
  }
 

  function addItemToCart(productId) {
    addProduct(productId);
  }
  return (
    <section>
      <div className="mx-auto py-24 px-14 max-w-[1200px] m">
        <div className="px-4 md:px-14">
          <ul className="grid grid-rows-3 gap-[200px] md:grid-rows-none md:grid-cols-3 md:gap-[28px]">
            {product.map((p) => (
              <li key={p._id} className="w-full">
                <div className="border-solid border-2 border-[#444444] rounded-3xl bg-gradient-to-t from-[#1D1D1F] to-[#323236]">
                  <div className="mx-[2rem]">
                    <div className="mt-[-120px] mb-[-20px] pb-[20%] md:mt-[-75px] md:mb-[-40px]">
                      <img
                        src={p.images}
                        alt={p.title}
                        className="block object-cover h-full w-[175px] m-auto"
                      ></img>
                    </div>
                  </div>
                  <div className="px-[px] py-4 mx-auto inset-x-0 text-center">
                    <button
                      // href={url+p._id}
                      onClick={()=>goToProductHandler(p)}
                      className="shopLink text-lg text-center text-black"
                    >
                      {p.title}
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
