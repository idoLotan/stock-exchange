const Icon = ({ Icon, onClick, size }) => {
  console.log(`fas fa-${Icon} ${size}`);
  return <i className={`fas fa-${Icon} ${size}`} onClick={onClick}></i>;
};
export default Icon;
