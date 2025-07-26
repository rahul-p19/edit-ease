import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const EVENTS_URL = `${import.meta.env.VITE_BACKEND_URL}/api/events/getAll`;

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
  
  useEffect(() => {
    if (!auth || auth.role !== "ADMIN") navigate("/login");
    const fetchEvents = async () => {
      const res = await fetch(EVENTS_URL, { credentials: "include" });
      const data = await res.json();
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

  return (
    <div className="grow flex flex-col items-center gap-y-4">
      <h1>Admin</h1>
      {events.map((eventData) => {
        return (
          <div
            key={eventData.id}
            className="flex w-4/5 justify-between px-8 rounded-md bg-tertiary/40 py-3"
          >
            <h3>{eventData.name}</h3>
            <Link to={`/manage/${eventData.slug}`}></Link>
          </div>
        );
      })}
    </div>
  );
}

export default Admin;
