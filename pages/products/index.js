import Image from "next/image";
import ratingSVG from "@/assets/rating.svg";
import Script from "next/script";
import React from "react";

export default function Shop() {
  return (
    <section>
      <div className="max-w-[80rem] mx-auto p-[0.5rem] py-[60px]">
        <div className="flex flex-wrap p-0 gap-0 m-0">
          <div className="max-w-[45%] w-[45%]">
            <div>
              <img
                src="https://vaelabs.com/cdn/shop/files/Mint-box-and-bottle-smaller-square_778d4770-269a-4107-8148-15c6f461a717.webp?v=1697498832&width=1100"
                className="h-[500px] w-full object-cover"
              ></img>
            </div>
          </div>
          <div className="max-w-[55%] w-[55%] pl-[5rem]">
            <div className="max-w-[60rem]">
              <div>
                <Image src={ratingSVG}></Image>
              </div>
              <div className="my-[1.5rem]">
                <h1 className="text-[56px]">Sopop Soda</h1>
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
                    <select className=" w-full h-[2.5rem] border-solid border-[1px] border-[#444]] rounded-[60px] px-[1rem] bg-[#29292a]">
                      <option>Strawberry Kiwi</option>
                      <option>Passion Punch</option>
                      <option>Lemon Zest</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
