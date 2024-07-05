import React from 'react'
import { useNavigate } from 'react-router-dom'
import PropTypes from "prop-types"
export default function MainPage({children}) {
    const navigate = useNavigate()
    return (
       <>
        <div className='flex justify-end border mb-2'>
            <div>
                <button onClick={() => { navigate("/gsap-animation") }} className="p-3 bg-black text-white">GSAP Animation</button>
                <button onClick={() => { navigate("/gsap-animation/scroll-animation") }} className="p-3 bg-black text-white ml-4">GSAP Scroll Animation</button>
                <button onClick={() => { navigate("/spring-animation") }} className="p-3 bg-black text-white ml-4">Spring Animation</button>
            </div>
        </div>
        {children}
       </>
    )
}


MainPage.propType={
    children:PropTypes.any
}