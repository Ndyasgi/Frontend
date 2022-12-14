import React, {useEffect} from "react";
import vid from "../assets/video (1).mp4";

const kontak = () => {
    return(
        <div>
            <div>
                <div>

                
        <div>
            <div ></div>
            <video src={vid} autoPlay loop muted />
            <div className="content grid grid-cols-2 flex-row col-md-8">
                <div>
                    <h1 className="text-4xl">Travel with us</h1>
                </div>
                <div className="flex-row justify-end ">
                    <input className="pl-3 pt-3 pb-3 rounded-full border border-indigo-600 bg-transparent" type="text" placeholder="Enter Email Address" />
                    <button className="flex justify-self-stretch border rounded-full pl-3 pt-1 pb-1 pr-3 bg-blue" type="submit">SEND</button>
                </div>

                <div className="border box-content border-4 rounded-3xl flex-col grid grid-cols-2 py-12 px-4 w-4/6">
                    <div className="border-transparent px-2 flex-col">
                        <div className="logoDiv">
                        <a href="#" className='logo flex'>
                            TripTrap
                        </a>
                        </div>

                        <div >
                        Practical, No Hassle
                        <p>Free transactions anywhere and anytime, from desktops, mobile applications, or mobile websites.</p>
                        </div>

                    </div>
          
                <div className=" grid grid-cols-2 ">
                    {/* grup 1 */}
                    <div >
                    <span >
                        OUR AGENCY
                    </span>

                    <li >
                         Services
                    </li>

                    <li >
                         Insurance
                    </li>

                    <li >
                         Agency
                    </li>

                    <li >
                         Tourism
                    </li>

                    <li >
                         Payment
                    </li>

                    </div>

                    {/* grup 2 */}
                    <div >
                    <span >
                        PARTNERS
                    </span>

                    <li >
                         Bookings
                    </li>

                    <li >
                         Rental Car
                    </li>

                    <li >
                         Hostel World
                    </li>

                    <li >
                        Trivago
                    </li>

                    <li >
                        Trip Advisor
                    </li>

                    </div>
                </div>
            </div>
            </div>


        </div>
        </div>
            </div>
        </div>
    )

}
  export default kontak