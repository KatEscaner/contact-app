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
      <div className="p-4 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700 m-auto">
        <h2 className="text-xl m-5 font-medium text-gray-900 dark:text-white">Edit Contact</h2>
        <form className="space-y-6" onSubmit={this.update}>
          <div className="field">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your Name</label>
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              name="name"
              placeholder="Name"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </div>

          <div className="field">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your Name</label>
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              type="text"
              name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
            />
          </div>

          <button className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Edit</button>
        </form>
      </div>
    );
  }
}



export default withMyHook(EditContact);