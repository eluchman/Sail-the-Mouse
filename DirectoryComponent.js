import React, { Component } from 'react';

class Directory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cruiseships: [
                {
                    id: 0,
                    name: 'Disney Fantasy',
                    image: 'assets/images/fantasy.jpg',
                    destinations: '7 Night Eastern and Western Carribean from Port Canaveral',
                    
                },
                {
                  id: 1,
                  name: 'Disney Dream ',
                  image: 'assets/images/dream.jpg',
                  destinations: '4/3 Night Sailings to the Bahamas from Port Canaveral',
                 
                },
                {
                    id: 2,
                    name: 'Disney Magic',
                    image: 'assets/images/magic.jpg',
                    destinations: '4/5/7 Night Sailings to Carribean, Bahamas, and Trans-Atlantic Sailing from Miami and Port Canaveral',
                   
                },
                {
                    id: 3,
                    name: 'Disney Wonder',
                    image: 'assets/images/wonder.jpg',
                    destinations: '3/4/7 Night Sailings to Mexican Riveria, Western Caribbean, and Alaska ',
                   
                }
            ],
        };
    }

    render() {
        const directory = this.state.cruiseships.map(cruiseship => {
            return (
                <div key={cruiseship.id} className="col">
                    <img src={cruiseship.image} alt={cruiseship.name} />
                    <h2>{cruiseship.name}</h2>
                    <p>{cruiseship.destinations}</p>
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    {directory}
                </div>
            </div>

        );
    }
}

export default Directory;