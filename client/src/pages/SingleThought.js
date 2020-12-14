import React from 'react';
// importing useParams to get the SingleThought _id
import { useParams } from 'react-router-dom';

// importing the useQuery hook
import { useQuery } from '@apollo/react-hooks';
// importing the QUERY_THOUGHT from utils/queries.js
import { QUERY_THOUGHT } from '../utils/queries';

const SingleThought = props => {
  // "loading" and "data" are destructured from the "useQuery" hook.
  // Loading variable is then used to briefly show a loading <div>Loading...</div> element
  // "data" variable is used to populate a thought object
  // useQuery hook was given a second argument in the form of an object, this is how you can pass variables to queries that need them
  // The "id" property on the variables object will become the "$id" parameter in the graphQL query
  const { id: thoughtId } = useParams();

  const { loading, data } = useQuery(QUERY_THOUGHT, {
    variables: { id: thoughtId }
  });
  
  const thought = data?.thought || {};
  
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="card mb-3">
        <p className="card-header">
          <span style={{ fontWeight: 700 }} className="text-light">
            {thought.username}
          </span>{' '}
          thought on {thought.createdAt}
        </p>
        <div className="card-body">
          <p>{thought.thoughtText}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleThought;
