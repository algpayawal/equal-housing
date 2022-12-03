import React, {useState} from "react";
import Footer from "../Footer";
import head from "./assets/images/head.png";
import SearchIcon from '@mui/icons-material/Search';
import WifiIcon from '@mui/icons-material/Wifi';
import PetsIcon from '@mui/icons-material/Pets';
import BedIcon from '@mui/icons-material/Bed';
import data from "./TemplateData.json";



export default function Home() {
    const [searchTerm, setSearchTerm] = useState("");
    const itemsToShow = 1;
    const [items, setItems] = useState(0);
   
    return (
        <div className="bg">
            <>
                <header className="header">
                  <img src={head} alt="Header" width={800}/>
                </header>

                <div className="templateContainer">
                    <div className="searchInput_Container">
                        <input id="searchInput" type="text" placeholder="Search City..." onChange={(event) => {
                            setSearchTerm(event.target.value);
                        }}/>
                        <div className="searchIcon">
                            <SearchIcon/>
                        </div>
                    </div>
                
                        <div className="template_Container">
                        <h1> VIEW PROPERTY DETAILS</h1>
                            {
                                data.filter((places) =>  {
                                    if (searchTerm === "") {
                                        return places;
                                    } else if (
                                        places.city.toLowerCase().includes(searchTerm.toLowerCase()
                                        )
                                        ) {
                                        return places;
                                    }
                                }).slice(items, items + itemsToShow)
                                    .map((val) => {
                                        return (
                                        <div className="template" key={val.id}>
                                            <div className="cards">
                                                <div className="aptImg card">
                                                <img src={val.image} width={500} alt={""} className="responsive"/>
                                                </div>
                                                <div className="aptAddress card">
                                                    {val.house_no + " " + val.street + ", " + val.barangay + ", " + val.city + ", " + val.province}
                                                </div>
                                                <div className="aptRent card">
                                                    Php {val.price}.00/month
                                                </div>
                                                <div className="aptStatus card">
                                                        {val.status}
                                                </div>
                                                <div className="aptDetails card">
                                                <h4>Details:</h4>
                                                <p><BedIcon fontSize="25"/> {val.bedroom} bedroom/s </p>
                                                <p><WifiIcon fontSize="25"/> {val.wifi}</p>
                                                <p><PetsIcon fontSize="25"/> {val.pets}</p>
                                                </div>
                                                <div className="aptContact card">
                                                    <h4>Contact this Property:</h4>
                                                     <p>Owner/Landlord: {val.owner_name}</p>
                                                     <p>Contact No. {val.contact_no}</p>
                                                     Email Address: {val.email_add}
                                                </div>
                                            </div>
                                        </div>
                                      )
                                    }
                                  )
                                }
                                <div>
                                <div className="button-ctn">
                                <button
                                    className="button-prev"
                                    disabled={items === 0}
                                    onClick={(e) => setItems(items - itemsToShow)}
                                >Previous
                                </button>
                                &nbsp;&nbsp;
                                <button
                                    className="button-next"
                                    disabled={items + itemsToShow >= data.length}
                                    onClick={(e) => setItems(items + itemsToShow)}
                                >Next
                                
                                </button>
                            </div>
                            </div>
                         </div>
                      </div>
                      <Footer/>
                    </>
                </div>
                )
              }