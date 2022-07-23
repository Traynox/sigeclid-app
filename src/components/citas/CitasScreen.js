import moment from "moment";
import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import { messages } from "../../helpers/calendar-messages-es";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-datepicker/dist/react-datepicker.css";
// import "../../styles/components/citas/citas-style.css";
import { CalendarEvent } from "./CalendarEvent";
import { NewCita } from "./NewCita";
import { eventClearActiveEvent, eventSetActive, setEvents } from "../../actions/events";
import { useDispatch, useSelector } from "react-redux";
// import { Modal } from "../ui/Modal";
import { CalendarModal } from "./CalendarModal";
import { useUiStore } from "../../hooks/useUiStore";

import { getCitas } from "../../helpers/api";
import { setCitas } from "../../actions/citas";
import { useEffect } from "react";
import { useCalendarStore } from "../../hooks/useCalendarStore";
import { Reloj } from "./Reloj";
import { DeleteEventFab } from "./DeleteEventFab";
import { SearchBar } from "./SearchPaciente";







const localizer = momentLocalizer(moment); 
// or globalizeLocalizer

export const CitasScreen = () => {

  

    // const {events , activeEvent} = useSelector( state => state.calendar );
    const {events, setActiveEvent, startLoadingEvents} = useCalendarStore();

    // const {data:citas,current_page,per_page,total} = useSelector((state) => state.allCitas.citas);

    const {openCitaModal} =useUiStore()


  const dispatch = useDispatch();


  // useEffect(() => {
  //   // Aquí debe venir de la api
  //   getCitas(`citas/tenant/1`)
  //               .then(citas => {
  //                 dispatch(setCitas(citas))
  //               }).catch(error => {
  //                 console.log(error)
  //               })
               
  // } ,[]);

  // useEffect(() => {
  //   // Aquí debe venir de la api
  //   try {
  //     getCitas(`citas/tenant/1`)
  //               .then(citas => {
  //                 dispatch(setEvents(citas))
  //               }).catch(error => {
  //                 console.log(error)
  //               })
      
  //   } catch (error) {
  //     console.log("Error al cargar");
  //     console.log(error);
  //   }
    
               
  // } ,[]);

  useEffect(() => {
    startLoadingEvents()
  }, [])
  
  
    const [lastView, setLastView] = useState(
        localStorage.getItem("lastView") || "month"
      );

  const onViewChange = (e) => {
    setLastView(e);
    localStorage.setItem("lastView", e);
  };

  const onSelectSlot = (e) => {
    // console.log(e);
    console.log("Fecha de la base de datos:", events[1].end);
    dispatch(eventClearActiveEvent());
  }

  const onDoubleClick = (e) => {
    // dispatch(uiOpenModal());
    // console.log("Doble clic");
    openCitaModal()
  };

  const onSelectEvent = (e) => {
    setActiveEvent(e);
    // console.log('un click');

  };
  const eventStyleGetter = (event, start, end, isSelected) => {
    // console.log({event, start, end, isSelected});
    const style = {
      backgroundColor: "#867cf7",
      borderRadius: "0px",
      opacity: 0.8,
      display: "block", 
      color: "white",
    }
    return {
      style,
    }
  }
// console.log(moment().toDate());


  return (
    <>
    

    <div className="container pt-2">
      <div className="card">
        <div className="card-body">

          <div className="row">
            <div className="col-5">
              <NewCita />
            </div>
            <div className="col-7">
            
            <Reloj />

            </div>
            
          </div>
        
          <Calendar
            min={new Date(2020, 1, 0, 8, 0, 0)} 
            max={new Date(2020, 1, 0, 17, 0, 0)}
            format={"DD/MM/YYYY HH:mm"}
            localizer={localizer}
            events={events}
            components={{
              event: CalendarEvent,
            }}
            startAccessor="start"
            endAccessor="end"
            
            messages={messages}
            eventPropGetter={eventStyleGetter}
            onDoubleClickEvent={onDoubleClick}
            onSelectEvent={onSelectEvent}
            onView={onViewChange}
            onSelectSlot={onSelectSlot}
            selectable={true}
            view={lastView}
            style={{height: 500}}
            
          />
          <DeleteEventFab />

          {/* {
            (activeEvent) && <DeleteEventFab />
          } */}



        </div>
      </div>
    </div>
      <CalendarModal />
      {/* <Modal tipo="Agregar" nombre="empleado" /> */}

    </>
  );
};
