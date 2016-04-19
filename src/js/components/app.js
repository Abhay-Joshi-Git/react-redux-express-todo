import React from "react";
import * as Redux from "redux"
import { connect } from "react-redux";
import { addToDo, loadToDos, setLoadingToDos } from "../actions.js";

var todoId = 0;

class ToDoList extends React.Component {
    render() {
        return (
            <div>
                <button
                    onClick={
                    () => this.props.loadToDos()
                }>
                    Load ToDos
                </button>
                <button
                    onClick={
                    () => this.props.addToDo({
                        id: 9,
                        task: 'Test',
                        completed: false
                    })
                }>
                    Add Test
                </button>
                <br />
                <br />
                {this.getToDosHTML()}
            </div>
        )
    }

    getToDosHTML() {
        console.log(this.props);
        if (this.props.loadingToDos) {
            return this.getLoadingHTML();
        }
        var ToDoList = this.props.ToDos.map(todo => {
                return (
                    <div key={todo.id}>
                        <input type="checkbox" defaultChecked={todo.completed} /> {todo.task}
                    </div>
                );
            }
        );
        return <div>
                {ToDoList}
            </div>
    }


    getLoadingHTML() {
        return (
            <div className="loader">
            </div>
        );
    }
}

function getHighestToDoId(ToDos) {
    ToDos.reduce((max, current) => {
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

const mapDispatchToProps = (dispatch) => {
    return {
        addToDo : () => {
            dispatch(addToDo());
        },
        loadToDos : () => {
            console.log(dispatch)
            dispatch(setLoadingToDos(true));
            dispatch(loadToDos(dispatch));
        },
        setLoadingToDos: () => {
            dispatch(setLoadingToDos());
        }
    };
};

var App = connect(
    mapStateToProps,
    mapDispatchToProps//{ addToDo, loadToDos, setLoadingToDos }
)(ToDoList);


export default App;


//const AppOriginal = () => (
//    <div>
//        <button
//            onClick={
//                () => {store.dispatch({type: "ADD", todo: "Test"})}
//            }
//            >
//            Add Test
//        </button>
//
//        <br />
//        <br />
//
//        {store.getState().map(todo => <div key={todoId++}>todo</div>)}
//
//
//    </div>
//
//);

