import React from "react";
import "../contact/contact.css";
import LeftSideContact from "./contacttwosection/leftside/leftsidecontact";
import RightSideContact from "./contacttwosection/rightside/rightsidecontact";
import ContactOneSection from "./contactonesection/contactonesection";




let Contact = () =>{
    return (
        <>
        <ContactOneSection/>
        <div className="Sides">
        <LeftSideContact/>
        <RightSideContact/>
        </div>
        </>
    )
}

export default Contact