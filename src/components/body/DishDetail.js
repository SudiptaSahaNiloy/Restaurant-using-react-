import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';
import LoadComments from './LoadComments';

const DishDetail = (props) => {
    let comments = <LoadComments comments={props.dish.comments} />
    return (
        <div>
            <Card style={{ marginTop: "10px" }}>
                <CardImg top
                    src={props.dish.image}
                    alt={props.dish.name} />
                <CardBody
                    style={{ textalign: "left" }}>
                    <CardTitle> {props.dish.name}</CardTitle>
                    <CardText>
                        <p>
                            {comments}
                        </p>
                        <p>
                            {props.dish.description}
                        </p>
                        <hr />
                        <p>
                            Price: {props.dish.price}/-
                        </p>

                    </CardText>
                </CardBody>
            </Card>
        </div>
    );
}

export default DishDetail;