import React, { Component } from 'react';

class Directory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }

    render() {
        const directory = this.props.cruiseships.map(cruiseship => {
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