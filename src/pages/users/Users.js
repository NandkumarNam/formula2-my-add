import React from 'react';
import { Link, Route } from 'react-router-dom';
import UserDetail from '../user-detail/UserDetail';
import HttpStatus from '../../components/ssr_core/HttpStatus';
import withSSR from '../../components/ssr_core/withSSR';

class Users extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     friendsData: [
  //       { id: '12342', name: 'Brent' },
  //       { id: '124234', name: 'Jared' },
  //     ],
  //   };
  // }

  static getInitialData({ match }) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({
          friendsData: [
            { id: '12342', name: 'Brent' },
            { id: '124234', name: 'Jared' },
          ],
          currentRoute: match.pathname,
        });
      }, 500);
    });
  }

  render() {
    const { isLoading, friendsData, error } = this.props;
    const hasFriends = !!friendsData && friendsData.length > 0;

    if (isLoading) {
      // route wide loading...
      return (
        <div>
          <h1>Loading...</h1>
          <div>...</div>
        </div>
      );
    }
    if (error) {
      return (
        <HttpStatus statusCode={500}>
          <div>
            <h1>Error</h1>
            <pre>{JSON.stringify(error, null, 2)}</pre>
          </div>
        </HttpStatus>
      );
    }

    const userDetailRouts = props => <UserDetail {...props} person={hasFriends && friendsData.find(p => p.id === props.match.params.id)} />;

    return (
      <div>
        <Route path="/users/:id" exact render={props => userDetailRouts(props)} />

        <Route
          path="/users"
          exact
          render={() => (
            <div>
              <h1>Users</h1>
              {hasFriends
                && friendsData.map(t => (
                  <Link key={t.id} to={`/users/${t.id}`} style={{ display: 'block', marginBottom: '.5rem' }}>
                    {t.name}
                  </Link>
                ))}
              <Link key="404" to="/users/asdf;lkjasdf" style={{ display: 'block', marginBottom: '.5rem' }}>
                Not Found Route (404)
              </Link>
              <span
                style={{
                  display: 'block',
                  fontSize: 12,

                  color: '#999',
                  fontWeight: 800,
                }}
              >
                (server rendered if on initial render)
              </span>
            </div>
          )}
        />
      </div>
    );
  }
}

export default withSSR(Users);
