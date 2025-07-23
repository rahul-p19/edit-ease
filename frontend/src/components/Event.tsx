import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { type EventFormat } from "../types/Event";

function Event() {
  const { id } = useParams();
  const [eventInfo, setEventInfo] = useState<EventFormat>();

  useEffect(()=>{
    const fetchEventData = async () => {
      try {
        const eventFile = await import(`../assets/eventData/${id}.json`);
        setEventInfo(eventFile.default);
      } catch (err) {
        console.error(err);
      }
    }

    if(id) fetchEventData();
  }, [id])

  return (
    <div className="flex flex-col items-center gap-y-3 grow w-full">
      <h2 className="bg-tertiary/40 py-2 px-3 rounded-full text-sm">
        {eventInfo?.category}
      </h2>
      <h1 className="text-4xl font-semibold">{eventInfo?.name}</h1>
      <h2 className="text-lg text-primary">
        Registration Deadline: {eventInfo?.registrationDeadline}
      </h2>
      <div className="flex justify-between w-3/4">
        <p>{eventInfo?.description}</p>
      </div>
      <div className="flex justify-between w-3/5 mt-3">
        <div className="flex flex-col gap-y-1">
          <h4 className="text-xl text-primary text-center">Dates</h4>
          <p>
            <span className="text-primary mr-2">Prelims:</span>
            {eventInfo?.eventDates[0]}
          </p>
          <p>
            <span className="text-primary mr-2">Finals:</span>
            {eventInfo?.eventDates[0]}
          </p>
        </div>
        <div className="flex flex-col justify-between gap-y-1">
          <h4 className="text-xl text-primary text-center">Prizes</h4>
          <p>{eventInfo?.prizes[0]}</p>
          <p>{eventInfo?.prizes[1]}</p>
          <p>{eventInfo?.prizes[2]}</p>
        </div>
      </div>
      <p><span className="text-primary mr-2 text-lg">Team Size:</span>{eventInfo?.teamSize}</p>
      <h3 className="text-primary text-xl mt-2">Event Rules</h3>
      <ul className="flex flex-col items-center gap-y-2 w-3/4">
        {eventInfo?.rules.map((rule,ind)=>
        <li key={ind} className="list-disc">{rule}</li>)}
      </ul>
      <h3 className="text-primary text-xl mt-2">Points of Contact</h3>
      <div className="flex justify-around gap-4 w-3/4">
        {eventInfo?.organisers.map((person,ind)=>
        <div key={ind} className="bg-tertiary/40 rounded-lg py-3 px-8">
          <p className="text-center">{person.name}</p>
          <p className="text-sm">{person.phoneNumber}</p>
        </div>)}
      </div>
    </div>
  );
}

export default Event;
