import { useState } from "react";

import Day from "./Day";
import Details from "./Details";

function Days() {
  const [activeDay, setActiveDay] = useState(0);

  return (
    <>
      <h1>По дням</h1>
      <div className="days">
        <Day
          date="today"
          maxTemp={19}
          minTemp={6}
          tabIndex={0}
          isActive={activeDay === 0}
          callback={() => {
            setActiveDay(0);
          }}
        />
        <Day
          date="tomorrow"
          maxTemp={17}
          minTemp={5}
          tabIndex={-1}
          isActive={activeDay === 1}
          callback={() => {
            setActiveDay(1);
          }}
        />
        <Day
          date="wednesday"
          maxTemp={25}
          minTemp={10}
          tabIndex={-2}
          isActive={activeDay === 2}
          callback={() => {
            setActiveDay(2);
          }}
        />
        <Day
          date="thursday"
          maxTemp={32}
          minTemp={22}
          tabIndex={-3}
          isActive={activeDay === 3}
          callback={() => {
            setActiveDay(3);
          }}
        />
        <Day
          date="friday"
          maxTemp={24}
          minTemp={15}
          tabIndex={-4}
          isActive={activeDay === 4}
          callback={() => {
            setActiveDay(4);
          }}
        />
        <Day
          date="saturday"
          maxTemp={14}
          minTemp={6}
          tabIndex={-5}
          isActive={activeDay === 5}
          callback={() => {
            setActiveDay(5);
          }}
        />
        <Day
          date="sunday"
          maxTemp={18}
          minTemp={7}
          tabIndex={-6}
          isActive={activeDay === 6}
          callback={() => {
            setActiveDay(6);
          }}
        />
      </div>
      <Details />
    </>
  );
}

export default Days;
