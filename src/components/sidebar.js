import React from "react";

export default function SideBar(data) {
    return (
        <div id="sideblock">
            <text>filters</text>
            <div className="my-1"><text>select gender : </text>
            <select name="gender" id="firstselect">
                <option value={"all"}>All</option>
                <option value={"Male"}>Male</option>
                <option value={"Female"}>Female</option>
                <option value={"Polygender"}>Polygender</option>                
            </select></div>
            <div className="my-1"><text>select status : </text>
            <select name="status" id="secondselect">
                <option value={"all"}>all</option>
                <option value={true}>true</option>
                <option value={false}>false</option>
            </select></div>
            <div className="d-flex flex-column align-items-center my-2">
                <button onClick={data.changedata}>apply filters</button>
            </div>
        </div>
    )
}