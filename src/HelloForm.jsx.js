  // [1]
const React = require("react");
  // [2]
const { Text, Color } = require("scenegraph");
  // [3]
class HelloForm extends React.Component {
  // [4]
  constructor(props) {
    super(props);
    this.state = { name: ""}; // [5]
      // [6]
    this.onInputChange = e => {
      this.setState({ name: e.target.value});
    };

      // [7]
    this.onDoneClick = e => {
      // [8]
      const selection = this.props.selection;
      // [9]
      const newText = new Text();
      newText.text = this.state.name;
      
      // [10]
      newText.styleRanges = [
        {
          length: newText.text.length,
          fill: new Color("#00F"),
          fontSize: 70
        }
      ];
      // [11]
      selection.insertionParent.addChild(newText);
      // [12]
      newText.moveInParentCoordinates(110, 110);
      // [13]
      props.dialog.close();
    };
  }

  // [14]
  render() {

      const now = new Date();
       let fullDate = now.toString();

        console.log("---------------------------------");
        console.log(fullDate);
        
        // Array of days.
        var weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        // Array of months.
        var months = [
        'January','February','March','April', 'May','June','July','August', 'September','October','November','December'  ];

        var dayText = weekday[now.getDay()];
        var month = months[now.getMonth()];
        var year = now.getUTCFullYear();

    return (
      <form style={{ width: 300 }} onSubmit={this.onDoneClick}>
        <h1>Welcome to the first</h1>
        <h1>PROSOMO INC plugin.</h1>
        <label>
          <span>What is your name?</span>
          <input onChange={this.onInputChange} required/>
        </label>
        <p>{`Hello ${this.state.name} `}</p>
        {/* <p>{`Full date: ${fullDate} `}</p> */}
        <p>{`Today is: ${dayText}, ${now.getDay()} ${month} ${year}`}</p>
        
        <footer>
          <button type="submit" uxp-variant="cta">
            Done
          </button>
        </footer>
      </form>
    );
  }
}

module.exports = HelloForm;
