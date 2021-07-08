import React from "react";
// import { contacts } from "../data";
import ContactCard from "./ContactCard";

function ContactList ({contacts}) {
    const contactArray = contacts.map((contact) => <ContactCard contact={contact.name} key={contact.id}/>)
    console.log(contactArray, contacts);
    return (
        <nav>
            <h2>Contacts</h2>
            <ul className="contacts">
                {contactArray}
            </ul>
        </nav>
    )
}

export default ContactList;