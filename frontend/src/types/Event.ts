type EventCategory =
  | "CODING"
  | "CIRCUITS_AND_ROBOTICS"
  | "BUSINESS"
  | "BRAINSTORMING"
  | "GAMING"
  | "MISCELLANEOUS";

type Organiser = {
    name: string;
    phoneNumber: string;
}

type StringObj = {
  value: string;
}

type EventFormat = {
  name: string;
  slug: string;
  description: string;
  rules: string[];
  category: EventCategory;
  prizes: string[];
  registrationDeadline: string;
  teamSize: string;
  eventDates: string[];
  organisers: Organiser[];
}

type EventFormType = {
  name: string;
  slug: string;
  description: string;
  rules: StringObj[];
  category: EventCategory;
  prizes: StringObj[];
  registrationDeadline: string;
  teamSize: string;
  eventDates: StringObj[];
  organisers: Organiser[];
}

export type { EventFormat, EventCategory, EventFormType };
