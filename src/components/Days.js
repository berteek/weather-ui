import { useState } from "react";

import Day from "./Day";

function Days() {
  const [activeDay, setActiveDay] = useState(0);

  return (
    <>
      <p className="days-title">По дням</p>
      <div className="days">
        <Day
          name="Сегодня"
          condition="Солнечно"
          maxTemp={19}
          minTemp={6}
          tabIndex={0}
          isActive={activeDay === 0}
          callback={() => {
            setActiveDay(0);
          }}
        />
        <Day
          name="Завтра"
          maxTemp={17}
          minTemp={5}
          tabIndex={-1}
          isActive={activeDay === 1}
          callback={() => {
            setActiveDay(1);
          }}
        />
        <Day
          name="wednesday"
          maxTemp={25}
          minTemp={10}
          tabIndex={-2}
          isActive={activeDay === 2}
          callback={() => {
            setActiveDay(2);
          }}
        />
        <Day
          name="thursday"
          maxTemp={32}
          minTemp={22}
          tabIndex={-3}
          isActive={activeDay === 3}
          callback={() => {
            setActiveDay(3);
          }}
        />
        <Day
          name="friday"
          maxTemp={24}
          minTemp={15}
          tabIndex={-4}
          isActive={activeDay === 4}
          callback={() => {
            setActiveDay(4);
          }}
        />
        <Day
          name="saturday"
          maxTemp={14}
          minTemp={6}
          tabIndex={-5}
          isActive={activeDay === 5}
          callback={() => {
            setActiveDay(5);
          }}
        />
        <Day
          name="sunday"
          maxTemp={18}
          minTemp={7}
          tabIndex={-6}
          isActive={activeDay === 6}
          callback={() => {
            setActiveDay(6);
          }}
        />
      </div>
    </>
  );
}

export default Days;
