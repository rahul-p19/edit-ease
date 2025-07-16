export interface Event {
  id: string
  name: string
  description: string
  fullDescription: string
  date: string
  category: string
  image: string
  rules: string[]
  prizes: string[]
  coordinators: {
    name: string
    contact: string
    email: string
  }[]
  lastUpdated: string
  updatedBy: string
}

export const events: Event[] = [
  {
    id: "1",
    name: "TechFest Hackathon",
    description: "48-hour coding marathon with exciting prizes and networking opportunities.",
    fullDescription:
      "Join us for an intensive 48-hour hackathon where teams of developers, designers, and innovators come together to build amazing projects. This is your chance to showcase your skills, learn new technologies, and compete for exciting prizes while networking with industry professionals.",
    date: "March 15-17, 2026",
    category: "Technology",
    image: "/placeholder.svg?height=400&width=600",
    rules: [
      "Teams of 2-4 members allowed",
      "All code must be written during the event",
      "Use of external APIs and libraries is permitted",
      "Projects must be submitted by 6 PM on March 17th",
      "Judging based on innovation, technical implementation, and presentation",
    ],
    prizes: [
      "1st Place: ₹50,000 + Internship opportunities",
      "2nd Place: ₹30,000 + Tech gadgets",
      "3rd Place: ₹20,000 + Certificates",
      "Best UI/UX: ₹10,000",
      "Most Innovative: ₹10,000",
    ],
    coordinators: [
      {
        name: "Arjun Sharma",
        contact: "+91 98765 43210",
        email: "arjun.sharma@college.edu",
      },
      {
        name: "Priya Patel",
        contact: "+91 87654 32109",
        email: "priya.patel@college.edu",
      },
    ],
    lastUpdated: "2024-01-15 10:30 AM",
    updatedBy: "Arjun Sharma",
  },
  {
    id: "2",
    name: "Cultural Night",
    description: "An evening of music, dance, and cultural performances celebrating diversity.",
    fullDescription:
      "Experience the rich cultural heritage of our diverse student community through an enchanting evening of traditional and contemporary performances. From classical dance to modern music, this event celebrates the artistic talents of our students and the cultural diversity that makes our campus special.",
    date: "March 20, 2026",
    category: "Cultural",
    image: "/placeholder.svg?height=400&width=600",
    rules: [
      "Individual and group performances welcome",
      "Performance duration: 5-8 minutes",
      "All cultural forms accepted (dance, music, drama, etc.)",
      "Registration deadline: March 10th",
      "Rehearsal mandatory on March 19th",
    ],
    prizes: [
      "Best Performance: ₹25,000 + Trophy",
      "Best Traditional Act: ₹15,000",
      "Best Contemporary Act: ₹15,000",
      "Audience Choice Award: ₹10,000",
      "Participation certificates for all",
    ],
    coordinators: [
      {
        name: "Kavya Reddy",
        contact: "+91 76543 21098",
        email: "kavya.reddy@college.edu",
      },
      {
        name: "Rohit Kumar",
        contact: "+91 65432 10987",
        email: "rohit.kumar@college.edu",
      },
    ],
    lastUpdated: "2024-01-14 2:15 PM",
    updatedBy: "Kavya Reddy",
  },
  {
    id: "3",
    name: "Sports Championship",
    description: "Inter-college sports competition featuring cricket, football, basketball and more.",
    fullDescription:
      "Get ready for the ultimate sports showdown! Our annual Sports Championship brings together the best athletes from colleges across the region to compete in various sports. Whether you're a participant or a spectator, this event promises thrilling matches, incredible displays of sportsmanship, and unforgettable moments.",
    date: "March 22-25, 2026",
    category: "Sports",
    image: "/placeholder.svg?height=400&width=600",
    rules: [
      "College teams only (minimum 8 players per team)",
      "Valid student ID required for participation",
      "All matches follow official sport regulations",
      "Fair play and sportsmanship mandatory",
      "Medical certificate required for contact sports",
    ],
    prizes: [
      "Overall Championship Trophy + ₹1,00,000",
      "Individual sport winners: ₹25,000 each",
      "Runner-up teams: ₹15,000 each",
      "Best Sportsman Award: ₹10,000",
      "Medals and certificates for all participants",
    ],
    coordinators: [
      {
        name: "Captain Vikram Singh",
        contact: "+91 54321 09876",
        email: "vikram.singh@college.edu",
      },
      {
        name: "Sneha Gupta",
        contact: "+91 43210 98765",
        email: "sneha.gupta@college.edu",
      },
    ],
    lastUpdated: "2024-01-13 4:45 PM",
    updatedBy: "Captain Vikram Singh",
  },
  {
    id: "4",
    name: "Innovation Expo",
    description: "Showcase of student projects, research, and innovative solutions to real-world problems.",
    fullDescription:
      "The Innovation Expo is a platform for students to showcase their groundbreaking projects, research work, and innovative solutions. From engineering marvels to social innovations, this expo highlights the creative problem-solving abilities of our student community and provides networking opportunities with industry experts and potential investors.",
    date: "March 28, 2026",
    category: "Innovation",
    image: "/placeholder.svg?height=400&width=600",
    rules: [
      "Original projects and research only",
      "Detailed project documentation required",
      "Live demonstration mandatory",
      "Team size: 1-5 members",
      "Projects must address real-world problems",
    ],
    prizes: [
      "Best Innovation: ₹75,000 + Incubation support",
      "Best Social Impact: ₹50,000",
      "Best Technical Implementation: ₹40,000",
      "People's Choice Award: ₹25,000",
      "Top 10 projects get mentorship opportunities",
    ],
    coordinators: [
      {
        name: "Dr. Anita Verma",
        contact: "+91 32109 87654",
        email: "anita.verma@college.edu",
      },
      {
        name: "Rajesh Khanna",
        contact: "+91 21098 76543",
        email: "rajesh.khanna@college.edu",
      },
    ],
    lastUpdated: "2024-01-12 11:20 AM",
    updatedBy: "Dr. Anita Verma",
  },
  {
    id: "5",
    name: "Literary Fest",
    description: "Poetry, storytelling, debates, and literary competitions for word enthusiasts.",
    fullDescription:
      "Immerse yourself in the world of words at our Literary Fest! This celebration of language and literature features poetry recitations, storytelling sessions, heated debates, creative writing competitions, and interactions with renowned authors. Whether you're a budding writer or a literature lover, this event offers something for everyone.",
    date: "March 30, 2026",
    category: "Literature",
    image: "/placeholder.svg?height=400&width=600",
    rules: [
      "Original content only (plagiarism will lead to disqualification)",
      "Time limits strictly enforced for each event",
      "Multiple language entries welcome",
      "Registration required for all competitions",
      "Judges' decisions are final",
    ],
    prizes: [
      "Best Poet: ₹20,000 + Publication opportunity",
      "Best Storyteller: ₹15,000 + Workshop invitation",
      "Debate Champions: ₹25,000 (team)",
      "Creative Writing Winner: ₹18,000",
      "Certificates and books for all participants",
    ],
    coordinators: [
      {
        name: "Prof. Meera Joshi",
        contact: "+91 10987 65432",
        email: "meera.joshi@college.edu",
      },
      {
        name: "Aarav Malhotra",
        contact: "+91 09876 54321",
        email: "aarav.malhotra@college.edu",
      },
    ],
    lastUpdated: "2024-01-11 9:00 AM",
    updatedBy: "Prof. Meera Joshi",
  },
  {
    id: "6",
    name: "Food Festival",
    description: "Culinary delights from around the world prepared by student chefs and local vendors.",
    fullDescription:
      "Embark on a gastronomic journey at our Food Festival! Experience flavors from around the world as student chefs and local vendors showcase their culinary skills. From traditional regional cuisines to international delicacies, this festival is a paradise for food lovers. Don't miss the cooking competitions and food photography contests!",
    date: "April 2, 2026",
    category: "Culinary",
    image: "/placeholder.svg?height=400&width=600",
    rules: [
      "Food safety and hygiene standards must be maintained",
      "All vendors need proper permits",
      "Vegetarian and vegan options mandatory",
      "No outside food allowed in competition area",
      "Cooking competition teams: 2-3 members",
    ],
    prizes: [
      "Best Dish Competition: ₹30,000",
      "Most Creative Presentation: ₹20,000",
      "People's Choice Award: ₹15,000",
      "Best Food Photography: ₹10,000",
      "Cooking workshop opportunities for winners",
    ],
    coordinators: [
      {
        name: "Chef Ravi Sharma",
        contact: "+91 98765 43210",
        email: "ravi.sharma@college.edu",
      },
      {
        name: "Pooja Agarwal",
        contact: "+91 87654 32109",
        email: "pooja.agarwal@college.edu",
      },
    ],
    lastUpdated: "2024-01-10 3:30 PM",
    updatedBy: "Chef Ravi Sharma",
  },
]

export function getEventById(id: string): Event | undefined {
  return events.find((event) => event.id === id)
}

export function getAllEvents(): Event[] {
  return events
}
