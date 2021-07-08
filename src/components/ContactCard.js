import React from "react";

function ContactCard (props) {
    return (
        <li className="contact">
                <div className="icon">{props.contact[0]}</div>
                {props.contact}
        </li>
    )
}

export default ContactCard;