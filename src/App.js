import './App.css';


function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <form className="Form">
        <div className="FormRow">
          <label htmlFor="firstName">First Name:</label>
          <input type="text" id="firstName" name="firstName" />
        </div>
        <div className="FormRow">
          <label htmlFor="lastName">Last Name:</label>
          <input type="text" id="lastName" name="lastName" />
        </div>
        <div className="FormRow">
          <label>Gender:</label>
          <input type="radio" id="male" name="gender" value="male" />
          <label htmlFor="male">Male</label>
          <input type="radio" id="female" name="gender" value="female" />
          <label htmlFor="female">Female</label>
        </div>
      </form>
    </div>
  );
}

export default App;