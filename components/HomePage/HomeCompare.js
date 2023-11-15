import Script from "next/script";

export default function HomeCompare() {
  return (
    <section>
      <div className="bg-[#1d1d1f] bg-fixed">
        <div className="pt-[100px] pb-[50px]">
          <div className="relative mb-[100px] mx-auto px-[15rem] mx-[125px] mb-[100px]">
            <div>
              <p className="uppercase text-sm">
                <Script src="https://kit.fontawesome.com/4d06b44541.js" />
                <i
                  className="fa-solid fa-circle "
                  style={{ color: "#FFA500" }}
                ></i>
                compare
              </p>
              <h2 className="text-[4.5rem]">
                Brewing the <br /> best buzz.
              </h2>
            </div>
            <div>
              <table className="w-full table-fixed homeCompare">
                <colgroup>
                  <col span={1} className="w-[50%]" />
                </colgroup>
                <tbody>
                  <tr>
                    <th></th>
                    <th className="highlight">
                      <span className="pill">sopop</span>
                    </th>
                    <th>
                      <span className="pill-white">boke</span>
                    </th>
                    <th>
                      <span className="pill-white">spritz</span>
                    </th>
                  </tr>

                  <tr>
                    <td className="text-left">Better Flavor</td>
                    <td className="highlight">
                      <img src="https://cdn.shopify.com/s/files/1/0567/5378/2958/files/check.svg?v=1697046642" ></img>
                    </td>
                    <td>
                      <img src="https://cdn.shopify.com/s/files/1/0567/5378/2958/files/x.svg?v=1697046655"></img>
                    </td>
                    <td>
                      <img src="https://cdn.shopify.com/s/files/1/0567/5378/2958/files/x.svg?v=1697046655"></img>
                    </td>
                  </tr>

                  <tr>
                    <td className="text-left">Zero Sugar</td>
                    <td className="highlight">
                      <img src="https://cdn.shopify.com/s/files/1/0567/5378/2958/files/check.svg?v=1697046642"></img>
                    </td>
                    <td>
                      <img src="https://cdn.shopify.com/s/files/1/0567/5378/2958/files/x.svg?v=1697046655"></img>
                    </td>
                    <td>
                      <img src="https://cdn.shopify.com/s/files/1/0567/5378/2958/files/x.svg?v=1697046655"></img>
                    </td>
                  </tr>

                  <tr>
                    <td className="text-left">Zero Calories</td>
                    <td className="highlight">
                      <img src="https://cdn.shopify.com/s/files/1/0567/5378/2958/files/check.svg?v=1697046642"></img>
                    </td>
                    <td>
                      <img src="https://cdn.shopify.com/s/files/1/0567/5378/2958/files/x.svg?v=1697046655"></img>
                    </td>
                    <td>
                      <img src="https://cdn.shopify.com/s/files/1/0567/5378/2958/files/x.svg?v=1697046655"></img>
                    </td>
                  </tr>

                  <tr>
                    <td className="text-left">Low Caffeine Content</td>
                    <td className="highlight">
                      <img src="https://cdn.shopify.com/s/files/1/0567/5378/2958/files/check.svg?v=1697046642"></img>
                    </td>
                    <td>
                      <img src="https://cdn.shopify.com/s/files/1/0567/5378/2958/files/x.svg?v=1697046655"></img>
                    </td>
                    <td>
                      <img src="https://cdn.shopify.com/s/files/1/0567/5378/2958/files/x.svg?v=1697046655"></img>
                    </td>
                  </tr>

                  <tr>
                    <td className="text-left">Thirst Quenching</td>
                    <td className="highlight">
                      <img src="https://cdn.shopify.com/s/files/1/0567/5378/2958/files/check.svg?v=1697046642"></img>
                    </td>
                    <td>
                      <img src="https://cdn.shopify.com/s/files/1/0567/5378/2958/files/x.svg?v=1697046655"></img>
                    </td>
                    <td>
                      <img src="https://cdn.shopify.com/s/files/1/0567/5378/2958/files/x.svg?v=1697046655"></img>
                    </td>
                  </tr>

                  <tr>
                    <td className="text-left">Natural Ingredients</td>
                    <td className="highlight">
                      <img src="https://cdn.shopify.com/s/files/1/0567/5378/2958/files/check.svg?v=1697046642"></img>
                    </td>
                    <td>
                      <img src="https://cdn.shopify.com/s/files/1/0567/5378/2958/files/x.svg?v=1697046655"></img>
                    </td>
                    <td>
                      <img src="https://cdn.shopify.com/s/files/1/0567/5378/2958/files/x.svg?v=1697046655"></img>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
