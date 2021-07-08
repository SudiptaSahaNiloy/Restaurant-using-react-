import React from 'react';
import { Card, CardImg, CardImgOverlay, CardBody, CardTitle } from 'reactstrap';
import './Menuitem.css';

const MenuItem = (props) => {
    console.log(props);
    return (
        <div>
            <Card className="Card">
                <CardBody>
                    <CardImg
                        className="CardImg"
                        width="100%"
                        alt={props.dish.name}
                        src={props.dish.image}
                    />
                    <CardImgOverlay>
                        <CardTitle>{props.dish.name}</CardTitle>
                    </CardImgOverlay>
                </CardBody>
            </Card>
        </div>
    )
}

export default MenuItem;