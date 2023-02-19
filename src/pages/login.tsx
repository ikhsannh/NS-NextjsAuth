import React from "react";
import { useRef } from "react"
import Layout from "../components/Layout";

const Login = () => {
    const userName = useRef("");
    const password = useRef("");

    const onSubmit = async () => {};
    
    const HandleUserName = (e) => {
        userName.current = e.target.value 
    }

    const HandlePassword = (e) => {
        password.current = e.target.value 
    }

  return (

    <Layout>
      <div className="mt-20 max-w-md">
        <form>    
          <div className="grid grid-cols-1 gap-6">
          <label className="block">
                <span className="text-gray-700">Name</span>
                <input
                  type="text"
                  className="
                    mt-1
                    block
                    w-full
                    rounded-md
                    bg-gray-100
                    border-transparent
                    focus:border-gray-500 focus:bg-white focus:ring-0
                  "
                  placeholder=""
                  onChange={HandleUserName}
                />
              </label>
              <label className="block">
                <span className="text-gray-700">Email address</span>
                <input
                  type="email"
                  className="
                    mt-1
                    block
                    w-full
                    rounded-md
                    bg-gray-100
                    border-transparent
                    focus:border-gray-500 focus:bg-white focus:ring-0
                  "
                  placeholder="nspace@example.com"
                  onChange={HandlePassword}
                />
              </label>
          </div>

          <div>
           <button 
                className="bg-indigo-400 w-full rounded-md px-2 py-2 border-2 mt-5"
                onClick={onSubmit}
           > Login 
           </button>  
          </div>  
        </form>   
      </div>  
    </Layout>

 )
}

export default Login;