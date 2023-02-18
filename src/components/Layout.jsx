import TopBar from "./TopBar";

const Layout = (props) => {
  return (
    <>
     <div className="container mx-auto">
      <TopBar />
      <hr />

       {props.children}  

      <hr className="mt-60"/>
      <h1 className="text-center">Footer</h1>
     </div>
    
    </>
  )
}

export default Layout;

