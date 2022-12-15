import React from 'react'
import './Goal.scss'
import Typewriter from "typewriter-effect";

const Goal = () => {
  return (
    <div className="goal">
      <div className="goal__left">
      <div className="goal__left__header">
          <h1 style={{color: "#1da1f2"}}>
            <Typewriter
              options={{
                autoStart: true,
                loop: true,
                delay: 40,
                strings: ["Our Goals"],
              }}
            />
          </h1>
        </div>
        <div className="goal__left__text">
          <h2>
            {" "}
            At Nencia We believe fashion is a powerful tool for social change.
            It can be used to express our individuality, to challenge norms and
            stereotypes, and to help us express ourselves in ways that can't be
            done in any other way.
          </h2>
        </div>
      </div>
      <div className="right"></div>
    </div>
  )
}

export default Goal