import React from 'react';
import { connect } from 'react-redux';
import { messageWorld, messageDemo } from '../action';

class App extends React.Component {
  render() {
    console.log(this.props);
    const {
      message: { data }
    } = this.props;
    console.log(data);
    return (
      <div>
        <h2>Demonstration of Redux-Sage</h2>

        <h4>My Message:{this.props.message.message}</h4>
        <button
          onClick={() => {
            this.props.messageWorld('hello');
          }}
        >
          Hello
        </button>
        <button
          onClick={() => {
            this.props.messageDemo('posts');
          }}
        >
          Demons
        </button>
        <h4>Data</h4>
        {data.length > 0 ? (
          data.map(item => {
            return <p key={item.id}>{item.title}</p>;
          })
        ) : (
          <p>no data</p>
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ message }) => {
  return {
    message: message
  };
};

export default connect(
  mapStateToProps,
  {
    messageWorld,
    messageDemo
  }
)(App);
