import PropTypes from 'prop-types';
import styles from './feedbackOptions.module.css';

const Feedbackoptions = ({ options, onLeaveFeedback }) =>
  options.map(name => (
    <button type="button" key={name} name={name} onClick={onLeaveFeedback}>
      {name}
    </button>
  ));

Feedbackoptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
export default Feedbackoptions;
