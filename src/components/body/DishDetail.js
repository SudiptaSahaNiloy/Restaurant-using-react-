import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';
import LoadComments from './LoadComments';
import CommentForm from './CommentForm';
import { baseURL } from '../../Redux/baseURL';

const DishDetail = (props) => {
    return (
        <div>
            <Card style={{ marginTop: "10px" }}>
                <CardImg top
                    src={baseURL + props.dish.image}
                    alt={props.dish.name} />
                <CardBody
                    style={{ textAlign: "center" }}>
                    <CardTitle style={{ fontSize: "50px", fontWeight: "500" }}>
                        {props.dish.name}
                    </CardTitle>
                    <CardText>
                        {props.dish.description}
                    </CardText>
                    <LoadComments comments={props.comments} />
                    <hr />
                    <CommentForm dishId={props.dish.id} addComment={props.addComment} />
                    <hr />
                    <CardText style={{ fontSize: "30px", fontWeight: "600" }}>
                        Price: {props.dish.price}/-
                    </CardText>
                </CardBody>
            </Card>
        </div >
    );
}

export default DishDetail;