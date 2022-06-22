import React from 'react';

const TopConstructors = class extends React.PureComponent {
    render() {
        const { contructors } = this.props;
        return (
          <div className="f2-podium--top-positions constructors">
            <a href="#podium-2" className="f2-podium--position pos--2">
              <div className="f2-contructors-snapbox">
                <picture className="constructor-logo">
                  <img 
                    alt={contructors[1].team}
                    src={`http://localhost:3000/assets/img/${contructors[1].team}_logo.png`}
                  />
                </picture>
              </div>
              <div className="f2-constructorsCar-info">
                <picture className="car-image">
                  <img 
                    alt={contructors[1].team}
                    src={`http://localhost:3000/assets/img/${contructors[1].team}.png`}
                  />
                </picture>
              </div>
            </a>

            <a href="#podium-2" className="f2-podium--position pos--1">
              <div className="f2-contructors-snapbox">
                <picture className="constructor-logo">
                  <img 
                    alt={contructors[0].team}
                    src={`http://localhost:3000/assets/img/${contructors[0].team}_logo.png`}
                  />
                </picture>
              </div>
              <div className="f2-constructorsCar-info">
                <picture className="car-image">
                  <img 
                    alt={contructors[0].team}
                    src={`http://localhost:3000/assets/img/${contructors[0].team}.png`}
                  />
                </picture>
              </div>
            </a>

            <a href="#podium-2" className="f2-podium--position pos--3">
              <div className="f2-contructors-snapbox">
                <picture className="constructor-logo">
                  <img 
                    alt={contructors[2].team}
                    src={`http://localhost:3000/assets/img/${contructors[2].team}_logo.png`}
                  />
                </picture>
              </div>
              <div className="f2-constructorsCar-info">
                <picture className="car-image">
                  <img 
                    alt={contructors[2].team}
                    src={`http://localhost:3000/assets/img/${contructors[2].team}.png`}
                  />
                </picture>
              </div>
            </a>
          </div>
        );
    }
};

TopConstructors.displayName = 'TopConstructors';
export default TopConstructors;
