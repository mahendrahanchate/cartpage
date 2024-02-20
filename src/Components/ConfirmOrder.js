import React, { useEffect } from 'react';
import anime from 'animejs';
const ConfirmOrder = () => {
  useEffect(() => {
    const checkTimeline = anime.timeline({ autoplay: true });

    checkTimeline
      .add({
        targets: '.checkmark',
        scale: [
          { value: [0, 1], duration: 600, easing: 'easeOutQuad' }
        ]
      })
      .add({
        targets: '.check',
        strokeDashoffset: {
          value: [anime.setDashoffset, 0],
          duration: 700,
          delay: 200,
          easing: 'easeOutQuart'
        },
        complete: function(anim) {
          // Set strokeDashoffset to 0 after animation completes
          anim.animatables[0].target.setAttribute('strokeDashoffset', 0);
        }
      });
  }, []);
  return (
    <div>
        <h1 style={{color:"red", fontSize:"40px", margin:"10px", padding:"10px"}}>
            Confirm Order :
        </h1>
        <div style={{paddingLeft:"45%"}}>
        <svg
      className="checkmark"
      xmlns="http://www.w3.org/2000/svg"
      width="128"
      height="128"
      viewBox="0 0 32 32"
    >
      <circle className="circle" cx="16" cy="16" r="16" fill="#0c3" />
      <path
        className="check"
        d="M9 16l5 5 9-9"
        fill="none"
        stroke="#fff"
        strokeWidth="3"
        strokeLinecap="round"
        strokeDasharray="26"
        strokeDashoffset="26"
        // transform="translate(4 4)" 
      />
    </svg>
    </div>
        <p style={{display:"flex", alignItems:"center", justifyContent:"center", color:"green", fontSize:"30px", fontFamily:"sans-serif"}}>
            Your Order placed Successfully !!!
        </p>
    </div>
  )
}

export default ConfirmOrder