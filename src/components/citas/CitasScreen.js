import moment from "moment";
import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import { messages } from "../../helpers/calendar-messages-es";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "moment/locale/es";
import { CalendarEvent } from "./CalendarEvent";
import { NewCita } from "./NewCita";

moment.locale("es");
const localizer = momentLocalizer(moment); // or globalizeLocalizer

export const CitasScreen = () => {
  
    const [lastView, setLastView] = useState(
        localStorage.getItem("lastView") || "month"
      );

      const onViewChange = (e) => {
        setLastView(e);
        localStorage.setItem("lastView", e);
      };

    const eventStyleGetter = (event, start, end, isSelected) => {
        const style = {
          backgroundColor: "#867cf7",
          borderRadius: "0px",
          opacity: 0.8,
          display: "block",
          color: "white",
        };
        return {
          style,
        };
      };
  return (
    <div className="container pt-2">
      <div className="card">
        <div className="card-body">
          <NewCita />

          <Calendar
            min={new Date(2020, 1, 0, 8, 0, 0)} 
            max={new Date(2020, 1, 0, 17, 0, 0)}
            format={"DD/MM/YYYY HH:mm"}
            localizer={localizer}
            // events={events}
            startAccessor="start"
            endAccessor="end"
            
            messages={messages}
            eventPropGetter={eventStyleGetter}
            // onDoubleClickEvent={onDoubleClick}
            // onSelectEvent={onSelectEvent}
            onView={onViewChange}
            // onSelectSlot={onSelectSlot}
            selectable={true}
            view={lastView}
            components={{
              event: CalendarEvent,
            }}
          />
        </div>
      </div>
    </div>
  );
};
