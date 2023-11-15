import Image from "next/image";
import SopopWallpaper from "@/assets/Sopop-Wallpaper.png"

export default function HomeShop(){
    return (
        <section>
          <div className="pt-[20px] pb-[68px] mx-auto pr-[5rem] pl-[5rem] max-w-[100rem] background">
            <div className="border-solid border-[#444] border-[1px]  rounded-[20px] flex flex-wrap overflow-hidden">
              <div className="relative w-[calc(50%-28px)] max-w-full grow shrink-0">
                <div>
                  <Image src={SopopWallpaper} className="h-[500px] w-full object-cover"></Image>
                </div>
              </div>
              <div className=" relative w-[calc(50%-28px)] max-w-full grow shrink-0 pt-[6rem] pr-[7rem] pl-[7rem] pb-[7rem] bg-gradient-to-t from-[#1D1D1F] to-[#323236]">
                <h2 className="text-[56px]">Taste the trilogy.</h2>
                <div className="mt-[2rem]">
                  <p className="text-[1.25rem]">
                    Discover Strawberry Kiwi, Passion Punch and Lemon Zest in one flavorful variety pack!
                  </p>
                </div>
                <a href="/" className="mt-[3rem] button button-primary">
                  Shop Variety
                </a>
              </div>
            </div>
          </div>
        </section>
      );
}