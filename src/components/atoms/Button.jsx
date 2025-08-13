export default function Button({
  text,
  onClick = () => {},
  variant = "primary",
  size = "md",
  className = "",
}) {
  const variantStyles = {
    primary: { backgroundColor: "blue" },
    secondary: { backgroundColor: "green" },
  };

  return (
    <button
      className={`btn ${className}`}
      style={{ ...variantStyles[variant] }}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
