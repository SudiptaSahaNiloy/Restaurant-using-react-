const LoadComments = (props) => {
    let comments = props.comments.map((cmnt) => {
        return (
            <p>
                <i style={{ fontSize: "10px" }}>
                    "{cmnt.comment}"
                </i>
            </p>
        );
    });
    return (
        <div>
            {comments}
        </div>
    );
}

export default LoadComments;

