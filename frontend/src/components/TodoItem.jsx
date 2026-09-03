import React from "react"

class TodoItem extends React.Component {
    render() {
        return <li>
            <input
                type="checkbox"
                checked={this.props.todo.checked}
                onChange={() => this.props.handleChangeProps(this.props.todo.id)}
            />
            <button onClick={() => this.props.deleteTodoProps(this.props.todo.id)}>
                Удалить
            </button>
            <span className={this.props.todo.checked ? "done" : ""}>{this.props.todo.title}</span>
        </li>
    }
}

export default TodoItem
