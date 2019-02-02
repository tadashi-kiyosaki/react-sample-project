import PropTypes from 'prop-types';

const shape = (propShape) => PropTypes.shape(propShape);

const functionTypes = {
  navigate: PropTypes.func,
  goBack: PropTypes.func,
};

const NavigationType = shape({
  navigate: functionTypes.navigate.isRequired,
  goBack: functionTypes.goBack.isRequired,
  
});

export default NavigationType;
