import React from "react";
import { connect } from "react-redux";
import { updateToDo, deleteToDo } from "../actions.js";

class ToDo extends React.Component {
    render() {
        let { todo } = this.props;
        return (
            <div className="well">
                <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => this.props.updateToDo({
                                    ...todo,
                                    completed: !todo.completed
                                })
                            }
                    />
                <span className="task">{todo.task}</span>
                <a className="pull-right glyphicon glyphicon-remove-sign bigger-icon"
                   onClick={() => this.props.deleteToDo(todo.id)}
                    />
            </div>

        );
    }
};

export default connect(
    null,
    { updateToDo, deleteToDo }
)(ToDo);