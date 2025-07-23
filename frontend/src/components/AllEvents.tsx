import { Link } from "react-router-dom";
import allEvents from "../assets/eventData/allEvents.json";

function AllEvents() {
  return (
    <div className="flex flex-col items-center grow gap-y-8">
      <h1 className="text-4xl font-semibold">Events</h1>
      <div className="grid sm:grid-cols-2 gap-6 px-12">
        {allEvents.map((event) => (
          <Link to={event.slug} key={event.id} className="bg-tertiary/40 rounded-lg py-3 px-6 flex flex-col items-center gap-y-2">
            <p className="text-xs bg-secondary/40 py-2 px-3 rounded-full">
              {event.category}
            </p>
            <h2 className="text-xl text-ink/60">{event.name}</h2>
            <p className="text-sm">{event.description.slice(0,100)}..</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default AllEvents;
