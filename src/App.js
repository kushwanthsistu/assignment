import React from "react";
import Element from "./components/element"
import data from "./data.json"
import Topnav from "./components/topnav";
import SideBar from "./components/sidebar";
import disappear from "./disappear.json"

export default function App() {
    const [displaydata, setdata] = React.useState(data);
    const [displaysort, sort] = React.useState(false) ;
    const [sortorder, setsort] = React.useState(displaydata) ;
    const [sortway, setsortway] = React.useState("nosort") ;

    function displaysortoptions() {
        sort(!displaysort)
    }

    const list = sortorder.map((info, index) => {
        console.log(displaydata) ;
        return (
            <Element
                {...info}
            />
        )
    })

    function changedata() {
        // alert(sortway) ;
        const a = document.getElementById("firstselect").value ;
        const b = document.getElementById("secondselect").value ;
        // alert(a+b) ;
        setdata(data.map((info, index) => {
                if(a == "all" && b == "all")
                return info ;
                if(a != "all" && b == "all" && a == info.gender)
                return info ;
                if(a == "all" && b != "all" && ((info.status && b == "true") | (!info.status && b == "false")))
                return info ;
                if(a == info.gender && ((info.status && b == "true") | (!info.status && b == "false")))
                return info ;
                return disappear ;
        }))
        if(sortway == "nosort")
        unsort() ;
        else if(sortway == "ascending")
        ascending() ;
        else
        descending() ;
    }

    function unsort() {
        sort(false) ;
        setsortway("nosort") ;
        setsort([...displaydata]) ;
    }

    function ascending() {
        sort(false) ;
        setsortway("ascending") ;
        setsort((sortorder) => {
            let tosortdata = [...displaydata] ;
            tosortdata.sort((a,b) => {
                let fa = a.first_name.toLowerCase(), 
                    fb = b.first_name.toLowerCase() ;
                if(fa < fb)
                return -1 ;
                if(fa > fb)
                return 1 ;
                return 0 ;
            })
            return tosortdata ;
        })
    }
    function descending() {
        sort(false) ;
        setsortway("decending") ;
        setsort((sortorder)=> {
            let tosortdata = [...displaydata] ;
            tosortdata.sort((a,b) => {
                let fa = a.first_name.toLowerCase(),
                    fb = b.first_name.toLowerCase() ;
                if(fa < fb)
                return 1 ;
                if(fa > fb)
                return -1 ;
                return 0 ;
            })
            return tosortdata ;
        })
    }

    return (
        <div className="p-2 d-flex flex-row">
        <SideBar 
            changedata = {changedata}
        />
        <div id="rightbar">
            <Topnav 
                sortdisplay = {displaysort}
                sortfunction = {displaysortoptions}
                functionascending = {ascending}
                functiondescending = {descending}
                functionunsort = {unsort}
            />
            {list}</div>
        </div>
    )
}