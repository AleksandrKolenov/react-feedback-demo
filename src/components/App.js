// import React, { Component } from "react";
// import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
// import Statistics from "./Statistics/Statistics";
// import Section from "./Section/Section";
// import Notification from "./Notification/Notification";

// class App extends Component() {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   onIncrement = (e) => {
//     const value = e.target.textContent;
//     this.setState((prevState) => {
//       return {
//         [value]: prevState[value] + 1,
//       };
//     });
//   };

//   // neutralIncrement = () => {
//   //     this.setState((prevState) => {
//   //         return {
//   //         neutral: prevState.neutral+1
//   //     }
//   // })
//   // }

//   // badIncrement = () => {
//   //     this.setState((prevState) => {
//   //         return {
//   //             bad: prevState.bad+1
//   //         }
//   //     })
//   // }

//   countTotalFeedback() {
//     const { good, neutral, bad } = this.state;
//     this.total = good + neutral + bad;
//   }

//   countPositiveFeedbackPercentage() {
//     const { good } = this.state;
//     this.percent = Math.round((good / this.total) * 100) + " %";
//   }

//   render() {
//     this.countTotalFeedback();
//       this.countPositiveFeedbackPercentage();
//       const { good, neutral, bad } = this.state
      
      
//     return (
//       <div className="App">
//         {/* <Feedback
//         good={this.state.good}
//         neutral={this.state.neutral}
//         bad={this.state.bad}
//         /> */}

//         <Section title={"Please live"}>
//           <FeedbackOptions
//             options={this.state}
//             onLeaveFeedback={this.onIncrement}
//           />
//         </Section>

//             <Section title={"Statistic"}>
//                 {this.total ?

//                    ( <Statistics
//             good={good}
//             neutral={neutral}
//             bad={bad}
//             total={this.total}
//             positivePercentage={this.percent}
//                     />)
//                     :
//                     (<Notification message="There is no feedback"/>)
//             }
//              {/* <Notification message="There is no feedback"/>
//           <Statistics
//             good={good}
//             neutral={neutral}
//             bad={bad}
//             total={this.total}
//             positivePercentage={this.percent}
//           /> */}
//         </Section>
//       </div>
//     );
//   }
// }





import React, { Component } from "react";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Statistics from "./Statistics/Statistics";
import Section from "./Section/Section";
import Notification from "./Notification/Notification";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onIncrement = (e) => {
    const value = e.target.textContent;
    this.setState((prevState) => {
      return {
        [value]: prevState[value] + 1,
      };
    });
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    this.total = good + neutral + bad;
  }

  countPositiveFeedbackPercentage() {
    const { good } = this.state;
    this.percents = Math.round((good / this.total) * 100) + " %";
  }

  render() {
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
    const { good, neutral, bad } = this.state;
    return (
      <div className="App">
        <Section title={"Please leave feedback"}>
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.onIncrement}
          />
        </Section>

        <Section title={"Statistics"}>
          {this.total ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.total}
              positivePercentage={this.percents}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
}

export default App;