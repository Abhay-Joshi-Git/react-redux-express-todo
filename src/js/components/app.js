import React from "react";
import { connect } from "react-redux";
import { addToDo, loadToDos } from "../actions.js";
import ToDo from "./ToDo.js";

var todoId = 0;

class ToDoList extends React.Component {
    componentDidMount() {
        this.props.loadToDos();
    }

    render() {
        return (
            <div className="row">
                <div className="col-sm-offset-1 col-sm-9">
                    <a
                        className="glyphicon glyphicon-refresh bigger-icon"
                        onClick={this.props.loadToDos}>
                    </a>
                    <span className="pull-right col-sm-6">
                    <span><a
                        className="pull-right glyphicon glyphicon-plus-sign bigger-icon header-icon-padding"
                        onClick={
                        () => {
                            let task = this.taskInput.value;
                            this.taskInput.value = '';
                            this.props.addToDo({
                                id: getHighestToDoId(this.props.ToDos) + 1,
                                task: task,
                                completed: false
                            })
                        }
                    }>
                    </a></span>
                    <input
                        type="text"
                        className="pull-right form-control"
                        placeholder="new task..."
                        ref={(input) => {
                            this.taskInput = input;
                        }}
                        />
                    </span>
                    <br />
                    <br />
                    {this.getToDosHTML()}
                </div>
            </div>
        )
    }

    getToDosHTML() {
        if (this.props.loadingToDos) {
            return this.getLoadingHTML();
        }
        return (
            <div>
                {this.props.ToDos.map(todo => <ToDo key={todo.get("id")} todo={todo}/>)}
            </div>
        );
    }


    getLoadingHTML() {
        return (
            <div className="loader">
            </div>
        );
    }
}

function getHighestToDoId(ToDos) {
    return ToDos.reduce((max, current) => {
        if (max < current.get("id")) {
            return current.get("id")
        } else {
            return max;
        }
    }, 0)
}

const mapStateToProps = (state) => {
    return {
        ToDos: state.ToDos,
        loadingToDos: state.loadingToDos
    };
};

var App = connect(
    mapStateToProps,
    { addToDo, loadToDos }
)(ToDoList);

export default App;
