import  icon  from '@mui/material';
export default function PlantIcon({

  export default function PlantIcon({
  text,
  icon = () => {},
  size = "sm" | "md" | "lg";
    }) {

  const sizeStyles = {
    sm: { padding: "2px" },
    md: { padding: "4px" },
    lg: { padding: "8px" },
  };

  return (
    <icon
      className={`icon ${className}`}
      style={{ ...sizeStyles[size] }}
      
    >
      {icon}
    </icon>
  );
}
