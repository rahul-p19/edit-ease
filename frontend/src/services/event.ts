import type { EventFormType } from "../types/Event";
import { formToEvent } from "./formValidation";

export const handleUpdateEvent = (
  data: EventFormType,
  setMessage: (message: string) => void,
  token: string | undefined,
  logout: undefined | (() => void)
) => {
  if (!token) {
    if (logout) logout();
    setMessage("Please login again.");
  }

  const eventData = formToEvent(data);
  console.log(JSON.stringify(eventData));
  const UPDATE_URL = `${import.meta.env.VITE_BACKEND_URL}/api/events/${
    data.slug
  }`;
  let updatedEvent;

  fetch(UPDATE_URL, {
    method: "PUT",
    body: JSON.stringify(eventData),
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    },
  })
    .then((res) => {
        setMessage(res.ok ? "Event Updated Successfully." : "Error in submitting.");
      return res.json();
    })
    .then((res) => {
      updatedEvent = res;
    })
    .catch((err) => {
      console.error(err);
      setMessage("Error in submitting.");
    });

    return updatedEvent;
};

export const getEventBySlug = async (
  slug: string,
  token: string | undefined
) => {
  if (!token) return null;

  const EVENT_URL = `${import.meta.env.VITE_BACKEND_URL}/api/events/${slug}`;
  const res = await fetch(EVENT_URL, {
    headers: {
      "Content-type": "application/json",
      "Authorization": `Bearer ${token}`,
    },
  });
  console.log(res);
  const data = await res.json();

  return data;
};
