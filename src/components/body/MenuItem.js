import React from 'react';
import '../../stylesheet/MenuItem.css';
import { Card, CardImg, CardImgOverlay, CardBody, CardTitle } from 'reactstrap';

// class for showing card per dish sent in props
const MenuItem = (props) => {
    return (
        <div>
            <Card className="Card">
                <CardBody onClick={() => props.DishSelect(props.dish)}>
                    <CardImg
                        className="CardImg"
                        width="100%"
                        alt={props.dish.name}
                        src={props.dish.image}
                    />
                    <CardImgOverlay>
                        <CardTitle className="CardTitle">
                            {props.dish.name}
                        </CardTitle>
                    </CardImgOverlay>
                </CardBody>
            </Card>
        </div>
    )
}

export default MenuItem;