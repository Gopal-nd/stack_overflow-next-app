import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import RenderTag from './RenderTag'

const hotQuestions =[
    {_id:1,title:"Best practices for data fetching in a Next.js application with Server-Side Rendering (SSR)?"},
    {_id:2,title:"Redux Toolkit Not Updating State as Expected"},
    {_id:3,title:"Is it only me or the font is bolder than necessary?"},
    {_id:4,title:"Can I get the course for free?"},
    {_id:5,title:"Async/Await Function Not Handling Errors Properly"},
]

const popularTags =[
    {_id:1,tag:"javascript",totalQuestions:6},
    {_id:2,tag:"React",totalQuestions:6},
    {_id:3,tag:"Next",totalQuestions:6},
    {_id:4,tag:"HTML",totalQuestions:6},
    {_id:5,tag:"CSS",totalQuestions:6},
]
const RightSidebar = () => {
  return (
    <section className='background-light900_dark200 light-border custom-scrollerbar static right-0 top-0 flex h-screen w-[350px] flex-col  overflow-y-auto border-r p-6 pt-20 shadow-light-300 max-xl:hidden lg:w-[350px]'>
        <div>
        <h3 className='h3-bold text-dark200_light900'>Questions</h3>
        <div className='mt-7 flex w-full flex-col gap-[30px]'>
            <h1 className='h3-bold'>Top Questions</h1>
           {
            hotQuestions.map((questions)=>{
                return(
                    <Link href={`/questions/${questions._id}`} key={questions._id} className='flex cursor-pointer items-center justify-between gap-7'>
                        <p className='body-medium text-dark500_light700'>
                            {questions.title}
                        </p>
                        <Image
                        src={"/assets/icons/chevron-right.svg"}
                        alt='arrow'
                        width={20}
                        height={20}
                        className='invert-colors'/>
                    </Link>
                )
            })
           }
        </div>
        </div>
        <div className='mt-16'>
        <h1 className='h3-bold'>Top Questions</h1>
        <div className='mt-7 flex flex-col gap-4'>
          {
            popularTags.map((tags)=>{
                return(
                    <RenderTag 
                    key={tags._id}
                    _id={tags._id}
                    name={tags.tag}
                    totalQuestions={tags.totalQuestions}
                    showcount
                    />
                )
            })
          }

        </div>
        </div>
        </section>
  )
}

export default RightSidebar