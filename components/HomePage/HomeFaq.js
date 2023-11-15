export default function HomeFaq() {
  return (
    <section className="bg-[#f2f1ea] text-black">
      <div className="pt-[60px]">
        <div className="flex max-w-[80rem] gap-[20px] justify-around  mx-auto">
          <div className="text-left basis-[40%] mt-[1rem] mb-[1rem]">
            <p>FAQ</p>
            <h2 className="text-[4.5rem]">Questions answered.</h2>
          </div>
          <div className="max-w-[550px] basis-[60%]">
            <div className="max-w-full">
              <div
                id="faq-item"
                className="border-solid border-white rounded-[20px] mb-[1.5rem] bg-white"
              >
                <summary className="list-none p-[1.5rem] flex relative leading-tight">
                  <h3>What types of flavors do you offer?</h3>
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
                </summary>
                <div
                  id="collapsableAccordianItem"
                  className="px-[1.5rem] pb-[1.5rem] text-[1.125rem]"
                >
                  <p>
                    Our most popular flavors, Strawberry Kiwi, Passion Punch and
                    Lemon Zest are the 3 flavors available as of current. The
                    flavor scientists at our lab are working hard on new flavors
                    for everyone to enjoy so keep an eye out for them!
                  </p>
                </div>
              </div>
              <div
                id="faq-item"
                className="border-solid border-white rounded-[20px] mb-[1.5rem] bg-white"
              >
                <summary className="list-none p-[1.5rem] flex relative leading-tight">
                  <h3>
                    Can I order soda individually, or do I have to purchase them
                    in bulk?
                  </h3>
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
                </summary>
                <div
                  id="collapsableAccordianItem"
                  className="px-[1.5rem] pb-[1.5rem] text-[1.125rem]"
                >
                  <p>
                    If you would like to purchase individual cans, you may visit
                    participating retailers such as Walmart, Target and CVS.
                    Online, we only offer 8-packs because we believe you won't
                    just want one.
                  </p>
                </div>
              </div>
              <div
                id="faq-item"
                className="border-solid border-white rounded-[20px] mb-[1.5rem] bg-white"
              >
                <summary className="list-none p-[1.5rem] flex relative leading-tight">
                  <h3>
                    How are your sodas packaged to ensure they arrive in good
                    condition?
                  </h3>
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
                </summary>
                <div
                  id="collapsableAccordianItem"
                  className="px-[1.5rem] pb-[1.5rem] text-[1.125rem]"
                >
                  <p>
                    The Sopop Team ensures your product gets to your hands in
                    great condition by boxing it up and protecting it with
                    bubble wrap.
                  </p>
                </div>
              </div>
              <div
                id="faq-item"
                className="border-solid border-white rounded-[20px] mb-[1.5rem] bg-white"
              >
                <summary className="list-none p-[1.5rem] flex relative leading-tight">
                  <h3>How can I contact customer support?</h3>
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
                </summary>
                <div
                  id="collapsableAccordianItem"
                  className="px-[1.5rem] pb-[1.5rem] text-[1.125rem]"
                >
                  <p>
                    You can contact customer support with any questions/concerns
                    you have through Email. If you would like to start, you can
                    click the link here.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
