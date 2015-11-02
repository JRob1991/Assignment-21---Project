import React from 'react';
import Logo from './../components/logo';
import Nav from './../navigation';
// const SECRET_MESSAGE = 'TIY ROCKS!';

export default React.createClass({

  cancelHandler() {
    this.props.onCancelClick();
  },

  submitHandler( event ) {
    event.preventDefault();
    this.props.onSubmit(this.state);
  },

  handleChange(event) {
    let inputObj = {};
    inputObj[event.target.name] = event.target.value;
    this.setState(inputObj);
  },

  render() {
    return(
      <div className="container-form">
        <Logo></Logo>
        <Nav></Nav>
        <h2>Tell Us A Little About Yourself!</h2>
      <form className="form">
      First Name
        <p>
          <input type="text" name="FirstName" id="name" onChange={this.handleChange}/>
        </p>
        Last Name
        <p>
          <input type="text" name="LastName" id="email"  onChange={this.handleChange}/>
        </p>
        Photo URL
        <p>
          <input type="text" name="Photo" id="web" onChange={this.handleChange}/>
        </p>
        About Yourself
        <p>
            <textarea name="AboutMe" onChange={this.handleChange}></textarea>
        </p>
        <p>
            <input type="button" value="Send" onClick={this.submitHandler} />
        </p>
      </form>
      </div>
    );

  }

});
