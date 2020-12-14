import React from 'react';

const ThoughtList = ({ thoughts, title }) => {
    if (!thoughts.length) {
        return <h3>No Thoughts Yet</h3>
    }

    // instruct that the "ThoughtList" component will recieve two props
    // 1. a title, 2. and the "thoughts" array
    // destructured the argument "data" to avoid using props.title and props.thoughts throughout the JSX code
    // conditionally render JSX by checking to see if theres even any data in the "thoughts" array first. If there is no data, then we return a message stating that
    // if there is data, then we return a list of thoughts using the ".map()" method
    return (
        <div>
            <h3>{title}</h3>
            {thoughts &&
                thoughts.map(thought => (
                    <div key={thought._id} className="card mb-3">
                        <p className="card-header">
                            {thought.username} thought on {thought.createdAt}
                        </p>
                        <div className="card-body">
                            <p>{thought.thoughtText}</p>
                            <p className="mb-0">
                                Reactions: {thought.reactionCount} || Click to {' '}
                                {thought.reactionCount ? 'see' : 'start'} the discussion!
                            </p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default ThoughtList;