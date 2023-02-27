import { Component } from 'react'
import Section from './Section'
import FeedbackOptions from './FeedbackOptions'
import Statistics from './Statistics'
import Notification from './Notification'
import { Container } from './App.styled'

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  handleGoodFeedback = () => {
    this.setState(prevState => ({
      good: prevState.good + 1
    }))
  }

  handleNeutralFeedback = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1
    }))
  }

  handleBadFeedback = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1
    }))
  }

  countTotalFeedback = () => {
    const {good, neutral, bad} = this.state
    return good + neutral + bad
  }

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state
    const total = this.countTotalFeedback()
    return Math.round(good/total*100) || 0
  }

  render() {
    const { good, neutral, bad } = this.state
    const { handleGoodFeedback, handleNeutralFeedback, handleBadFeedback } = this
    const total = this.countTotalFeedback()
    const positivePercentage = this.countPositiveFeedbackPercentage()
    const isFeedbackGiven = !!good || !!neutral || !!bad

    return (
      <Container>
        <Section title="Please leave your feedback">
          <FeedbackOptions options={["Good", "Neutral", "Bad"]} onLeaveFeedback={[handleGoodFeedback, handleNeutralFeedback, handleBadFeedback]} />
        </Section>
        <Section title="Statistics">
          {isFeedbackGiven ? <Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={positivePercentage} /> : <Notification message="No feedback given"/>}
          </Section>
      </Container>
    );
  }
}

export default App;