import { useContext, useEffect } from "react";
import { CartContext } from "../CartContext";
import { useRouter } from "next/router";
import Link from "next/link";

export default function HomeProduct({ product }) {
  const { addProduct } = useContext(CartContext);
  const router = useRouter()
 
  const url = '/product/';

  function addItemToCart(productId) {
    addProduct(productId);
  }
  return (
    <section>
      <div className="mx-auto py-24 px-14 max-w-[1200px] m">
        <div className="px-14">
          <ul className="grid grid-cols-3 gap-[28px]">
            {product.map((p) => (
              <li key={p._id} className="w-full">
                <div className="border-solid border-2 border-[#444444] rounded-3xl bg-gradient-to-t from-[#1D1D1F] to-[#323236]">
                  <div className="mx-[2rem]">
                    <div className="mt-[-75px] mb-[-40px] pb-[20%]">
                      <img
                        src={p.images}
                        alt={p.title}
                        className="block object-cover h-full w-[175px] m-auto"
                      ></img>
                    </div>
                  </div>
                  <div className="px-[px] py-4 mx-auto inset-x-0 text-center">
                    <Link
                      href={url+p._id}
                      className="shopLink text-lg text-center text-black"
                    >
                      {p.title}
                    </Link>
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
