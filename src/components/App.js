import React from "react";
import MessageList from "./MessageList";
import { messages, contacts } from "../data";
import ContactList from "./ContactList";

console.log("Messages:", messages);
console.log("Contacts:", contacts);

function App() {
  return (
    <div className="app">
      { <ContactList contacts={contacts} /> }
      <main>
      <MessageList messages={messages}/>
        <form className="message-form">
          <input placeholder="Type a message..." />
        </form>
      </main>
    </div>
  );
}

export default App;
