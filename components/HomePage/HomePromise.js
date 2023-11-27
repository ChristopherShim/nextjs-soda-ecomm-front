import Image from "next/image";
import SopopGraphic from "@/assets/Sopop-Graphic.png";

export default function HomePromise() {
  return (
    <section className="font-monument">
      <div className="px-[5rem] py-[28px] max-w-[100rem] mx-auto">
        <div className="border-solid border-[1px] border-[#444] rounded-[20px] flex flex-col list-none p-0 overflow-hidden md:flex-row">
          <div className="w-full md:w-[33.33%]">
            <div className=" h-full md:min-h-[200px]">
              <Image
                src={SopopGraphic}
                alt="Sopop Graphic"
                className="h-full object-contain w-full"
              ></Image>
            </div>
          </div>
          <div className="w-full md:w-[66.67%] bg-gradient-to-t from-[#1D1D1F] to-[#323236] ">
            <div className="pt-[2rem] px-[1rem] md:px-[7rem] pb-[2rem]">
              <h2 className="text-[1rem] md:text-[2rem]">
                A new refreshing Soda Pop like no other.
              </h2>
              <div className="mt-[2rem]">
                <p className="text-[1rem] md:text-[1rem]">
                  We use only the most natural ingredients and flavorings to
                  provide the best tasting Soda Pop for you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
