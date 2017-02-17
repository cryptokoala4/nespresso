import React, {Component, PropTypes} from 'react';
import Helmet from 'react-helmet';
import {defineMessages, injectIntl, intlShape, FormattedMessage} from 'react-intl';
import styled from 'styled-components';
import { makeSelectRepos, makeSelectLoading, makeSelectError } from 'containers/App/selectors';
import H1 from 'components/H1';
import H2 from 'components/H2';
import H3 from 'components/H3';
import messages from './messages';
import HomeSlideshow from 'components/HomeSlideshow';
import Container from './Container';
import Header from 'components/Header';
import Wrapper from './Wrapper';
import Img from 'components/Img';
import '!style-loader!css-loader!sass-loader!./flex.css';
import axios from 'axios';

console.clear();

const Title = ({todoCount}) => {
  return (
    <div>
      <div>
        <h1>Capsule order ({todoCount})</h1>
      </div>
    </div>
  );
};

const TodoForm = ({addTodo}) => {
  // Input Tracker
  let input;
  // Return JSX
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      addTodo(input.value);
      input.value = '';
    }}>
      <input style={{border: 'black solid 1px'}} ref={node => {
        input = node;
      }} />
      <button>Add</button>
      <br />
    </form>
  );
};

const Todo = ({todo, remove}) => {
    // Each Todo
    return (<a href="#" style={{display:'flex'}} onClick={() => {remove(todo.id)}}>{todo.text}</a>);
};

const TodoList = ({todos, remove}) => {
    // Map through the todos
    const todoNode = todos.map((todo) => {
        return (<Todo todo={todo} key={todo.id} remove={remove}/>)
    });
    return (<div className="list-group" style={{marginTop:'30px'}}>{todoNode}</div>);
};

window.id = 0;

export class HomePage extends React.PureComponent {
  /**
   * when initial state username is not null, submit the form to load repos
   */
  constructor(props) {
      super(props);
      // Set initial state
      this.state = {
          data: []
      };
      this.apiUrl = 'https://57b1924b46b57d1100a3c3f8.mockapi.io/api/todos'
  }

    componentDidMount(){
        // Make HTTP reques with Axios
        axios.get(this.apiUrl)
            .then((res) => {
                // Set state with result
                this.setState({data:res.data});
            });
    }
    // Add todo handler
    addTodo(val){
      // Assemble data
      const todo = {text: val};
      // Update data
      axios.post(this.apiUrl, todo)
        .then((res) => {
            this.state.data.push(res.data);
            this.setState({data: this.state.data});
          });
    }
    // Handle remove
    handleRemove(id){
      // Filter all todos except the one to be removed
      const remainder = this.state.data.filter((todo) => {
        if(todo.id !== id) return todo;
      });
      // Update state with filter
      axios.delete(this.apiUrl+'/'+id)
        .then((res) => {
          this.setState({data: remainder});
        })
    }

  render() {
    return (
      <div style={{margin:'auto'}}>
        <Title todoCount={this.state.data.length}/>
        <TodoForm addTodo={this.addTodo.bind(this)}/>
        <TodoList
          todos={this.state.data}
          remove={this.handleRemove.bind(this)}
        />
      </div>
    );
  }
}

export default HomePage;
