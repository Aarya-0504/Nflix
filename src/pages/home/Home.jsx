import React from "react";
import './home.scss'
import NavBar from "../../components/navbar/NavBar";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import Featured from "../../components/featured/Featured";
import List from "../../components/list/List";

const Home = () => {
    return (
        
        <div className="home">
            <NavBar/>
            <Featured/>
            <List/>
            <List/>
            <List/>
            <List/>                              
         
            {/* <AcUnitIcon/> */}
        </div>
    )
};

export default Home;