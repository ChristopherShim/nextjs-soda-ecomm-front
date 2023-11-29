import Image from "next/image";
import SopopGroupIMG from "@/assets/SopopGroup.png";
import SopopIcon from "@/assets/Sopop-Icon.svg";

export default function HomeBenefits() {
  return (
    <section>
      <div className="flex">
        <div className="hidden md:block md:mx-auto md:bg-[#F2F1EA] md:h-[2750px] md:w-[50%]">
          <div id="sticky">
            <div
              className=" m-auto items-center z-3 text-center flex w-[50vw] h-[900px]"
              style={{ position: "relative", inset: "0px auto auto 0px" }}
            >
              <Image
                src={SopopIcon}
                alt="Sopop Icon"
                priority={"true"}
                className="absolute h-[700px] w-[500px] z-1 left-[calc(50%-250px)] top-[calc(50%-500px)]"
              ></Image>
              <Image
                src={SopopGroupIMG}
                alt="Sopop Cans"
                className="z-10 w-[550px] m-auto"
              ></Image>
            </div>
          </div>
        </div>
        
        <div className="w-[100%] md:w-[50%] bg-[#F2F1EA] px-[1rem]">
          <div className="my-[64px] md:h-[900px] md:flex md:items-center md:my-[0px]">
            <div className="flex flex-col items-center text-center">
              <div className="bg-[#E1C7BD] border-none w-[60px] h-[60px] flex p-0 items-center justify-center rounded-[20px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="25px"
                  viewBox="0 0 576 512"
                >
                  <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                </svg>
              </div>
              <p className="text-black leading-[3rem] text-4xl my-[2rem] md:text-5xl md:leading-tight md:my-[3rem]">
                3 Popping Flavors
              </p>
              <p className="text-black text-base md:text-lg md:px-[10rem]">
                Natural Flavors made with Natural Ingredients, no extra
                additives.
              </p>
            </div>
          </div>

          <div className="my-[64px] md:h-[900px] md:flex md:items-center md:my-[0px]">
            <div className="flex flex-col items-center text-center">
              <div className="bg-[#C6A1DC] border-none w-[60px] h-[60px] flex p-0 items-center justify-center rounded-[20px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="25px"
                  viewBox="0 0 512 512"
                >
                  <path d="M272 96c-78.6 0-145.1 51.5-167.7 122.5c33.6-17 71.5-26.5 111.7-26.5h88c8.8 0 16 7.2 16 16s-7.2 16-16 16H288 216s0 0 0 0c-16.6 0-32.7 1.9-48.2 5.4c-25.9 5.9-50 16.4-71.4 30.7c0 0 0 0 0 0C38.3 298.8 0 364.9 0 440v16c0 13.3 10.7 24 24 24s24-10.7 24-24V440c0-48.7 20.7-92.5 53.8-123.2C121.6 392.3 190.3 448 272 448l1 0c132.1-.7 239-130.9 239-291.4c0-42.6-7.5-83.1-21.1-119.6c-2.6-6.9-12.7-6.6-16.2-.1C455.9 72.1 418.7 96 376 96L272 96z" />
                </svg>
              </div>
              <p className="text-black leading-[3rem] text-4xl my-[2rem] md:text-5xl md:leading-tight md:my-[3rem]">
                Zero Sugar Soda
              </p>
              <p className="text-black text-base md:text-lg md:px-[10rem]">
                No added sugars, the caffeine included in the Soda is All
                Natural.
              </p>
            </div>
          </div>

          <div className="h-full my-[64px] md:h-[900px] md:flex md:items-center md:my-[0px]">
            <div className="flex flex-col items-center text-center">
              <div className="bg-[#DEE885] border-none w-[60px] h-[60px] flex p-0 items-center justify-center rounded-[20px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="25px"
                  viewBox="0 0 512 512"
                >
                  <path d="M368.4 18.3L312.7 74.1 437.9 199.3l55.7-55.7c21.9-21.9 21.9-57.3 0-79.2L447.6 18.3c-21.9-21.9-57.3-21.9-79.2 0zM288 94.6l-9.2 2.8L134.7 140.6c-19.9 6-35.7 21.2-42.3 41L3.8 445.8c-3.8 11.3-1 23.9 7.3 32.4L164.7 324.7c-3-6.3-4.7-13.3-4.7-20.7c0-26.5 21.5-48 48-48s48 21.5 48 48s-21.5 48-48 48c-7.4 0-14.4-1.7-20.7-4.7L33.7 500.9c8.6 8.3 21.1 11.2 32.4 7.3l264.3-88.6c19.7-6.6 35-22.4 41-42.3l43.2-144.1 2.8-9.2L288 94.6z" />
                </svg>
              </div>
              <p className="text-black leading-[3rem] text-4xl my-[2rem] md:text-5xl md:leading-tight md:my-[3rem]">
                Brand Story
              </p>
              <p className="text-black text-base md:text-lg  md:px-[10rem]">
                A small company that is dedicated to producing amazing Soda for
                the people.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="flex overflow-hidden items-start bg-[#F2F1EA]">
        <div className="hidden md:block md:m-0 md:flex md:min-w-[654.5px] md:w-auto md:h-auto md:pt-0 md:pb-[1860px]">
          <div
            className=" m-auto items-center z-3 text-center flex w-[50vw] h-[900px]"
            style={{ position: "relative", inset: "0px auto auto 0px" }}
          >
            <Image
              src={SopopIcon}
              alt="Sopop Icon"
              priority={"true"}
              className="absolute h-[700px] w-[500px] z-1 left-[calc(50%-250px)] top-[calc(50%-500px)]"
            ></Image>
            <Image
              src={SopopGroupIMG}
              alt="Sopop Cans"
              className="z-10 w-[550px] m-auto"
            ></Image>
          </div>
        </div>

        <div
          id="right-container"
          className="px-[1rem] md:pr-[22vw] md:w-[50vw] md:text-left md:h-[900px] font-monument"
        >
          <div className="h-full my-[64px] md:h-[900px] md:flex md:items-center md:my-[0px]">
            <div className="flex flex-col items-center text-center">
              <div className="bg-[#E1C7BD] border-none w-[60px] h-[60px] flex p-0 items-center justify-center rounded-[20px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="25px"
                  viewBox="0 0 576 512"
                >
                  <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                </svg>
              </div>
              <p className="text-black leading-[3rem] text-4xl my-[2rem] md:text-5xl md:leading-tight md:my-[3rem]">
                3 Popping Flavors
              </p>
              <p className="text-black text-base md:text-lg">
                Natural Flavors made with Natural Ingredients, no extra
                additives.
              </p>
            </div>
          </div>

          <div className="h-full my-[64px] md:h-[900px] md:flex md:items-center md:my-[0px]">
            <div className="flex flex-col items-center text-center">
              <div className="bg-[#C6A1DC] border-none w-[60px] h-[60px] flex p-0 items-center justify-center rounded-[20px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="25px"
                  viewBox="0 0 512 512"
                >
                  <path d="M272 96c-78.6 0-145.1 51.5-167.7 122.5c33.6-17 71.5-26.5 111.7-26.5h88c8.8 0 16 7.2 16 16s-7.2 16-16 16H288 216s0 0 0 0c-16.6 0-32.7 1.9-48.2 5.4c-25.9 5.9-50 16.4-71.4 30.7c0 0 0 0 0 0C38.3 298.8 0 364.9 0 440v16c0 13.3 10.7 24 24 24s24-10.7 24-24V440c0-48.7 20.7-92.5 53.8-123.2C121.6 392.3 190.3 448 272 448l1 0c132.1-.7 239-130.9 239-291.4c0-42.6-7.5-83.1-21.1-119.6c-2.6-6.9-12.7-6.6-16.2-.1C455.9 72.1 418.7 96 376 96L272 96z" />
                </svg>
              </div>
              <p className="text-black leading-[3rem] text-4xl my-[2rem] md:text-5xl md:leading-tight md:my-[3rem]">
                Zero Sugar Soda
              </p>
              <p className="text-black text-base md:text-lg">
                No added sugars, the caffeine included in the Soda is All
                Natural.
              </p>
            </div>
          </div>

          <div className="h-full my-[64px] md:h-[900px] md:flex md:items-center md:my-[0px]">
            <div className="flex flex-col items-center text-center">
              <div className="bg-[#DEE885] border-none w-[60px] h-[60px] flex p-0 items-center justify-center rounded-[20px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="25px"
                  viewBox="0 0 512 512"
                >
                  <path d="M368.4 18.3L312.7 74.1 437.9 199.3l55.7-55.7c21.9-21.9 21.9-57.3 0-79.2L447.6 18.3c-21.9-21.9-57.3-21.9-79.2 0zM288 94.6l-9.2 2.8L134.7 140.6c-19.9 6-35.7 21.2-42.3 41L3.8 445.8c-3.8 11.3-1 23.9 7.3 32.4L164.7 324.7c-3-6.3-4.7-13.3-4.7-20.7c0-26.5 21.5-48 48-48s48 21.5 48 48s-21.5 48-48 48c-7.4 0-14.4-1.7-20.7-4.7L33.7 500.9c8.6 8.3 21.1 11.2 32.4 7.3l264.3-88.6c19.7-6.6 35-22.4 41-42.3l43.2-144.1 2.8-9.2L288 94.6z" />
                </svg>
              </div>
              <p className="text-black leading-[3rem] text-4xl my-[2rem] md:text-5xl md:leading-tight md:my-[3rem]">
                Brand Story
              </p>
              <p className="text-black text-base md:text-lg">
                A small company that is dedicated to producing amazing Soda for
                the people.
              </p>
            </div>
          </div>
        </div>
      </div> */}
    </section>
  );
}
