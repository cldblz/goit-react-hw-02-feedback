import PropTypes from 'prop-types';
import { Button } from './App.styled'

const FeedbackOptions = ({options, onLeaveFeedback}) => {
    return <div>
        <Button type="button" onClick={onLeaveFeedback[0]}>{options[0]}</Button>
        <Button type="button" onClick={onLeaveFeedback[1]}>{options[1]}</Button>
        <Button type="button" onClick={onLeaveFeedback[2]}>{options[2]}</Button>
    </div>
 }

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.arrayOf(PropTypes.func).isRequired,
}

export default FeedbackOptions
