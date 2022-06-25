import React, { Component } from "react";



export default class Feedback extends Component {
    static defaultProps = {
     good: 0,
        neutral: 0,
        bad: 0,
        total: 0,
        percent:0,
}


    // goodIncrement = () => {
    //     this.setState((prevState) => {
    //         return {
    //             good: prevState.good+1
    //         }
    //     })
    // }

    // neutralIncrement = () => {
    //     this.setState((prevState) => {
    //         return {
    //         neutral: prevState.neutral+1
    //     }
    // })
    // }
    
    // badIncrement = () => {
    //     this.setState((prevState) => {
    //         return {
    //             bad: prevState.bad+1
    //         }
    //     })
    // }

    // countTotalFeedback () {
    //     const { good, neutral, bad } = this.state
    //     this.total = good + neutral + bad
        
    // }


    // countPositiveFeedbackPercentage() {
    //     const { good }=this.state
    //     this.percent=Math.round((good/this.total)*100)+" %"
    // }

    render() {
        this.countTotalFeedback()
        this.countPositiveFeedbackPercentage()
    return (
        <div>
            <h2>Please live</h2>
            <div>
                <button type="button" onClick={this.goodIncrement}>good</button>
                <button type="button" onClick={this.neutralIncrement}>neutral</button>
                <button type="button" onClick={this.badIncrement}>bad</button>
                <div>
                    <h2>Statistic</h2>
                    <ul>
                        <li><p>good:{this.state.good}</p></li>
                        <li><p>neutral:{this.state.neutral}</p></li>
                        <li><p>bad:{this.state.bad}</p></li>
                        <li><p>total:{this.total}</p></li>
                        <li><p>positivefeedback:{this.percent}</p></li>
                    </ul>
                </div>
            </div>
      </div>
    )
  }
}


