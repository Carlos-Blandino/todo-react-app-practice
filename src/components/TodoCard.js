import React , {Fragment} from "react";

function TodoCard({title}){
    return (
        <Fragment>
            <div className="card">
                <h2>TITLE</h2>
                <div className='actions'><button className='btn'>Delete</button></div>
            </div>
        </Fragment>
    )
}
export default TodoCard;