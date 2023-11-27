import Image from "next/image";
import SopopWallpaper from "@/assets/Sopop-Wallpaper.png";
import Link from "next/link";

export default function HomeShop() {
  return (
    <section className="font-monument">
      <div className="pt-[20px] pb-[68px] mx-auto px-[1rem] max-w-[100rem] background mb:px-[5rem]">
        <div className="border-solid border-[#444] border-[1px] rounded-[20px] flex flex-col overflow-hidden md:flex md:flex-row">
          <div className="relative w-full grow shrink-0 md:w-[calc(50%-28px)] md:max-w-full">
            <div>
              <Image
                src={SopopWallpaper}
                className="h-[250px] w-full object-cover md:h-[100%]"
              ></Image>
            </div>
          </div>
          <div className=" relative w-full max-w-full grow shrink-0 py-[2rem] px-[1rem] text-center bg-gradient-to-t from-[#1D1D1F] to-[#323236] md:px-[7rem] md:w-[calc(50%-28px)] md:py-[2rem]">
            <h2 className="text-2xl md:text-[56px] md:leading-tight">Taste the trilogy.</h2>
            <div className="mt-[2rem]">
              <p className="text-sm md:text-[1.25rem] md:leading-tight">
                Discover Strawberry Kiwi, Passion Punch and Lemon Zest in one
                flavorful variety pack!
              </p>
            </div>
            <Link href="/product" className="mt-[3rem] button button-primary text-sm md:text-xl flex">
              Shop Variety
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
