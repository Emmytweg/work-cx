import {React, useState} from 'react'
import './HomeContents.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faGear, faSearch } from '@fortawesome/free-solid-svg-icons'
import BarChart from './BarChart'
import { Sales } from '../../../Sales'
import LineGraph from './LineGraph'

function HomeContents() {

const [userData] = useState({
    labels: Sales.map(sale => sale.month) ,
    datasets: [{
        label: ["Month"],
        data: Sales.map((sale)=> {
            return  sale.price 
        }),

        backgroundColor:[
           " rgba(1, 138, 189, 0.4)",
          "#018ABD",
          "#018ABD",
          " rgba(1, 138, 189, 0.4)",
          "#018ABD",
          "#018ABD"
        ],
        borderRadius: [10],
    }]
})
const [graph] = useState(
    {labels: ["wk1", "wk2", "wk3", "wk4", "wk5", "wk6", "wk7"],
    datasets: [
        {
            label: "Unsuccessful",
            data: [600, 300, 470, 280, 270, 190, 0],
           style: "Unsuccessful",
           fill: true
        },
    
        {
                label: "Successful",
                data: [450, 650, 710,580, 710, 740, 820 ],
                style: "Successful",
                fill: true
            }
        ]
    
 
}
)

  return (
    <div className='homeContent'>
        <div className="homeContentTopContainer">
        <FontAwesomeIcon icon={faSearch} />   
         <input type="text" placeholder='Search...' />
        <FontAwesomeIcon icon={faBell} color='#018ABD' /> 
        <FontAwesomeIcon icon={faGear} color='#018ABD' /> 
        </div>
        <div className="homeContentMidContainer">
            <div className="successfulDeals">
                <h3 className="amount">520</h3>
                <p>Succesful Deals</p>
                <div className="ranger">
                <div className="range">
                    <div className="inner-range"></div>
                </div> <p>60%</p>
                </div>
                
            </div>
            <div className="totalSales">
                <h3>N 5,000,000.00</h3>
                <p>Total Orders</p>
                <div className="ranger">
                <div className="range">
                    <div className="inner-range blueTotalSales"></div>
                </div> <p>40%</p>
                </div>
            </div>
            <div className="totalOrders">
                <h3>40</h3>
                <p>Total Orders</p>
                <div className="ranger">
                <div className="range">
                    <div className="inner-range yellowTotalOrders"></div>
                </div> <p>40%</p>
                </div>
            </div>
            <div className="newCustomers">
                <h3>20</h3>
                <p>New Customers</p>
                <div className="ranger">
                <div className="range">
                    <div className="inner-range greyNewCustomers"></div>
                </div> <p>20%</p>
                </div>
            </div>
            <div className="analytics">
                <div className="analytics-top">
                <h3>Analytics</h3>
                <select name="" id="" placeholder='This Month'>
                <option value="">This Month</option>
                <option value="">Last Month</option>
                </select>
                </div>
                <div className="circle">
                    <div className="circularrange"> 
                    <p>70%</p>
                    </div>
                    <div className="circle-legends">
                        <div className="firstCircleLegendWithDot">
                        <div className="first-legend"></div> <small>Online Customers</small>
                        </div>
                        <div className="secondCircleLegendWithDot">
                        <div className="second-legend"></div> <small>Offline Customers</small>
                        </div>
                       
                       <div className="thirdCircleLegendWithDot">
                       <div className="third-legend"></div> <small>Others</small>
                       </div>
                    </div>
                </div>
            </div>
        </div>
          

        <div className="homeContentLowerContainer">
            <div className="firstLowerContainer">
            <div className="optionInTopContainer">
                <select name="" id="">
                    <option value="">Sales</option>
                </select> {/*Option for sale */}
            <select>
                <option value="">
                    6 Months
                </option>
            </select>
            </div>
            <div className='barChart'>
            <BarChart chartData={userData} />

            </div>
            </div>
            <div className="secondLowerContainer">
                <div className="optionInLowerContainer">
                    <div className='Suc'>
                    <select name="" id="">
                        <option value="">Successful/Unsuccessful</option>
                       
                    </select>
                    <div className="legendsInLowerContainer">
                            <div className="legendOneSuccess"></div> <small>Success</small>
                            <div className="legendOneUnsuccess"></div> <small>Unsuccessful</small>
                            <div className="legendOneTriangle"></div> <small>+20%</small>


                        </div>
                    </div>
                    <select name="" id="" className='week'>
                        <option value="" >
                            Week
                        </option>
                    </select>
                </div>
                <div>
                    <LineGraph lineData={graph} style={graph.datasets.style} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomeContents