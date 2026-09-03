import React from "react"
import TodosList from "./TodosList";
import Header from "./Header"
import InputTodo from "./InputTodo"

let base_url = window._env_?.REACT_APP_BACKEND_BASE_URI || "/api/items"
if (!(base_url.endsWith("/"))){
    base_url = base_url + "/";
}
if (base_url.startsWith('/')) {
    base_url = window.location.origin + base_url
} else if (!base_url.startsWith('http')){
    base_url = window.location.protocol + "//" + base_url
}

const jsonHeaders = {"Content-Type": "application/json"};

class TodoContainer extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            todos: []
        }
    }

    componentDidMount() {
        fetch(base_url)
            .then(response => response.json())
            .then(data => this.setState({todos: data})).catch(console.error);
    }

    handleChange = (id) => {
        this.setState(prevState => ({
            todos: prevState.todos.map(todo => {
                if (todo.id === id) {

                    let c_todo = {
                        ...todo, checked: !todo.checked,
                    }
                    fetch(base_url + todo.id, {
                        method: "PUT", headers: jsonHeaders, body: JSON.stringify({
                            checked: c_todo.checked,
                        })
                    }).catch(console.error);

                    return c_todo
                }
                return todo
            }),
        }))
    };

    delTodo = id => {
        fetch(base_url + id, {
            method: "DELETE"
        }).then(response => response.json()).catch(console.error);

        this.setState({
            todos: [...this.state.todos.filter(todo => {
                return todo.id !== id;
            })]
        });
    };

    addTodoItem = title => {
        fetch(base_url, {
            method: "POST", headers: jsonHeaders, body: JSON.stringify({
                title: title,
                checked: false,
            })
        })
            .then(response => response.json())
            .then(newTodo => this.setState(prevState => ({
                todos: [...prevState.todos, newTodo]

            }))).catch(console.error);
    };

    render() {
        return (<main id="div-todoslist">
            <Header/>
            <InputTodo addTodoProps={this.addTodoItem}/>
            <TodosList todos={this.state.todos}
                       handleChangeProps={this.handleChange}
                       deleteTodoProps={this.delTodo}/>
        </main>);
    }
}

export default TodoContainer
