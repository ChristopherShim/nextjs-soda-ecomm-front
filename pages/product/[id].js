import Image from "next/image";
import Script from "next/script";
import { CartContext } from "@/components/CartContext";
import ratingSVG from "@/assets/rating.svg";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import { useContext, useState, useEffect, useLayoutEffect } from "react";
import { useRouter } from "next/router";

export default function ProductPage({ product }) {
  const router = useRouter();
  const [optionValue, setOptionValue] = useState(product.title);
  const { addProduct } = useContext(CartContext);

  function addItemToCart(productId) {
    addProduct(productId);
  }

  console.log(product.title);
  console.log(optionValue)

  useEffect(() => {
    if (optionValue === "Strawberry Kiwi") {
      router.replace("/product/6541ea9d53222b62576a57af");
    }
    if (optionValue === "Passion Punch") {
      router.replace("/product/6541ebb69d3ea6230a181415");
    }
    if (optionValue === "Lemon Zest") {
      router.replace("/product/6541ebc39d3ea6230a18141b");
    }
  }, [optionValue]);

  return (
    <section>
      <div className="max-w-[80rem] mx-auto p-[0.5rem] py-[60px]">
        <div className="flex flex-col p-0 gap-0 m-0 md:flex-row">
          <div className="mb-[4rem] md:mb-0 w-full justify-center md:max-w-[45%] md:w-[45%]">
            <div>
              <img
                src={product.images}
                alt={product.title}
                className="h-[200px] md:h-[500px] w-full object-contain"
              ></img>
            </div>
          </div>
          <div className="md:max-w-[55%] md:w-[55%] md:pl-[5rem]">
            <div className="max-w-[60rem] px-[1rem]">
              <div>
                <Image src={ratingSVG}></Image>
              </div>
              <div className="my-[1.5rem]">
                <h1 className="text-[32px] font-monument md:text-[56px]">{product.title}</h1>
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
                      className=" w-full h-[2.5rem] border-solid border-[1px] border-[#444]] rounded-[60px] px-[1rem] bg-[#29292a]"
                      // value={optionValue}
                      defaultValue={optionValue}
                      onChange={(e) => setOptionValue(e.target.value)}
                    >
                      <option value="Strawberry Kiwi">Strawberry Kiwi</option>
                      <option value="Passion Punch">Passion Punch</option>
                      <option value="Lemon Zest">Lemon Zest</option>
                    </select>
                  </div>
                </div>
              </div>
              <button
                onClick={() => addItemToCart(product._id)}
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

export async function getServerSideProps(context) {
  await mongooseConnect();
  const { id } = context.query;
  const product = await Product.findById(id);
  return {
    props: {
      product: JSON.parse(JSON.stringify(product)),
    },
  };
}
