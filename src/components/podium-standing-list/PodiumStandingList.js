import React from 'react';

class PodiumStandingList extends React.PureComponent {
    render() {
        const {
            index,
            firstName,
            boldName,
            simpleName,
            teamColor,
            points,
        } = this.props;
        return (
          <a href="#raceStanding-list" className="f2-podium--link f2-bg--white">
            <span className="f2-podium--rank f2-bold--xs">{index + 1}</span>
            <span className="team-color-icon" style={{ background: `#${teamColor}` }} />
            <span className="f2-podium--driver f2--xs">
              <span className="f2-capitalize">{firstName}</span>
                            &nbsp;
              <strong className="f2-podium--surname">{boldName}</strong>
            </span>
            <span className="f2-podium-subdetail misc--label">{simpleName}</span>
            <span className="f2-podium-right">
              <span className="f2-podium--time f2-label misc--label">
                {points}
                {' '}
PTS
              </span>
              <i className="icon icon-chevron-right f2-color--warmRed" />
            </span>
          </a>
        );
    }
}

PodiumStandingList.displayName = 'PodiumStandingList';

export default PodiumStandingList;
