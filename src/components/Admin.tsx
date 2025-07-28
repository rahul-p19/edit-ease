import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const EVENTS_URL = `${import.meta.env.VITE_BACKEND_URL}/api/admin/getAllEvents`;

type EventType = {
  id: number;
  name: string;
  slug: string;
};

function Admin() {
  const auth = useAuth();
  const navigate = useNavigate();

  const [events, setEvents] = useState<EventType[]>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const [newEvent, setNewEvent] = useState<string>("");

  useEffect(() => {
    if (!auth || auth.role !== "ADMIN") navigate("/login");
    const fetchEvents = async () => {
      if (!auth?.token) setError(true);
      const res = await fetch(EVENTS_URL, {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${auth?.token}`,
        },
      });

      const data = await res.json();
      console.log(data);
      setEvents(data);
    };

    fetchEvents()
      .then(() => setLoading(false))
      .catch((err) => {
        console.error(err);
        setError(true);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error || !events) return <div>Error occurred.</div>;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    window.location.href = `/manage/${newEvent}`;
  };

  return (
    <div className="grow flex flex-col items-center w-4/5 gap-y-8">
      <h1 className="text-4xl font-semibold">Admin</h1>
      <form className="flex gap-x-4 w-4/5" onSubmit={(e) => handleSubmit(e)}>
        <p>Add New Event: </p>
        <input
          type="text"
          className="outline-none border-b border-primary w-2/5"
          onChange={(e) => setNewEvent(e.target.value)}
        />
        <button
          type="submit"
          className="bg-ink text-background py-1 px-2 rounded-sm text-sm"
        >
          Add
        </button>
      </form>
      {events.map((eventData) => {
        return (
          <div
            key={eventData.slug}
            className="flex w-4/5 justify-between px-8 rounded-md bg-tertiary/40 py-3"
          >
            <h3>{eventData.name}</h3>
            <Link
              to={`/manage/${eventData.slug}`}
              className="border-b border-b-ink"
            >
              {eventData.slug}
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default Admin;
