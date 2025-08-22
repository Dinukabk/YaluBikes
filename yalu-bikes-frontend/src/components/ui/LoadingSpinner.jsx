const LoadingSpinner = ({ size = 'medium', text = 'Loading...' }) => {
  const sizeClass = `spinner-${size}`;

  return (
    <div className="loading-spinner">
      <div className={`spinner ${sizeClass}`}></div>
      {text && <p className="loading-text">{text}</p>}
    </div>
  );
};

export default LoadingSpinner;