import React from 'react'
import './Whywork.css'
import { Link } from 'react-router-dom'
function Whywork() {
  return (
    <div className='why-con'>
      {/* why-con contains the CRM and butttons */}
      <h1>Why Work with Us?</h1>
      <div className="crm">
        {crm.map((cr)=> {
            return <div className='crm-con'>
                <h1>{cr.name} </h1>
                <p> {cr.words}</p>
            </div>
        })}
      </div>
      <Link to='./SignUp'>   
         <button>Get Started</button>
</Link>
    </div>
  )
}

export default Whywork
const crm = [
    {
        name:"CRM",
        words: "You can create sales pipelines and streamline your sales processes with our platform."
    }
    ,{
        name:"CRM",
        words: "You can boost productivity and salses using our platform."
    }
    ,{
        name:"CRM",
        words: "Our platform gives you better knowledge of your customers and helps customers retention."
    }
    ,{
        name:"CRM",
        words: "In a single location, our platform alalyses every step of your sales process."
    }
]