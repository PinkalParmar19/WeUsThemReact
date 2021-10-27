import React from "react";

class AddContact extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
  };

  //Add funbction..
  add = (e) => {
    e.preventDefault();
    if (
      this.state.firstName === "" ||
      this.state.lastName === "" ||
      this.state.email === "" ||
      this.state.phoneNumber === ""
    ) {
      alert("Please fill all the fileds!");
      return;
    }
    this.props.validateEmail(this.state.email);
    this.props.addContactHandler(this.state);
    this.setState({ firstName: "", lastName: "", email: "", phoneNumber: "" });
  };
  render() {
    return (
      <div className="ui main">
        <h2>Add Contact</h2>
        <form className="ui form" onSubmit={this.add}>
          <div className="field">
            <label>First Name</label>
            <input
              type="text"
              name="Fname"
              placeholder="First Name"
              value={this.state.firstName}
              onChange={(e) => this.setState({ firstName: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Last Name</label>
            <input
              type="text"
              name="Lname"
              placeholder="Last Name"
              value={this.state.lastName}
              onChange={(e) => this.setState({ lastName: e.target.value })}
            />
          </div>
          <div className="field">
            <label>E-mail</label>
            <input
              type="text"
              name="email"
              placeholder="E-mail"
              value={this.state.email}
              onChange={(e) => {
                this.setState({ email: e.target.value });
                //validateEmail(e);
              }}
            />
          </div>
          <div className="field">
            <label>Phone Number</label>
            <input
              type="number"
              name="phoneNumber"
              placeholder="Phone Number"
              value={this.state.phoneNumber}
              onChange={(e) => this.setState({ phoneNumber: e.target.value })}
            />
          </div>
          <button className="ui button grey">Add</button>
        </form>
      </div>
    );
  }
}

export default AddContact;
