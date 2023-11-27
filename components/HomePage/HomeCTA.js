import Link from "next/link";

export default function HomeCTA(){
    return (
        <section className="py-[100px] bg-[#f2f1ea] font-monument">
          <div className="max-w-[900px] px-[1rem] mx-auto md:px-[5rem]">
            <div className="py-[48px] rounded-[20px] border-solid bg-[#C6A1DC] md:py-[64px]">
              <div className="m-auto w-full flex flex-col justify-center">
                <div className="text-center">
                  <h2 className="text-[1rem] text-black px-[2rem] md:text-[2.5rem]">
                    The Best Soda Pop has just landed.
                  </h2>
                  <div className="mt-[2rem]">
                    <Link href="/" className="button-black text-[1rem]">Shop Now</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      );
}