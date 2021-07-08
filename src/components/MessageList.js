import { div } from "prelude-ls";
import React from "react";
import MessageCard from "./MessageCard";

function MessageList ({messages}) {
    const messageArray = messages.map((message) => <MessageCard message={message} key={message.id}/>)
    return (
        <>
            <h2>Messages</h2>
        <section className="messages">
          <ul>
            {messageArray}
          </ul>
        </section>
        </>
    )
}

export default MessageList