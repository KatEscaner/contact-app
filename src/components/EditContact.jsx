import React from "react";
import { useLocation } from "react-router-dom";


function withMyHook(Component) {
  return function WrappedComponent(props) {
    const myHookValue = useLocation().state;
    return <Component {...props} myHookValue={myHookValue} />;
  }
}

class EditContact extends React.Component {

  

     
  constructor(props) {
    super(props);
    const { id, name, email } = this.props.myHookValue;
    this.state = {
      id,
      name,
      email,
    };
  }

  update = (e) => {
    e.preventDefault();
    if(this.state.name === "" && this.state.email === ""){
        alert("All the fields are required");
        return;
    }
    this.props.updateContactHandler(this.state);
    this.setState({name:"", email:""});
    // this.props.history.push("/");
}

    

  render() {
    return (
      <div className="ui main">
        <br></br>
        <h2>Edit Contact</h2>
        <form className="ui form" onSubmit={this.update}>
          <div className="field">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </div>

          <div className="field">
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
            />
          </div>

          <button className="ui button blue">Edit</button>
        </form>
      </div>
    );
  }
}



export default withMyHook(EditContact);