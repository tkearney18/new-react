import React from "react";
import { IndexLink, Link } from "react-router";

export default class Nav extends React.Component {
  constructor() {
    super()
    this.state = {
      collapsed: true,
    };
  }

  toggleCollapse() {
    const collapsed = !this.state.collapsed;
    this.setState({collapsed});
  }

  render() {
    const { location } = this.props;
    const{ collapsed } = this.state;

    const navClass = collapsed ? "collapse" : "";

    return (
      <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
        <div class="container">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle" onClick={this.toggleCollapse.bind(this)} >
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
          </div>
          <div class={"navbar-collapse " + navClass} id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav">
              <li activeClassName="active" onlyActiveOnIndex={true}>
                <IndexLink to="/" onClick={this.toggleCollapse.bind(this)}>Featured</IndexLink>
              </li>
              <li activeClassName="active">
                <Link to="about" onClick={this.toggleCollapse.bind(this)}>About</Link>
              </li>
              <li activeClassName="active">
                <Link to="counter" onClick={this.toggleCollapse.bind(this)}>Counter</Link>
              </li>
              <li activeClassName="active">
                <Link to="todo" onClick={this.toggleCollapse.bind(this)}>Todo (React Only)</Link>
              </li>
              <li activeClassName="active">
                <Link to="simple-todo" onClick={this.toggleCollapse.bind(this)}>SimplerTodo</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}