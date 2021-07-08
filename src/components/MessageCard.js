import React from "react"

function MessageCard ({message}) {
    return (
        <li className={"message " + message.type}>
              <div className="icon">{message.name[0]}</div>
              <span className="content">{message.content}</span>
        </li>
    )
}

export default MessageCard