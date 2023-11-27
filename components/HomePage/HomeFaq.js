import { useState } from "react";

export default function HomeFaq() {

  const [faq1, setFaq1] = useState(false);
  const [faq2, setFaq2] = useState(false);
  const [faq3, setFaq3] = useState(false);
  const [faq4, setFaq4] = useState(false);

  const closedFaq = 'list-none p-[1.5rem] flex relative leading-tight border-solid border-white rounded-[20px] bg-white questions cursor-pointer mb-4';
  const openFaq = 'list-none p-[1.5rem] flex relative leading-tight border-solid border-white rounded-t-[20px] bg-white questions cursor-pointer';

  function toggleFaq1(){
    console.log(faq1)
    setFaq1(!faq1)
  }

  function toggleFaq2(){
    console.log(faq2)
    setFaq2(!faq2)
  }

  function toggleFaq3(){
    console.log(faq3)
    setFaq3(!faq3)
  }

  function toggleFaq4(){
    console.log(faq4)
    setFaq4(!faq4)
  }

  return (
    <section className="bg-[#f2f1ea] text-black">
      <div className="pt-[60px] px-[1rem]">
        <div className="flex flex-col max-w-[80rem] gap-[20px] justify-around mx-auto md:flex-row">
          <div className="text-left basis-[40%] mt-[1rem] mb-[1rem]">
            <p className=" font-monument">FAQ</p>
            <h2 className="text-[2rem] font-monument">Questions answered.</h2>
          </div>
          <div className="max-w-[550px] basis-[60%]">
            <div className="max-w-full">
              <div
              onClick={toggleFaq1}
              className={faq1 ? openFaq : closedFaq}
              // className="list-none p-[1.5rem] flex relative leading-tight border-solid border-white rounded-t-[20px] bg-white questions cursor-pointer"
              >
                <p className="w-[80%] text-lg question font-bold">
                  What flavors do you offer?
                </p>
                <div className=" arrow">
                  <svg
                    className="absolute h-[0.6rem] right-[1.5rem] top-[calc(50%-0.2rem)]"
                    viewBox="0 0 10 6"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M9.354.646a.5.5 0 00-.708 0L5 4.293 1.354.646a.5.5 0 00-.708.708l4 4a.5.5 0 00.708 0l4-4a.5.5 0 000-.708z"
                      fill="black"
                    ></path>
                  </svg>
                </div>
              </div>
              {faq1 && <div className="px-[1.5rem] py-[1.5rem] text-[1.125rem] border-solid border-white rounded-b-[20px] mb-[1.5rem] bg-white">
                <p>
                  Our most popular flavors, Strawberry Kiwi, Passion Punch and
                  Lemon Zest are the 3 flavors available as of current. The
                  flavor scientists at our lab are working hard on new flavors
                  for everyone to enjoy so keep an eye out for them!
                </p>
              </div>}
              <div  onClick={toggleFaq2}
              className={faq2 ? openFaq : closedFaq}>
                <p className="w-[80%] text-lg font-bold">
                  Can I order soda individually, or do I have to purchase them
                  in bulk?
                </p>
                <svg
                  className="absolute h-[0.6rem] right-[1.5rem] top-[calc(50%-0.2rem)]"
                  viewBox="0 0 10 6"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9.354.646a.5.5 0 00-.708 0L5 4.293 1.354.646a.5.5 0 00-.708.708l4 4a.5.5 0 00.708 0l4-4a.5.5 0 000-.708z"
                    fill="black"
                  ></path>
                </svg>
              </div>
              {faq2 && <div className="px-[1.5rem] py-[1.5rem] text-[1.125rem] border-solid border-white rounded-b-[20px] mb-[1.5rem] bg-white">
                <p>
                  If you would like to purchase individual cans, you may visit
                  participating retailers such as Walmart, Target and CVS.
                  Online, we only offer 8-packs because we believe you won't
                  just want one.
                </p>
              </div>}

              <div  onClick={toggleFaq3}
              className={faq3 ? openFaq : closedFaq}>
                <p className="w-[80%] text-lg font-bold">
                  How are your sodas packaged to ensure they arrive in good
                  condition?
                </p>
                <svg
                  className="absolute h-[0.6rem] right-[1.5rem] top-[calc(50%-0.2rem)]"
                  viewBox="0 0 10 6"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9.354.646a.5.5 0 00-.708 0L5 4.293 1.354.646a.5.5 0 00-.708.708l4 4a.5.5 0 00.708 0l4-4a.5.5 0 000-.708z"
                    fill="black"
                  ></path>
                </svg>
              </div>
              {faq3 && <div className="px-[1.5rem] py-[1.5rem] text-[1.125rem] border-solid border-white rounded-b-[20px] mb-[1.5rem] bg-white">
                <p>
                  The Sopop Team ensures your product gets to your hands in
                  great condition by boxing it up and protecting it with bubble
                  wrap.
                </p>
              </div>}

              <div  onClick={toggleFaq4}
              className={faq4 ? openFaq : closedFaq}>
                <p className="w-[80%] text-lg font-bold">
                  How can I contact customer support?
                </p>
                <svg
                  className="absolute h-[0.6rem] right-[1.5rem] top-[calc(50%-0.2rem)]"
                  viewBox="0 0 10 6"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9.354.646a.5.5 0 00-.708 0L5 4.293 1.354.646a.5.5 0 00-.708.708l4 4a.5.5 0 00.708 0l4-4a.5.5 0 000-.708z"
                    fill="black"
                  ></path>
                </svg>
              </div>
              {faq4 && <div className="px-[1.5rem] py-[1.5rem] text-[1.125rem] border-solid border-white rounded-b-[20px] mb-[1.5rem] bg-white">
                <p>
                  You can contact customer support with anys/concerns you have
                  through Email. You may contact us at CustomerService@sopopsoda.com
                </p>
              </div>}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
