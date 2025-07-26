import type { EventFormat, EventFormType } from "../types/Event";

const eventCategories = ["CODING", "CIRCUITS_AND_ROBOTICS", "BUSINESS", "BRAINSTORMING", "GAMING","MISCELLANEOUS"];

function validateCategory(str: string): boolean | string {
  if (eventCategories.includes(str)) return true;

  return "Invalid Event Category";
}

function transformCategory(str: string){
  return str.toUpperCase();
}

function formToEvent(formData: EventFormType):EventFormat{
  const data:EventFormat = {
      name: formData.name,
      slug: formData.slug,
      description: formData.description,
      rules: [],
      category: formData.category,
      prizes: [],
      registrationDeadline: formData.registrationDeadline,
      teamSize: formData.teamSize,
      eventDates: [],
      organisers: formData.organisers
  };
  data.rules = formData.rules.map(rule=>rule.value);
  data.prizes = formData.prizes.map(prize =>prize.value);
  data.eventDates = formData.eventDates.map(eventDate=>eventDate.value);
  return data;
}

function eventToForm(eventData: EventFormat):EventFormType{
  const data:EventFormType = {
      name: eventData.name,
      slug: eventData.slug,
      description: eventData.description,
      rules: [],
      category: eventData.category,
      prizes: [],
      registrationDeadline: eventData.registrationDeadline,
      teamSize: eventData.teamSize,
      eventDates: [],
      organisers: eventData.organisers
  };
  data.rules = eventData.rules.map(rule=>({value:rule}));
  data.prizes = eventData.prizes.map(prize =>({value:prize}));
  data.eventDates = eventData.eventDates.map(eventDate=>({value: eventDate}));
  return data;
}

export { validateCategory, transformCategory, formToEvent, eventToForm };