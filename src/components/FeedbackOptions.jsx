import PropTypes from 'prop-types';
import { Button } from './App.styled'

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return <div>
        {options.map(option =>
            <Button type="button" onClick={() => onLeaveFeedback(option)} key={option}>{capitalizeFirstLetter(option)}</Button>
        )}
    </div>
 }

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
}

export default FeedbackOptions

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
