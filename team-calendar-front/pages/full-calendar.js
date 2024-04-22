import Pageheader from "@/shared/layout-components/page-header/pageheader";
import Seo from "@/shared/layout-components/seo/seo";
import React, {Fragment, useEffect, useState} from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import {createAction, getAllActions} from "@/shared/services/actionApis";
import {createActionType,} from "@/shared/services/actionTypeApis";
import {useAuth} from "@/shared/context/AuthContext";

const Fullcalendar = () => {
  let eventGuid = 0;
  const todayStr = new Date().toISOString().replace(/T.*$/, ""); // YYYY-MM-DD of today
  const INITIAL_EVENTS = [
    {
      id: createEventId(),
      title: "Meeting",
      start: todayStr,
    },
    {
      id: createEventId(),
      title: "Meeting Time",
      start: todayStr + "T16:00:00",
    },
    {
      id: createEventId(),
      title: "Meeting Time",
      start: todayStr + "T18:00:00",
    },
  ];

  function createEventId() {
    return String(eventGuid++);
  }

  const { user } = useAuth();

  const [actions, setActions] = useState([]); // State to store the fetched actions

  useEffect(() => {
    getAllActions().then(
      (response) => {
        setActions(response.data);
      },
      (error) => {
        console.error("Error fetching data:", error);
      }
    );
  }, []);

  // Format the actions into the format that FullCalendar expects for events
  const events = actions.map((action) => ({
    id: action.id,
    title: action.type.name + " - " + action.user.name,
    start: action.date,
  }));

  const addAction = (e) => {
    e.preventDefault();

    const title = e.target.elements.title.value;
    const date = e.target.elements.date.value;

    createAction({ title, date }).then(
      (response) => {
        const newEvent = {
          id: response.data.id,
          title: response.data.name,
          start: response.data.date,
        };

        // Add the new event to the FullCalendar component
        const calendarApi = selectInfo.view.calendar;
        calendarApi.addEvent(newEvent);
      },
      (error) => {
        console.error("Error creating action:", error);
      }
    );
  };

  function renderEventContent(eventInfo) {
    return (
      <>
        <b>{eventInfo.timeText}</b>
        <i>{eventInfo.event.title}</i>
      </>
    );
  }
  const handleEventClick = (clickInfo) => {
    if (
      window.confirm(
        `Are you sure you want to delete the event '${clickInfo.event.title}'`
      )
    ) {
      clickInfo.event.remove();
    }
  };
  const handleEvents = () => {};

  const handleDateSelect = (selectInfo) => {
    const title = prompt("Please enter a new title for your event");
    const calendarApi = selectInfo.view.calendar;

    calendarApi.unselect();

    if (title) {
      createActionType({
        name: title,
      }).then((response) => {
        createAction({
          id_user: user?.id,
          id_type: response?.data?.id,
          date: selectInfo.startStr,
        }).then((response) => {
          const newEvent = {
            id: response.data.id,
            title: title + " - " + user?.name,
            start: selectInfo.startStr,
          };
          console.log(newEvent);

          // Add the new event to the FullCalendar component
          const calendarApi = selectInfo.view.calendar;
          calendarApi.addEvent(newEvent);
        });
      });
    }
  };

  return (
    <Fragment>
      <Seo title={"Full Calendar"} />
      <Pageheader
        currentpage="Calendar"
        activepage="Dashboard"
        mainpage="Calendar"
      />
      <div className="grid grid-cols-12 gap-6">
        <div className="xl:col-span-12 col-span-12">
          <div className="box custom-box">
            <div className="box-header">
              <div className="box-title">Full Calendar</div>
            </div>
            <div className="box-body">
              <div id="calendar2">
                <FullCalendar
                  plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                  headerToolbar={{
                    left: "prev,next today",
                    center: "title",
                    right: "dayGridMonth,timeGridWeek,timeGridDay",
                  }}
                  initialView="dayGridMonth"
                  editable={true}
                  selectable={true}
                  selectMirror={true}
                  dayMaxEvents={true}
                  events={events}
                  // initialEvents={INITIAL_EVENTS}
                  select={handleDateSelect}
                  eventContent={renderEventContent}
                  eventClick={handleEventClick}
                  eventsSet={handleEvents}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
Fullcalendar.layout = "Contentlayout";

export default Fullcalendar;
