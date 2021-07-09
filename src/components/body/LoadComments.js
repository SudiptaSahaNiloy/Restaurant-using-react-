import React from "react";
import dateFormat from "dateformat";

const LoadComments = (props) => {
    return (
        props.comments.map((cmnt) => {
            return (
                <div key={cmnt.id}>
                    <p>
                        <i style={{ fontSize: "11px" }}>
                            "{cmnt.comment}"
                        </i>
                        <h5 style={{ fontSize: "10px", fontWeight: "100" }}>
                            -{cmnt.author}
                            <br />
                            {dateFormat(cmnt.date, "dddd, mmmm dS, yyyy")}
                        </h5>
                    </p>
                </div>
            );
        })
    );
}

export default LoadComments;

