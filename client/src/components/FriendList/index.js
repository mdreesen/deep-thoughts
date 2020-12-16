// pass 3 props
// username - whose friends these belong to
// friendCount
// actual array of friends

import React from 'react';
import { link } from 'react-router-dom';

const FriendList = ({ friendCount, username, friends }) => {
    if (!friends || !friends.length) {
        return <p className="bg-dark text-light p-3">{username}, make some friends1</p>;
    }

    return (
        <div>
            <h5>{username}'s {friendCount} {friendCount === 1 ? 'friend' : 'friends'}</h5>
            {friends.map(friend => (
                <button className="btn w-100 display-block mb-2" key={friend._id}>
                    <link to={`/profile/${friend.username}`}>{friend.username}</link>
                </button>
            ))}
        </div>
    );
}

export default FriendList;