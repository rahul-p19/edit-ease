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

type EventFormat = {
  id: string;
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

export type { EventFormat };
