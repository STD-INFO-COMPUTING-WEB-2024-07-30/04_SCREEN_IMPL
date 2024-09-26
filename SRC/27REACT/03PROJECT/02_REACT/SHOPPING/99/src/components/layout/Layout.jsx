
import Header from "./Header";
import Main from "./Main"
import Footer from "./Footer"

import React,{useState} from "react";



const layout = (props)=>{
    
    return (
            <div className="wrapper">
                    {/* HEADER */}
                    <Header />

                    {/* MAIN */}
                    <Main>
                        {props.children}
                    </Main>

                    {/* FOOTER */}
                    <Footer />
            </div>
       
    )
}


export default layout;
