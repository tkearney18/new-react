import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Featured from "./pages/Featured";
import About from "./pages/About";
import Layout from "./pages/Layout";
import CounterApp from "./pages/Counter";
//importing an es5 application
import { TodoApp } from "./pages/Todo";
import SimpleTodo from "./pages/SimpleTodo";

const app = document.getElementById('app');

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Layout}>
            <IndexRoute component={Featured}></IndexRoute>
            <Route path="about" name="about" component={About}></Route>
            <Route path="counter" name="counter" component={CounterApp}></Route>
            <Route path="todo" name="todo" component={TodoApp}></Route>
            <Route path="simple-todo" name="simple-todo" component={SimpleTodo}></Route>
        </Route>    
    </Router>,
app);
