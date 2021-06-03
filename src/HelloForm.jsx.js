// [1]
const React = require("react");
// [2]
const { Text, Color } = require("scenegraph");

// [3]
class HelloForm extends React.Component {
  // [4]
  constructor(props) {
    super(props);
    this.state = { name: "", date: "03/06/2020"}; // [5]
  

    // [6]
    this.onInputChange = e => {
      this.setState({ name: e.target.value });
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

      const now = new Date();

        let fullDate = now.toString();
        /*------ PRINT -------*/
        console.log("---------------------------------");
        console.log(fullDate);
  
        var myDay = now.getDay();
        console.log(myDay);

      //Array of days.
        var weekday = ['Sunday', 'Monday', 'Tuesday',
            'Wednesday', 'Thursday', 'Friday', 'Saturday'
        ];

        /*------ PRINT -------*/
        console.log("Today is : " + weekday[myDay]);

      // newDate.text = this.state.date;

      // // [10]
      // newDate.styleRanges = [
      //   {
      //     length: newDate.text.length,
      //     fill: new Color("#00F"),
      //     fontSize: 50
      //   }
      // ];
      //   var myDate = new Date();
      //   var myDay = myDate.getDay();
        
      //   // Array of days.
      //   var weekday = ['Sunday', 'Monday', 'Tuesday',
      //       'Wednesday', 'Thursday', 'Friday', 'Saturday'
      //   ];
      //   document.write("Today is : " + weekday[myDay]);
      //   document.write("<br/>");

      


      // [11]
      selection.insertionParent.addChild(newText);
      // selection.insertionParent.addChild(newDate);

      // [12]
      newText.moveInParentCoordinates(100, 100);
      //newDate.moveInParentCoordinates(110, 110);
      // [13]
      props.dialog.close();
    };
  }

  // [14]
  render() {

    return (
      <form style={{ width: 300 }} onSubmit={this.onDoneClick}>
        <h1>Welcome to the first PROSOMO INC plugin.</h1>
        <label>
          <span>What is your name?</span>
          <input onChange={this.onInputChange} />
        </label>
        <p>{`Hello ${this.state.name}`}</p>
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
