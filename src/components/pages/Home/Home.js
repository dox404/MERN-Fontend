import React from 'react'
import './Home.css'

const Home = () => {
  return (
   <>
    <div className="conatiner-fluid" id="main-container">
      {/* <h1 className="text-center">This is homepage</h1> */}

      {/* <img src="https://muffingroup.com/blog/wp-content/uploads/2021/03/Demuxed-2020.jpg" alt="homepage img" id="homepage-img"/> */}
      <div className="row">
        <div className="col-6">
         <h1 className="text-center my-5"> Welcome to our page</h1>
         <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
        
      </div>

     </div>
   </>
  )
}

export default Home