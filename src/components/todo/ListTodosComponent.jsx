import { Component } from "react";
import TodoDataService from "../../api/todo/TodoDataService.js";
import AuthenticationService from "./AuthenticationService.js"

class ListTodosComponent extends Component{
    constructor(props){
        console.log('constructor')
        super(props)
        this.state = {
            todo : 
            [
                // {id: 1, description : 'Learn React', done:false, targetDate: new Date()},
                // {id: 2, description : 'Learn React', done:false, targetDate: new Date()},
                // {id: 3, description : 'Learn React', done:false, targetDate: new Date()}
            ]
        }
    }

    componentWillUnmount() {
        console.log('componentWillUnmount')
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate')
        console.log(nextProps)
        console.log(nextState)
        return true
    }

    componentDidMount() {
        console.log('componentDidMount')
        let username = AuthenticationService.getLoggedUserName()
        TodoDataService.retrieveAllTodos(username)
            .then(
                response => {
                    //console.log(response)
                    this.setState({todo : response.data})
                }
            )
    }

    render() {
        console.log('render')
        return(
            <div>
                <h1>List Todos</h1>
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Description</th>
                                <th>Target Date</th>
                                <th>Is Completed?</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                            this.state.todo.map(
                                todo =>
                                    <tr key={todo.id}>
                                        <td>{todo.description}</td>
                                        <td>{todo.done.toString()}</td>
                                        <td>{todo.targetDate.toString()}</td>
                                    </tr>
                            )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default ListTodosComponent