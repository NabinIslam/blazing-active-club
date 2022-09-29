import React from 'react';

const QnA = () => {
  return (
    <div className='my-5'>
      <h3>How does react work?</h3>
      <p>
        ReactJS divides the UI into isolated reusable pieces of code known as
        components. React components work similarly to JavaScript functions as
        they accept arbitrary inputs called properties or props. It's possible
        to have as many components as necessary without cluttering your code.
      </p>
      <h3>Difference between props and state in react?</h3>
      <p>
        Props are used to pass data from one component to another. The state is
        a local data storage that is local to the component only and cannot be
        passed to other components.
      </p>
      <h3>What is the usage of useEffect exept api data laod?</h3>
      <p>
        useEffect is for side-effects. A functional React component uses props
        and/or state to calculate the output. If the functional component makes
        calculations that don't target the output value, then these calculations
        are named side-effects.
      </p>
    </div>
  );
};

export default QnA;
