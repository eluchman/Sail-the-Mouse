import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class Directory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedCruiseship: null
        };
    }

    onCruiseshipSelect(cruiseship) {
        this.setState({selectedCruiseship: cruiseship})
    }

    renderSelectedCruiseship(cruiseship) {
        if (cruiseship) {
            return (
                <Card>
                    <CardImg top src={cruiseship.image} alt={cruiseship.name} />
                    <CardBody>
                        <CardTitle>{cruiseship.name}</CardTitle>
                        <CardText>{cruiseship.destinations}</CardText>
                    </CardBody>
                </Card>
            )

        }
    }

    render() {
        const directory = this.props.cruiseships.map(cruiseship => {
            return (
                <div key={cruiseship.id} className="col">
                   <Card onClick= {() => this.onCruiseshipSelect(cruiseship)}>
                    <CardImg width="100%" src={cruiseship.image} alt={cruiseship.name} />
                        <CardImgOverlay>
                            <CardTitle>{cruiseship.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
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