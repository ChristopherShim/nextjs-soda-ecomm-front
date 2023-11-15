import Image from "next/image"
import SopopGraphic from "@/assets/Sopop-Graphic.png"

export default function HomePromise(){
    return (
        <section>
            <div className='px-[5rem] py-[28px] max-w-[100rem] mx-auto'>
                <div className='border-solid border-[1px] border-[#444] rounded-[20px] flex flex-wrap list-none p-0 overflow-hidden'>
                    <div className='w-[33.33%]'>
                        <div className='min-h-[200px]'>
                            <Image src={SopopGraphic}  className='h-full object-contain w-full'></Image>
                        </div>
                    </div>
                    <div className='w-[66.67%] bg-gradient-to-t from-[#1D1D1F] to-[#323236] '>
                        <div className='pt-[2rem] pr-[7rem] pb-[2rem] pl-[7rem]'>
                            <h2 className='text-[34px]'>The new refreshing Soda Pop you will experience.</h2>
                            <div className='mt-[2rem]'>
                                <p className='text-xl'>We use only the most natural ingredients and flavorings to provide the best tasting Soda Pop for you. <a href="/" className='text-orange underline underline-offset-4'>Learn More</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      )
}