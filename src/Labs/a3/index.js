import JavaScript from "./JavaScript";
import Add from "./Add";
import PathParameters from "./PathParameters";
import Classes from "./Classes";
import Styles from "./Styles";
import ConditionalOutput from "./ConditionalOutput";
import TodoList from "./todo/TodoList";
import TodoItem from "./todo/TodoItem";

function Assignment3() {
    return (
      <div className="container">
        <h1>Assignment 3</h1>
        <JavaScript/>
        <Add/>
        <PathParameters/>
        <Classes/>
        <Styles/>
        <ConditionalOutput/>
        <TodoItem/>
        <TodoList/>
      </div>
    );
  }
  export default Assignment3;