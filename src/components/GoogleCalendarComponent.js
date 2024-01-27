import React, { useEffect, useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import googleCalendarPlugin from '@fullcalendar/google-calendar';

const fetchCalendarEvents = async (token, onSuccess, onFailure) => {
  try {
    const response = await fetch(`https://www.googleapis.com/calendar/v3/calendars/8kaldh@gmail.com/events`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    console.log(token);
    const data = await response.json();
    onSuccess(data.items.map(event => ({
      // Map Google Calendar event fields to FullCalendar event fields
      title: event.summary,
      start: event.start.date || event.start.dateTime,
      end: event.end.date || event.end.dateTime,
      // Add other fields as needed
    })));
  } catch (error) {
    onFailure(error);
  }
};

const GoogleCalendarComponent = ({ token }) => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    if (token) {
      fetchCalendarEvents(
        token,
        (fetchedEvents) => {
          setEvents(fetchedEvents);
        },
        (error) => {
          console.error('Error fetching events:', error);
        }
      );
    }
  }, [token]); // Ensure useEffect is triggered when token changes

  return (
    <FullCalendar
      plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, googleCalendarPlugin ]}
      initialView="dayGridMonth"
      headerToolbar={{
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay'
      }}
      events={events} // Use the state variable
    />
  );
};

export default GoogleCalendarComponent;