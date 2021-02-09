import React from "react";
import Contact from "./components/Contact";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";

const App=()=>{
    return (
        <>
            <div className="row">
                <div className="col-md-8 offset-md-2">
                    <Contact/>
                </div>
            </div>
        </>
    );
}

export default App;