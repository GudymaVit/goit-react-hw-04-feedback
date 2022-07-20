import { useState } from 'react';
import Section from './section';
import Statistic from './statistic';
import Feedbackoptions from './feedbackOptions';
import Notification from './notification';
import styles from '../components/feedbackOptions/feedbackOptions.module.css';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handlerChangeStateValue = e => {
    let name = e.target.name.toLowerCase();

    switch (name) {
      case 'good':
        setGood(state => state + 1);
        break;
      case 'neutral':
        setNeutral(state => state + 1);
        break;
      case 'bad':
        setBad(state => state + 1);
        break;
      default:
        return;
    }
  };

  const totalFeedback = good + neutral + bad;
  const countPositiveFeedbackPercentage = Math.round(
    (good / totalFeedback) * 100
  );

  return (
    <div className={styles.container}>
      <Section title="Please leave feedback">
        <Feedbackoptions
          options={Object.keys({ good, neutral, bad })}
          onLeaveFeedback={handlerChangeStateValue}
        />
      </Section>
      <Section title="Statistic">
        {totalFeedback ? (
          <Statistic
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback}
            positivePercentage={countPositiveFeedbackPercentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
};

export default App;
