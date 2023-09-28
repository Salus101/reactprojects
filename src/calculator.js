import './App.css';

function Calculator() {
    return (
      <div className="App">
        <h1>Hello World</h1>
        <form className="Form">
          <div className="FormRow">
            <label htmlFor="firstName">Enter First Value:</label>
            <input type="text" id="firstName" name="firstName" />
          </div>
          <div className="FormRow">
            <label htmlFor="lastName">Enter Second Value:</label>
            <input type="text" id="lastName" name="lastName" />
          </div>
          <div className="FormRow">
            <label>Gender:</label>
            <input type="radio" id="male" name="gender" value="male" />
            <label htmlFor="male">Male</label>
            <input type="radio" id="female" name="gender" value="female" />
            <label htmlFor="female">Female</label>
          </div>
          <div className="FormRow">
            <label htmlFor="phone">Phone N.O:</label>
            <input type="text" id="phone" name="phone" />
          </div>
          <div className="FormRow">
            <label htmlFor="email">Email:</label>
            <input type="text" id="email" name="email" />
          </div>
        </form>
      </div>
    );
  }
  
  export default Calculator;