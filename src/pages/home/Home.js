import React from 'react';
import withSSR from '../../components/ssr_core/withSSR';

import RaceStanding from '../../components/race-standing/RaceStanding';

class Home extends React.Component {
  // This works similarly to Next.js's `getInitialProps`
  static getInitialData({ match }) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({
          text: "This text is server rendered if and only if it's the initial render.Go to another route.",
          currentRoute: match.pathname,
        });
      }, 500);
    });
  }

  render() {
    const { isLoading, text, error } = this.props;
    // const CODE = process.env.RAZZLE_API_SECRET_CODE;
    return (
      <div>
        {/* <h1>Homepage is {CODE} </h1> */}
        {isLoading && <div>Loading... </div>}
        {error && <div style={{ color: 'red' }}>{JSON.stringify(error, null, 2)}</div>}
        {text && <div>{text}</div>}
        <RaceStanding />
      </div>
    );
  }
}

export default withSSR(Home);
