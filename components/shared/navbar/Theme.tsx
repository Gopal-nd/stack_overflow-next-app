import React from 'react'
import Image from 'next/image'
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarTrigger,
  } from "@/components/ui/menubar"
  

import { useTheme } from '@/context/TemeProvider'
import { themes } from '@/constants/ndex'
const Theme = () => {
  return (
    <Menubar className=' relative border-none bg-transparent shadow-none'>
    <MenubarMenu>
      <MenubarTrigger>
        <Image src="/assets/icons/sun.svg" alt='sun' width={20} height={20}/>
        </MenubarTrigger>
      <MenubarContent className=' absolute right-[-3rem] mt-3 min-w-[120px] rounded border py-2'>

        {
            themes.map((item)=>(
        <MenubarItem key={item.value}>
            <Image src={item.icon}
            alt={item.label}
            width={16}
            height={16}
            className='mr-2'/>
            <p className='body-semibold'>{item.label}</p>
            
        </MenubarItem>
                
            ))
        }
        
      </MenubarContent>
    </MenubarMenu>
  </Menubar>
  
  )
}

export default Theme