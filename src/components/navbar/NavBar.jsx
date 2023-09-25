
import './navbar.scss';
import { useState } from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import NotificationsNoneRoundedIcon from '@mui/icons-material/NotificationsNoneRounded';



const NavBar = () => {

    const [isScrolled,setIsScrolled] = useState(false);
    // console.log(window.scrollY);
    window.onscroll = ()=>{
        setIsScrolled(window.scrollY === 0 ? false : true);
        return ()=> (window.onscroll = null)
    };
    console.log(isScrolled);
    return (
        <div className={isScrolled ? "navbar scrolled" : "navbar"}>
        <div className="navbar">
            <div className="container">
                <div className="left">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
                        alt="Netflix" />
                    <span>Homepage</span>
                    <span>Series</span>
                    <span>Movies</span>
                    <span>New and Popular</span>
                    <span>My List</span>
                </div>
                <div className="right">
                    <SearchRoundedIcon className="icon" />
                    <span>KID</span>
                    <NotificationsNoneRoundedIcon className="icon" />
                    <img src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                        alt=""
                    />
                    <div className="profile">
                        <ArrowDropDownIcon className="icon" />
                        <div className="options">
                            <span>Settings</span>
                            <span>Logout</span>
                        </div>
                    </div>
                </div>
                
            </div>
            <div className='container'>
        </div> 
    </div>  
    </div> 
        
                )
};

                export default NavBar;
