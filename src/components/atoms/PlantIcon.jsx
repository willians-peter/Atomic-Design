import PropTypes from 'prop-types';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';

const PlantIcon = ({ size = "md", className = "" }) => {
  const sizeStyles = {
    sm: { fontSize: "16px" },
    md: { fontSize: "32px" },
    lg: { fontSize: "64px" },
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
