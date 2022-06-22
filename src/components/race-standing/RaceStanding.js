import React from 'react';

import TabComp from '../tab-comp/TabComp';
import PanelComp from '../tab-comp/PanelComp';
import PodiumStandingList from '../podium-standing-list/PodiumStandingList';
import TopRacers from '../top-racers/TopRacers';
import TopConstructors from '../top-constructors/TopConstructors';

class RaceStanding extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            isContructorLoading: true,
            showRacerCompList: 'f2-podium--item-none',
            raceResults: [],
            contructorResults: [],
            error: null
        };  
    }
    
    componentDidMount() {
      this.fetchDrivers();
      this.fetchContructors();
    }

    showFullStanding = () => {
      this.setState({
        showRacerCompList: ''
      });
    }

    fetchDrivers() {
      fetch('http://localhost:3002/drivers')
      .then(response => response.json())
      .then(data =>
          this.setState({
            raceResults: data.sort((a, b) => (b.points - a.points)),
            isLoading: false,
          }))
      .catch(error => this.setState({ error, isLoading: false }));
    }
    
    fetchContructors() {
        fetch('http://localhost:3002/contructors')
        .then(response => response.json())
        .then(data =>
            this.setState({
                contructorResults: data.sort((a, b) => (b.points - a.points)),
                isContructorLoading: false,
            }))
        .catch(error => this.setState({ error, isContructorLoading: false }));
    }

    render() {
        const {
            isLoading, isContructorLoading, raceResults, contructorResults, showRacerCompList, error
        } = this.state;

        // Racers List start
        const renderRacerList = raceResults.map((racer, index) => {
            const {
                id,
                firstName, 
                lastName, 
                team, 
                teamColor, 
                points 
            } = racer;    
            return (          
              <li key={id} className={`f2-podium--item ${index > 9 ? showRacerCompList : ''} `}>
                <PodiumStandingList
                  index={index}
                  firstName={firstName}
                  boldName={lastName}
                  simpleName={team}
                  teamColor={teamColor}
                  points={points}
                />
              </li>
            );
        });
        
        const rednerViewFullStanding = (
          <button 
            type="button" 
            className="btn btn--default" 
            onClick={() => this.showFullStanding()} 
            onKeyPress={() => {}}
          >
            {' '}
View Full Standing
          </button>
        );

        // Constructors List start
        const renderContructorList = contructorResults.map((contructor, index) => {
          const {
              id,
              drivers, 
              team,
              teamColor, 
              points 
          } = contructor;    
          
          return (          
            <li key={id} className="f2-podium--item">
              <PodiumStandingList
                index={index}
                boldName={team}
                simpleName={drivers}
                teamColor={teamColor}
                points={points}
              />
            </li>
          );
        });

        return (
          <TabComp>
            <PanelComp uniqueKey="panel_1" title="Drivers">
              <div className="container">
                <div className="col-custom-10">
                  <h2 className="f2-raceStanding--tabTitle">Standing</h2>
                  {!isLoading ? (
                    <TopRacers racers={raceResults} />
                      ) : (
                        <h3>Loading...</h3>
                  )}
                  
                  {error ? <p>{error.message}</p> : null}
                  <ul className="f2-podium--raceStanding-list">
                    {!isLoading ? (
                      renderRacerList
                      ) : (
                        <h3>Loading...</h3>
                    )}
                    {!isLoading && showRacerCompList.length > 1 ? (rednerViewFullStanding) : ''}
                  </ul>
                </div>
              </div>
                
            </PanelComp>
            <PanelComp uniqueKey="panel_2" title="Contructors">
              <div className="container">
                <div className="col-custom-10">
                  <h2 className="f2-raceStanding--tabTitle">Standing</h2>
                  {!isContructorLoading ? (
                    <TopConstructors contructors={contructorResults} />
                    ) : (
                      <h3>Loading...</h3>
                  )}
                  {error ? <p>{error.message}</p> : null}
                  <ul className="f2-podium--raceStanding-list">
                    {!isContructorLoading ? (
                      renderContructorList
                      ) : (
                        <h3>Loading...</h3>
                    )}
                  </ul>
                </div>
              </div>
            </PanelComp>
            <PanelComp uniqueKey="panel_3" title="Last Race">
              <div className="container">
                <div className="col-custom-10">
                  <h2 className="f2-raceStanding--tabTitle">This is the lastrace panel</h2>
                </div>
              </div>
            </PanelComp>
          </TabComp>
        );
    }
}

export default RaceStanding;
