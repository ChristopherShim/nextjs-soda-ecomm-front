import Script from "next/script";


export default function HomeHeader() {



  return (
    <section className="text-7xl mx-auto text-center w-full pt-[100px] pb-[76px] text-white">
      <div>
        <h1 className="leading-tight text-2xl md:text-[64px]">The New Pop,</h1>
        <h1 className="leading-tight text-2xl md:text-[64px]">
          <Script src="https://kit.fontawesome.com/4d06b44541.js" />
          <i className="fa-solid fa-droplet" style={{ color: "#C6A1DC" }}></i>
          <span> </span>
          SOPOP.
          <span> </span>
          <i className="fa-solid fa-droplet" style={{ color: "#C6A1DC" }}></i>
        </h1>
        <p className="text-lg my-8 leading-[1.5rem] text-sm md:text-[20px] md:leading-[2rem]">
          The new soda pop with <br /> the best flavors in town.
        </p>
      </div>
    </section>
  );
}
