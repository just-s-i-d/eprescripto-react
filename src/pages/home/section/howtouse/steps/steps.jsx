const Steps = ({element}) => {
    const {title,description}=element
  return (
    <li className="step-heading">
      {title}
      <p className="step-des">
        {description}
      </p>
    </li>
  );
};
export default Steps;
