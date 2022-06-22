import React from 'react';

class TabComp extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      findSelected: 0,
    };
  }

  onHandleChange = (index) => {
    this.setState({ findSelected: index });
  }

  handleKeyPress = () => {

  }

  render() {
    const { children } = this.props;
    const { findSelected } = this.state;
    return (
      <div className="f2-raceStanding-wrapper">
        <div className="f2-raceStanding-content">
          <ul className="inline f2-raceStanding-inlineTabs f2-bg--offWhite">
            {children.map((elem, index) => {
                const style = index === findSelected ? 'selected f2-tab f2--xs' : 'f2-tab f2--xs';
                return (
                  <li className={style} key={elem.props.uniqueKey}>                
                    <div
                      className="tabBtn"
                      role="button"
                      onClick={() => this.onHandleChange(index)}
                      onKeyPress={() => {}}
                      tabIndex={0}
                    >
                      {elem.props.title}
                    </div>
                  </li>
                );
            })}
          </ul>
          <div className="tab">
            {children[findSelected]}
          </div>
        </div>
      </div>
    );
  }
}

export default TabComp;
