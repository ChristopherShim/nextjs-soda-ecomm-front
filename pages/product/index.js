import Image from "next/image";
import Script from "next/script";
import { Product } from "@/models/Product";
import { mongooseConnect } from "@/lib/mongoose";
import { useContext, useState } from "react";
import { CartContext } from "@/components/CartContext";
import { useRouter } from "next/router";
import {Provider, useDispatch } from "react-redux";
import ratingSVG from "@/assets/rating.svg";
import store from "@/store";
import ShopLayout from "@/components/ShopPage/ShopLayout";

export default function productPage({ products }) {
  const router = useRouter();
  // const dispatch = useDispatch()

  const [selectedItem, setSelectedItem] = useState("");



  if(selectedItem){
    router.push("/product/" + selectedItem)
  }

  return (
    <Provider store={store}>
      <ShopLayout products={products}/>
    </Provider>
  );
}

export async function getServerSideProps() {
  await mongooseConnect();
  const products = await Product.find({
    _id: [
      "6541ea9d53222b62576a57af",
      "6541ebb69d3ea6230a181415",
      "6541ebc39d3ea6230a18141b",
    ],
  });
  return {
    props: { products: JSON.parse(JSON.stringify(products)) },
  };
}
