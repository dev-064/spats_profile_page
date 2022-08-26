import React from 'react'

function TeamInfo(props) {
  return (
    <div style={{border:"1px solid white"}}>
      <div class="event-name">
        <h2 style={{border:"1px solid white"}}>
            {props.event}
        </h2>
      </div>
      <div class="team-members">
        <div class="name">
            <p>{props.name}</p>
            <p>{props.name}</p>
            <p>{props.name}</p>
        </div>
        <div class="members-id">
            <p>{props.id}</p>
            <p>{props.id}</p>
            <p>{props.id}</p>
        </div>
      </div>
    </div>
  )
}

export default TeamInfo
