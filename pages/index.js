import HomePage from "@/components/HomePage/HomePage"
import { Product } from "@/models/Product"
import { mongooseConnect } from "@/lib/mongoose"

export default function Home({featuredProduct}) {
  return (
    <HomePage product={featuredProduct}/>
  )
}

export async function getServerSideProps(){
  await mongooseConnect();
  const featuredProduct = await Product.find({_id: ["6541ea9d53222b62576a57af", "6541ebb69d3ea6230a181415", "6541ebc39d3ea6230a18141b"]})
  return {
     props: {featuredProduct: JSON.parse(JSON.stringify(featuredProduct))}
  }
}