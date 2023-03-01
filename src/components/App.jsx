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

  handleFeedback = option => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1
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
    const { handleFeedback } = this
    const total = this.countTotalFeedback()
    const positivePercentage = this.countPositiveFeedbackPercentage()
    const isFeedbackGiven = !!good || !!neutral || !!bad

    return (
      <Container>
        <Section title="Please leave your feedback">
          <FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={handleFeedback} />
        </Section>
        <Section title="Statistics">
          {isFeedbackGiven ? <Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={positivePercentage} /> : <Notification message="No feedback given"/>}
          </Section>
      </Container>
    );
  }
}

export default App;