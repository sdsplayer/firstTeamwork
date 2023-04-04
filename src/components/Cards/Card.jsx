import React from 'react'
import "./Card.css"
function Crd() {
  return (
    <div>
      <div className='wrapper'>
        <div className='cardUvl'>
          <p>Starter</p>
          <h1>Free</h1>
          <ul>
            <li>1 Website</li>
            <li>5 GB Hosting</li>
            <li>Limited Support</li>
          </ul>
          <button>Get Started</button>
        </div>
        <div className='cardSolo'>
          <p>Premium</p>
          <h1>$29/month</h1>
          <ul>
            <li>1 Website</li>
            <li>5 GB Hosting</li>
            <li>Limited Support</li>
          </ul>
          <button>Get Started</button>
        </div>
        <div className='cardUvl'>
          <p>Starter</p>
          <h1>Free</h1>
          <ul>
            <li>1 Website</li>
            <li>5 GB Hosting</li>
            <li>Limited Support</li>
          </ul>
          <button>Get Started</button>
        </div>
      </div>
    </div>
  )
}

export default Crd