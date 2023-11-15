import Script from "next/script";

export default function HomeHeader() {
  return (
    <section className="text-7xl mx-auto text-center w-full pt-[100px] pb-[76px] text-white">
      <div>
        <h1 className="leading-tight">The New Pop,</h1>
        <h1 className="leading-tight">
          <Script src="https://kit.fontawesome.com/4d06b44541.js" />
          <i className="fa-solid fa-droplet" style={{ color: "#C6A1DC" }}></i>
          <span> </span>
          Sopop.
          <span> </span>
          <i className="fa-solid fa-droplet" style={{ color: "#C6A1DC" }}></i>
        </h1>
        <p className="text-lg my-8 leading-[2.5rem]">
          The new soda pop with <br /> the best flavors in town.
        </p>
      </div>
    </section>
  );
}
