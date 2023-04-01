import {React} from 'react'
import './DealContent.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faBell, faGear, faSearch, faFunnelDollar} from '@fortawesome/free-solid-svg-icons';
import picOne from './picOne.png'
import picTwo from './picTwo.png'
import picThree from './picThree.png'
import picFour from './picFour.png'
import picFive from './picFive.png'
import picSix from './picSix.png'
import picSeven from './picSeven.png'
import picEight from './picEight.png'
function DealContent() {











  return (
    <div className='dealContent'>
        <div className="searchBar">
            <div className="searchInput">
                <input type="text" placeholder='Search...' />
                <FontAwesomeIcon icon={faSearch} className='searchIcon' />
            </div>
            <FontAwesomeIcon icon={faBell} className='bell' /> <FontAwesomeIcon icon={faGear} className='notification' />
        </div>
        <div className="navigate">
            <div className="homeDeal">
                <Link to='/home'>Home</Link>/
                <Link to='/deals'>Deals</Link>
            </div>
            <button className="addDeals">
                + Add Deals
            </button>
        </div>
        <div className="searchFilter">
            <div className='searchFilterTwo'>
                <FontAwesomeIcon icon={faSearch} className= "searchIconTwo" />
            <input type="text" placeholder='Search' />
             </div>
            <div className='searchFilterThree'>
                <FontAwesomeIcon icon={faFunnelDollar} className= "funnel" />
                <input type="text" placeholder='Filter'/>
            </div>
            <div className='searchFilterDate'>
                <input type="date" placeholder='January' />
            </div>
            <div className='searchFilterSort'>
                Sort by: <select name="" id="">
                    <option value="">Newest</option>
                </select>
            </div>
        </div>
        <div className="topTitle">
            <div className="leads">
                <div className="lead">
                    <h3>Leads</h3>
                </div>
            <div className="leadContent">
                20,000/2 Deals
                <div className="uncolouredBackground">
                    <div className="nameNumber">
                        <h4>Yemi Ventures</h4>
                        <p>12,000</p>
                        </div>
                        <img src={picOne} alt="" />
                </div>
                <div className="colouredBackground">
                    <div className="nameNumber">
                        <h4>GG Artistry</h4>
                        <p>8,000</p>
                        </div>
                        <img src={picTwo} alt="" />
                </div>
            </div>
            </div>
            <div className="contacted">
                <div className="contact">
                    <h3>Contacted</h3>
                </div>
            <div className="ContactedContent">
                210,000/5 Deals
                <div className="ContacteduncolouredBackground uncolouredBackground">
                    <div className="nameNumber">
                        <h4>Ire Buka</h4>
                        <p>80,000</p>
                        </div>
                        <img src={picTwo} alt="" />
                </div>
                <div className="ContactedcolouredBackground colouredBackground">
                    <div className="nameNumber">
                        <h4>Tems Bakery</h4>
                        <p>50,000</p>
                        </div>
                        <img src={picThree} alt="" />
                </div>
                <div className="ContacteduncolouredBackground uncolouredBackground">
                    <div className="nameNumber">
                        <h4>Orange Chops</h4>
                        <p>30,000</p>
                        </div>
                        <img src={picFour} alt="" />
                </div>
                <div className="ContactedcolouredBackground colouredBackground">
                    <div className="nameNumber">
                        <h4>Spectranet</h4>
                        <p>25,000</p>
                        </div>
                        <img src={picFive} alt="" />
                </div>
                <div className="ContacteduncolouredBackground uncolouredBackground">
                    <div className="nameNumber">
                        <h4>KPG</h4>
                        <p>25,000</p>
                        </div>
                        <img src={picSix} alt="" />
                </div>

            </div>
            </div>
            <div className="qualified">
                <div className="qualify">
                    <h3>Qualified</h3>
                </div>
                <div className="qualifiedContent">
                    70,000.00/ 4 Deals
                    <div className="qualifiedUncolored">
                        <div className="nameNumber">
                            <h4>Ife Logistics</h4>
                            <p>20,000</p>
                        </div>
                        <img src={picSeven} alt="" />

                    </div>
                    <div className="qualifiedColored">
                        <div className="nameNumber">
                            <h4>Ife Logistics</h4>
                            <p>20,000</p>
                        </div>
                        <img src={picEight} alt="" />

                    </div>
                    <div className="qualifiedUncolored">
                        <div className="nameNumber">
                            <h4>Ife Logistics</h4>
                            <p>20,000</p>
                        </div>
                        <img src={picTwo} alt="" />

                    </div>
                    <div className="qualifiedColored">
                        <div className="nameNumber">
                            <h4>Ife Logistics</h4>
                            <p>20,000</p>
                        </div>
                        <img src={picThree} alt="" />

                    </div>
                </div>
            </div>
            <div className="proposal">
                <div className="propose">
                   <h3>
                   Propose
                   </h3>
                </div>
                <div className="proposalContent">
                    50,000.00/ 4 Deals
                    <div className="proposalUncolored">
                        <div className="nameNumber">
                            <h4>Yemi POS</h4>
                            <p>15,000</p>
                        </div>
                        <img src={picFive} alt="" />
                    </div>
                    <div className="proposalColored">
                        <div className="nameNumber">
                            <h4>Excellent Prints</h4>
                            <p>10,000</p>
                        </div>
                        <img src={picThree} alt="" />
                    </div>
                    <div className="proposalUncolored">
                        <div className="nameNumber">
                            <h4>Sola Solution</h4>
                            <p>15,000</p>
                        </div>
                        <img src={picFive} alt="" />
                    </div>
                    <div className="proposalColored">
                        <div className="nameNumber">
                            <h4>Journal.ng</h4>
                            <p>10,000</p>
                        </div>
                        <img src={picSeven} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DealContent