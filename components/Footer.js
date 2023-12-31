import Link from "next/link";

export default function Footer() {
  return (
    <section>
      <footer className="pb-[60px]">
        <div className="flex flex-col justify-between max-w-[92rem] pb-[5rem] md:px-[15rem] mx-auto md:flex-row px-[1rem]">
          <div className="mt-[3rem]">
            <p className=" font-monument text-[1rem]">get on the list</p>
            <h2 className="text-[1.5rem] mt-[1rem] mb-[3rem] font-monument">
              Quench your thirst.
            </h2>
            <form className="flex-start m-0 max-w-[36rem] flex flex-col">
              <div className="max-w-full">
                <div className="relative w-full flex">
                  <input className="relative pr-[5rem] flex-grow text-left p-[1.5rem] bg-[#1D1D1F] border-solid border-white border-[2px] rounded-[60px] h-[4rem]" />
                  <label className="absolute left-[2rem] top-[1rem] text-[1.25rem]">
                    Email
                  </label>
                  <button
                    type="submit"
                    className="absolute bg-orange h-[3rem] w-[3rem] right-[.5rem] top-[.5rem] rounded-[60px] flex justify-center items-center"
                  >
                    <svg
                      viewBox="0 0 14 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-[1.5rem] h-[2.5rem]"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M8.537.808a.5.5 0 01.817-.162l4 4a.5.5 0 010 .708l-4 4a.5.5 0 11-.708-.708L11.793 5.5H1a.5.5 0 010-1h10.793L8.646 1.354a.5.5 0 01-.109-.546z"
                        fill="black"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="mt-[3rem] font-monument">
            <p className="my-[1rem] font-bold">Sopop</p>
            <div className="flex flex-wrap gap-[6rem]">
              <div>
                <ul>
                  <li className="mb-[0.5rem]">
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="/product">Shop</Link>
                  </li>
                </ul>
              </div>
              <div>
                <ul>
                  <li>
                    <Link href="/">Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t-[0.1rem]">
          <div className="flex flex-col-reverse justify-between gap-[20px] max-w-[92rem] px-[1rem] md:px-[15rem] mb-[1rem] mt-[2rem] mx-auto md:flex-row">
            <div>
              <p className="text-[.75rem]">
                Statements relating to caffeine content are based on one can of
                Sodapop Soda. Information on this site is provided for
                informational purposes only. It is not meant to substitute for
                medical advice from your physician. You should not use the
                information contained herein for diagnosing or treating a health
                problem or disease or prescribing any medication. Carefully read
                all product documentation. If you have or suspect that you have
                a medical problem, promptly contact your regular healthcare
                provider.
              </p>
            </div>
            <div className="p-[10px] border-solid border-[1px] border-white">
              <p className="text-[.75rem]">
                These statements have not been evaluated by the Food and Drug
                Administration. This product is not intended to diagnose, treat,
                cure or prevent any disease.
              </p>
            </div>
          </div>
          <div className="flex w-full">
            <div className="mt-[1.5rem] text-center"></div>
          </div>
        </div>
      </footer>
    </section>
  );
}
