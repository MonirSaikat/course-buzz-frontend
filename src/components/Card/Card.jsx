import './card.css';

export const Card = ({
  className,
  children,
  ...rest
}) => {
  return (<div className={`card ${className}`} {...rest}>
    {children}
  </div>);
};
