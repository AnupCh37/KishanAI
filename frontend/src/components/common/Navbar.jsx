import React from 'react'
import {Link } from 'react-router-dom'
export default function Navbar() {
  return (
   <>
    <nav>
<img src={logo} alt="logo"/>
<Link>Home</Link>
<Link>About</Link>
<Link>Plant</Link>
<Link>Insights</Link>
<Link>Contact</Link>
    </nav>
   </>
  )
}
