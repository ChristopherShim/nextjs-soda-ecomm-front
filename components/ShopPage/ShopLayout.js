import Image from "next/image";
import ratingSVG from "@/assets/rating.svg";
import Script from "next/script";
import { CartContext } from "../CartContext";
import { useContext, useState } from "react";
import { useRouter } from "next/router";

export default function ShopLayout({ products }) {
  const [selectedPID, setSelectedPID] = useState("");
  const router = useRouter();
  const { addProduct } = useContext(CartContext);

  function addItemToCart(productId) {
    addProduct(productId);
  }

  function setPIDHandler(pid) {
    setSelectedPID(pid);
  }

    if (selectedPID) {
    router.push("/product/" + selectedPID);
  }
  
  return (
    <section>
      <div className="max-w-[80rem] mx-auto p-[0.5rem] py-[60px]">
        <div className="flex flex-wrap p-0 gap-0 m-0">
          <div className="max-w-[45%] w-[45%]">
            <div>
              <img
                src={products[0].images}
                className="h-[500px] w-full object-contain"
              ></img>
            </div>
          </div>
          <div className="max-w-[55%] w-[55%] pl-[5rem]">
            <div className="max-w-[60rem]">
              <div>
                <Image src={ratingSVG}></Image>
              </div>
              <div className="my-[1.5rem]">
                <h1 className="text-[56px]">{products[0].title}</h1>
              </div>
              <div className="my-[1.5rem]">
                Experience new flavors - 5x better than competing brands. Each
                can contains 20mg of natural caffeine from natural ingredients
                providing natural flavors.
              </div>
              <div className="flex w-full justify-between pr-[10%] items-center flex-wrap my-[1.5rem]">
                <Script src="https://kit.fontawesome.com/4d06b44541.js" />

                <div>
                  <p className="uppercase">
                    <i
                      className="fa-solid fa-circle "
                      style={{ color: "#C6A1DC" }}
                    ></i>
                    natural flavor
                  </p>
                </div>
                <div>
                  <p className="uppercase">
                    <i
                      className="fa-solid fa-circle "
                      style={{ color: "#C6A1DC" }}
                    ></i>
                    natural ingredients
                  </p>
                </div>
                <div>
                  <p className="uppercase">
                    <i
                      className="fa-solid fa-circle "
                      style={{ color: "#C6A1DC" }}
                    ></i>
                    better taste
                  </p>
                </div>
              </div>
              <div className="flex justify-between my-[1.5rem]">
                <div className="flex basis-[45%] p-0 mb-[1.2rem] max-w-[44rem]">
                  <div className="max-w-full flex relative w-full">
                    <select
                      onChange={(e) => setPIDHandler(e.target.value)}
                      className=" w-full h-[2.5rem] border-solid border-[1px] border-[#444]] rounded-[60px] px-[1rem] bg-[#29292a]"
                    >
                      {products.map((p) => (
                        <option key={p._id} value={p._id}>
                          {p.title}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
              <button
                onClick={() => addItemToCart(products[0]._id)}
                className="button-primary"
              >
                {" "}
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
