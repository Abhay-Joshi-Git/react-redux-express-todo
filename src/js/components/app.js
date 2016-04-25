import React from "react";
import * as Redux from "redux"
import { connect } from "react-redux";
import { addToDo, loadToDos, updateToDo, deleteToDo } from "../actions.js";

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
        var ToDoList = this.props.ToDos.map(todo => {
                return (
                    <div key={todo.id} className="well">
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
        );
        return (
            <div>
                {ToDoList}
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
        if (max < current.id) {
            return current.id
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
    //mapDispatchToProps
    { addToDo, loadToDos, updateToDo, deleteToDo }
)(ToDoList);


export default App;