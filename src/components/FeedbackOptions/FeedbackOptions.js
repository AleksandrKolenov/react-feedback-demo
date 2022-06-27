import React from "react";



function FeedbackOptions({ options, onLeaveFeedback }) {
    const props = Object.keys(options)
    const component = props.map(el => {
        return (
            <li key={el}>
                <button type="button" onClick={onLeaveFeedback}>
                    {el}
                </button>
            </li>
    )
})
//     static defaultProps = {
//      good: 0,
//         neutral: 0,
//         bad: 0,
//         total: 0,
//         percent:0,
// }


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

    
        // this.countTotalFeedback()
        // this.countPositiveFeedbackPercentage()
    return (
        <div>
            
                    <ul>
                        {component}
                    </ul>
                
            
      </div>
    )
  }

export default FeedbackOptions;

