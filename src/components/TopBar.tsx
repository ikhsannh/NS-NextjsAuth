import React from "react"
import Link from "next/link"

const TopBar = () => {
  return (
    <>
     <div className="justify-between flex">
      <div className="flex gap-2"> 
        <Link href="/">Home</Link> |
        <Link href="admin">Admin</Link> |
        <Link href="dashboard">Dashboard</Link>   
      </div>

      <div>
        <Link href="login">Login</Link>
      </div>
     </div>    
    </>
  )
}

export default TopBar