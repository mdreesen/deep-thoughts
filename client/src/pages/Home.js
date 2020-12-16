import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_THOUGHTS } from '../utils/queries';

// importing ThoughtList component
import ThoughtList from '../components/ThoughtList';

const Home = () => {

  // use useQuery hook to make query request
  // react-hooks library provides a "loading" property to indicate that the request isnt done just yet.
  // the its finished getting the data (if any), that information is stored in the destructured "data" property
  const { loading, data } = useQuery(QUERY_THOUGHTS);

  // this is optional chaining 
  const thoughts = data?.thoughts || [];
  console.log(thoughts);

  // used the ternary operator to conditionally render the "<ThoughtList>" component. 
  // if the query hasnt completed and "loading" is still defined, we display a message to indicate just that.
  // Once the query is complete and "loading" is undefined, we pass the "thoughts" array and a custom title to the <ThoughtList> component as props

  return (
    <main>
      <div className='flex-row justify-space-between'>
        <div className='col-12 mb-3'>{loading ? (
          <div>Loading...</div>
        ) : (
          <ThoughtList thoughts={thoughts} title="Some Feed for Thought(s)..." />
        )}</div>
      </div>
    </main>
  );
};

export default Home;
