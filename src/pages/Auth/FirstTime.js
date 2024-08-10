import React, { useEffect } from 'react'
import images from '../../assets/image'
import { Link, useNavigate } from 'react-router-dom'
function FirstTime() {
  const navigate = useNavigate();
  useEffect(() => {
    if(localStorage.getItem("user")){
        navigate("/home");
    };
  }, [navigate])
  return (
    <div style={{fontSize: "1.6rem",textAlign: "center", marginTop: "20px"}} className='container'>
        <h1 style={{fontSize: "4.5rem"}}>Social Constructive Learning</h1>
        <p style={{fontSize: "2rem"}}>Construct knowledge and personalize the learning way to empower learners' full potential.</p>
        <Link to={'/login'} style={{fontSize: "2rem"}} className='btn btn-primary'>JOIN NOW</Link>
        <div style={{marginTop: "50px"}}>
            <img width={"350px"} src={images.firstPage}/>
        </div>
    </div>
  )
}

export default FirstTime