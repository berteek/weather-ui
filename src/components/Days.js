import Day from "./Day";

function Days() {
  return (
    <>
      <Day date="today" maxTemp={19} minTemp={6} />
      <Day />
      <Day />
      <Day />
      <Day />
      <Day />
      <Day />
    </>
  );
}

export default Days;
