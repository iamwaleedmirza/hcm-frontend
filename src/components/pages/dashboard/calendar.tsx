import { useState } from "react";
import { Calendar } from "primereact/calendar";

import "primereact/resources/themes/lara-light-cyan/theme.css";

export default function InlineDemo() {
  const [date, setDate] = useState(null);

  return (
    <div className="w-fit mx-auto">
      <Calendar
        value={date}
        onChange={(e: any) => setDate(e.value)}
        selectionMode="range"
        inline
      />
    </div>
  );
}
