import HomeHeader from "./HomeHeader"
import HomeProduct from "./HomeProduct"
import Slider from "./Slider"
import HomeBenefits from "./HomeBenefits"
import HomeCompare from "./HomeCompare"
import HomeShop from "./HomeShop"
import HomeFaq from "./HomeFaq"
import HomeCTA from "./HomeCTA"
import HomePromise from "./HomePromise"

export default function HomePage({product}){
    return (
        <>
        <HomeHeader/>
        <HomeProduct product={product}/>
        <Slider/>
        <HomeBenefits/>
        {/* <HomeCompare/> */}
        {/* <HomeShop/> */}
        {/* <HomeFaq/> */}
        {/* <HomeCTA/> */}
        {/* <HomePromise/> */}
        </>
    )
}