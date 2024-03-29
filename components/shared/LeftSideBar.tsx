'use client'
import { sidebarLinks } from '@/constants/ndex';
import React from 'react'
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '../ui/button';
import { SignedOut } from '@clerk/nextjs';
Image

const LeftSideBar = () => {
    const pathname = usePathname()
  return (
    <section className='background-light900_dark200 light-border custom-scrollerbar static left-0 top-0 flex h-screen flex-col justify-between overflow-y-auto border-r p-6 pt-20 shadow-light-300 max-sm:hidden lg:w-[266px]'>

<div className='flex h-full flex-col gap-6 pt-16'>
        {
            sidebarLinks.map((item)=>{
            const isActive = pathname.includes(item.route)&& item.route.length >1|| pathname === item.route;
            return(
                
          
                <Link href={item.route}
                key={item.label}
                className={`${isActive? 'primary-gradient rounded-lg text-light-900':'text-dark300_light900'} flex items-center justify-start gap-4 bg-transparent p-4` }
                >
                    <Image 
                    
                    src={item.imgURL}
                    alt={item.label}
                    width={20}
                    height={20}
                    className={`${isActive? '':'invert-colors'}`}
                    />
                    <p className={`${isActive?'base-bold max-lg:hidden':'base-medium max-lg:hidden'}`}>{item.label}</p>
                </Link>
              
            )})
        }
      </div>
      <SignedOut>
            <div className='flex flex-col gap-3'>
        
                <Link href={"/sign-in"} className='mt-1'>
                    <Button className='small-medium btn-secondary min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none'>
         
                    </Button>
                </Link>
      

                <Link href={"/sign-up"} className='mt-1'>
                    <Button className='small-medium  light-border-2 btn-tertiary min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none text-dark400_light900'>
                    <Image
                        src={"/assets/icons/account.svg"}
                        alt='login'                  
                         width={20}
                         height={20}
                         className='invert-colors lg:hidden'
                         />
                        <span className='primary-text-gradient max-lg:hidden'>Sign Up</span>
                    </Button>
                </Link>

            </div>
        </SignedOut>
    </section>
  )
}

export default LeftSideBar