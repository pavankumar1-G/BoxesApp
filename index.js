const Box = (props) => {
  //  Write your code here.
  const { boxColors, boxText } = props;

  return (
    <div className={boxColors}>
      <p className="box-text">{boxText}</p>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div className="bg-container">
    <h1 className="heading">Boxes</h1>
    <div className="box-container">
      <Box boxColors="box-small" boxText="Small" />
      <Box boxColors="box-medium" boxText="Medium" />
      <Box boxColors="box-large" boxText="Large" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
