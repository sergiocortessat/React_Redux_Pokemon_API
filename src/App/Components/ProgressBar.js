import PropTypes from 'prop-types';

const ProgressBar = (props) => {
  const { bgcolor, completed } = props;

  const containerStyles = {
    height: 20,
    width: '100%',
    backgroundColor: '#e0e0de',
    borderRadius: 50,
    margin: 10,
  };

  const fillerStyles = {
    height: '100%',
    width: `${(completed) / 2}%`,
    backgroundColor: bgcolor,
    borderRadius: 'inherit',
    textAlign: 'right',
    transition: 'width 1s ease-in-out',

  };

  const labelStyles = {
    padding: 5,
    color: 'black',
    fontWeight: 'bold',
  };

  return (
    <div style={containerStyles}>
      <div style={fillerStyles}>
        <span style={labelStyles}>{`${completed}`}</span>
      </div>
    </div>
  );
};
ProgressBar.defaultProps = {
  bgcolor: '#e0e0de',
  completed: 0,
};

ProgressBar.propTypes = {
  bgcolor: PropTypes.string,
  completed: PropTypes.number,
};

export default ProgressBar;
