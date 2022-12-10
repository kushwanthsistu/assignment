import React from "react";

export default function Element(data) {
    // console.log(data)
    if(data.id == 0)
    return <></>
    return (
        <div className="border border-1 p-1" style={{color : data.status ? "green" : "red" }}>
            <div className="row text-wrap">
                <div className="col-3 text-wrap">{data.first_name}</div>
                <div className="col-3 text-wrap">{data.last_name}</div>
                <div className="col-3 text-wrap">{data.mobile}</div>
                <div className="col-3 text-wrap">{data.email}</div>
            </div>
        </div>
    )
}