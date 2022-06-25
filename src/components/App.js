import React, {Component} from "react";
import Feedback from "./FeedbackOptions/Feedback";

class App extends Component() {
  state = {
        good: 0,
        neutral: 0,
        bad:0,
  }
  
   goodIncrement = () => {
        this.setState((prevState) => {
            return {
                good: prevState.good+1
            }
        })
    }

    neutralIncrement = () => {
        this.setState((prevState) => {
            return {
            neutral: prevState.neutral+1
        }
    })
    }
    
    badIncrement = () => {
        this.setState((prevState) => {
            return {
                bad: prevState.bad+1
            }
        })
    }

    countTotalFeedback () {
        const { good, neutral, bad } = this.state
        this.total = good + neutral + bad
        
    }


    countPositiveFeedbackPercentage() {
        const { good }=this.state
        this.percent=Math.round((good/this.total)*100)+" %"
    }

  render() {
    return (
    <div className="App">
      {/* <Feedback
        good={this.state.good}
        neutral={this.state.neutral}
        bad={this.state.bad}
        /> */}

        <Section title="Please live">
 <FeedbackOptions
          options={this.state }
          onLeaveFeedback={this.goodIncrement }/>

        </Section>

        <Section title="Statistic">
          <Statistics
          good={ }
          neutral={ }
          bad={ }
          total={ }
          positivePercentage={ }/>
        </Section>
        
        

    </div>
    )
 }
  
}

export default App;
