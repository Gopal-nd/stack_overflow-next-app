import { UserButton } from "@clerk/nextjs";
 
export default function Home() {

  return (
    <div className="h-screen">
      <UserButton afterSignOutUrl="/"/>
      <h1 className="h1-bold m-9">Hello world</h1>
    </div>
  )
}