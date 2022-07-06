import React, { Component } from 'react';
import Section from './section';
import Statistic from './statistic';
import Feedbackoptions from './feedbackOptions';
import Notification from './notification';

const btn = ['Good', 'Neutral', 'Bad'];

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handlerChangeStateValue = e => {
    let name = e.target.name.toLowerCase();
    console.log(name);
    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
  };

  countTotalFeedback() {
    return Object.values(this.state).reduce((acc, value) => acc + value, 0);
  }

  countPositiveFeedbackPercentage() {
    // if (this.state.good === 0) return 0;
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  }

  render() {
    return (
      <div>
        <Section title="Please leave feedback">
          <Feedbackoptions
            options={btn}
            onLeaveFeedback={this.handlerChangeStateValue}
          ></Feedbackoptions>
        </Section>
        <Section title="Statistic">
          {this.countTotalFeedback() ? (
            <Statistic
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
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
