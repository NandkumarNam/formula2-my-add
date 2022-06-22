import React from 'react';

const TopRacers = class extends React.PureComponent {
    render() {
        const { racers } = this.props;
        return (
          <div className="f2-podium--top-positions">
            <a href="#podium-2" className="f2-podium--position pos--2">
              <div className="f2-driver-snapbox">
                <div className="team-color-border" style={{ background: `#${racers[1].teamColor}` }} />
                <picture className="f2-driver-snap">
                  <img 
                    alt={racers[1].firstName}
                    src={`http://localhost:3000/assets/img/${racers[1].lastName}.png`}
                  />
                </picture>
              </div>
              <div className="f2-driver-info">
                <span className="f2-podium--driver f2--xs">
                  <span className="f2-podium--name">{racers[1].firstName}</span>
                  <span className="f2-podium--flag">
                    <picture className="team-flag">
                      <img 
                        src="http://localhost:3000/assets/img/country-flag-Greece.png"
                        alt="countryFlag"
                      />
                    </picture>
                  </span>
                  <strong className="f2-podium--surname f2-uppercase">{racers[1].lastName}</strong>
                </span>
              </div>
            </a>

            <a href="#podium-2" className="f2-podium--position pos--1">
              <div className="f2-driver-snapbox">
                <div className="team-color-border" style={{ background: `#${racers[0].teamColor}` }} />
                <picture className="f2-driver-snap">
                  <img 
                    alt={racers[0].firstName}
                    src={`http://localhost:3000/assets/img/${racers[0].lastName}.png`}
                  />
                </picture>
              </div>
              <div className="f2-driver-info">
                <span className="f2-podium--driver f2--xs">
                  <span className="f2-podium--name">{racers[0].firstName}</span>
                  <span className="f2-podium--flag">
                    <picture className="team-flag">
                      <img 
                        src="http://localhost:3000/assets/img/country-flag-Greece.png"
                        alt="countryFlag"
                      />
                    </picture>
                  </span>
                  <strong className="f2-podium--surname f2-uppercase">{racers[0].lastName}</strong>
                </span>
              </div>
            </a>

            <a href="#podium-2" className="f2-podium--position pos--3">
              <div className="f2-driver-snapbox">
                <div className="team-color-border" style={{ background: `#${racers[2].teamColor}` }} />
                <picture className="f2-driver-snap">
                  <img 
                    alt={racers[2].firstName}
                    src={`http://localhost:3000/assets/img/${racers[2].lastName}.png`}
                  />
                </picture>
              </div>
              <div className="f2-driver-info">
                <span className="f2-podium--driver f2--xs">
                  <span className="f2-podium--name">{racers[2].firstName}</span>
                  <span className="f2-podium--flag">
                    <picture className="team-flag">
                      <img 
                        src="http://localhost:3000/assets/img/country-flag-Greece.png"
                        alt="countryFlag"
                      />
                    </picture>
                  </span>
                  <strong className="f2-podium--surname f2-textUppercase">{racers[2].lastName}</strong>
                </span>
              </div>
            </a>
          </div>
        );
    }
};

TopRacers.displayName = 'TopRacers';
export default TopRacers;
