import { Link } from 'react-router-dom';
import React from 'react';
import NotFound from '../../components/ssr_core/NotFound';

const friendsDetailInfo = [
  { id: '12342', age: 28, spiritAnimal: 'Lion' },
  { id: '124234', age: 26, spiritAnimal: 'Panda' },
];

class UserDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
    };
  }

  componentDidMount() {
    const { person } = this.props;
    if (person) {
      this.loadMoreData(person.id);
    }
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    const { id } = nextProps.match.params;
    const { match } = this.props;
    if (match.params.id !== id) {
      this.setState({ isLoading: true });
      this.loadMoreData(id);
    }
  }

  loadMoreData = id => {
    setTimeout(() => {
      this.setState({
        extraPersonInfo: friendsDetailInfo.find(p => p.id === id),
        isLoading: false,
      });
    }, 500);
  };

  render() {
    const { isLoading, extraPersonInfo } = this.state;
    const { person } = this.props;

    return person ? (
      <div>
        <h1>
          {person.name}
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
        </h1>
        {isLoading ? (
          <div>
            <div>Loading...</div>
          </div>
        ) : (
          <div>
            <div>
              <strong>Age</strong>
:
              {extraPersonInfo.age}
            </div>
            <div>
              <strong>Spirit Animal</strong>
:
              {extraPersonInfo.spiritAnimal}
            </div>
            <span style={{ fontSize: 12, color: '#999', fontWeight: 800 }}>(always client rendered)</span>
          </div>
        )}
        <Link to="/users" style={{ display: 'block', marginTop: '1rem' }}>
          ← Back to users
        </Link>
      </div>
    ) : (
      <NotFound />
    );
  }
}

export default UserDetail;
