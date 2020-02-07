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
                    elevation: 42,
                   
                }
            ],
        };
    }

    render() {
        return (
            <div />
        );
    }
}

export default Directory;