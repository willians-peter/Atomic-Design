import PropTypes from 'prop-types';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';

const PlantIcon = ({ size = "md", className = "" }) => {
  const sizeStyles = {
    sm: { fontSize: "2px" },
    md: { fontSize: "4px" },
    lg: { fontSize: "8px" },
  };

  return (
    <LocalFloristIcon
      style={{ ...sizeStyles[size] }}
      className={`icon ${className}`}
    />
  );
};

PlantIcon.propTypes = {
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  className: PropTypes.string,
};

export default PlantIcon;
