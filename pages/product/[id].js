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
        <div className="flex flex-wrap p-0 gap-0 m-0">
          <div className="max-w-[45%] w-[45%]">
            <div>
              <img
                src={product.images}
                alt={product.title}
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
                <h1 className="text-[56px]">{product.title}</h1>
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
