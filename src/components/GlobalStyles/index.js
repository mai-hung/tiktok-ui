import PropTypes from 'prop-types';
import './GlobalStyles.scss';
import 'tippy.js/animations/scale.css';
function GlobalStyles({ children }) {
    return children;
}

GlobalStyles.propTypes = {
    children: PropTypes.node.isRequired,
};
export default GlobalStyles;
