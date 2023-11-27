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
        <div className="flex flex-col p-0 gap-0 m-0 md:flex-row">
          <div className="mb-[4rem] md:mb-0w-full justify-center md:max-w-[45%] md:w-[45%]">
            <div>
              <Image
                src={products[0].images}
                className="h-[200px] md:h-[500px] w-full object-contain"
              ></Image>
            </div>
          </div>
          <div className="md:max-w-[55%] md:w-[55%] md:pl-[5rem]">
            <div className="max-w-[60rem] px-[1rem]">
              <div>
                <Image src={ratingSVG} alt="Star Rating SVG"></Image>
              </div>
              <div className="my-[1.5rem] w-[50%]">
                <h1 className="text-[32px] font-monument md:text-[56px]">
                  {products[0].title}
                </h1>
              </div>
              <div className="my-[1.5rem]">
                Experience new flavors - 5x better than competing brands. Each
                can contains 20mg of natural caffeine from natural ingredients
                providing natural flavors.
              </div>
              <div className="flex w-full justify-between md:pr-[10%] text-left flex-col my-[1.5rem] md:flex-row md:items-center">
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
              <div className="md:flex justify-between my-[1.5rem]">
                <div className="flex md:basis-[45%] p-0 mb-[1.2rem] max-w-[44rem]">
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
                className="button-primary flex mx-auto md:inline-flex"
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
