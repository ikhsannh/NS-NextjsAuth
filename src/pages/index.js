import { useSession, signIn } from 'next-auth/react'

const Home = () => {
  const { data: session } = useSession()
  return (
    <>
      {session ?(
        <div className='text-2xl text-center font-bold mt-80'>
          Hello {session.user.name}!
        </div>
      ) : (
       <>
       <div className='text-2xl text-center font-bold mt-80'>
          You are not signed in!
        </div>
      
        <div className='text-2xl text-center font-bold mt-80'>
          <button onClick={() => signIn()}>Sign in</button>
        </div>
       </>
      )
      }  
    </>
  )
}

export default Home;