import React from "react";

export default function Topnav(data) {
    function block() {
        return (
            <div id="popout" className="p-1">
                <div className="border border-1" onClick={data.functionunsort}>no sort</div>
                <div className="border border-1" onClick={data.functionascending}>ascending</div>
                <div className="border border-1" onClick={data.functiondescending}>descending</div>
            </div>
        )
    }
    return (
        <div className="border border-1" id="outerelement">
            <div className="row">
            <div id="popoutouter" className="col-3 text-wrap">
                <div className="d-flex flex-row">
                    <div className="me-auto p-1">first name</div>
                    <div onClick={data.sortfunction}><btn><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
  <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
</svg></btn></div>
</div>
            {data.sortdisplay ? block() : <></> }
            </div>
                <div className="col-3 text-wrap p-1">last name</div>
                <div className="col-3 text-wrap p-1">mobile</div>
                <div className="col-3 text-wrap p-1">email</div>
            </div>
        </div>
    )
}