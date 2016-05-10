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
                    checked={todo.get("completed")}
                    onChange={() => this.props.updateToDo(
                        todo.set("completed", !todo.get("completed"))
                    )}
                    />
                <span className="task">
                    {todo.get("task")}
                </span>
                <a
                    className="pull-right glyphicon glyphicon-remove-sign bigger-icon"
                    onClick={() => this.props.deleteToDo(todo.get("id"))}
                    />
            </div>

        );
    }
};

export default connect(
    null,
    { updateToDo, deleteToDo }
)(ToDo);
