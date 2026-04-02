export const footerlabels: { label: string; herf: string }[] = [
  { label: "Terms", herf: "#" },
  { label: "Privacy", herf: "#" },
  { label: "Support", herf: "#" },
  { label: "Latest News", herf: "#" },
];

export const pricedeta: {
  title: string;
  short: string;
  icon: string;
  background: string;
  price: string;
  mark: string;
  width: number;
  height: number;
  padding: string;
}[] = [
  {
    title: "Active Students",
    short: "BRIDGE",
    icon: "/images/icons/icon-students.svg",
    background: "bg-primary bg-opacity-20",
    price: "12,450",
    mark: "+2,340 (+23.1%)",
    width: 18,
    height: 23,
    padding: "px-4 py-3",
  },
  {
    title: "Mentors",
    short: "BRIDGE",
    icon: "/images/icons/icon-mentors.svg",
    background: "bg-secondary bg-opacity-20",
    price: "1,840",
    mark: "+156 (+9.3%)",
    width: 18,
    height: 23,
    padding: "px-4 py-2",
  },
  {
    title: "Events",
    short: "BRIDGE",
    icon: "/images/icons/icon-events.svg",
    background: "bg-warning bg-opacity-20",
    price: "287",
    mark: "+45 (+18.6%)",
    width: 46,
    height: 46,
    padding: "px-0 py-0",
  },
  {
    title: "Success Rate",
    short: "BRIDGE",
    icon: "/images/icons/icon-success.svg",
    background: "bg-success bg-opacity-20",
    price: "94.2%",
    mark: "+2.1% (+2.3%)",
    width: 18,
    height: 23,
    padding: "px-4 py-3",
  },
  {
    title: "Universities",
    short: "BRIDGE",
    icon: "/images/icons/icon-university.svg",
    background: "bg-light_grey",
    price: "150+",
    mark: "+12 (+8.7%)",
    width: 24,
    height: 24,
    padding: "px-4 py-3",
  },
  {
    title: "Countries",
    short: "BRIDGE",
    icon: "/images/icons/icon-globe.svg",
    background: "bg-light_grey",
    price: "25+",
    mark: "+3 (+13.6%)",
    width: 46,
    height: 46,
    padding: "px-0 py-0",
  },
];

export const portfolioData: { image: string; title: string }[] = [
  {
    image: "/images/portfolio/icon-profile.svg",
    title: "Know what matters this week",
  },
  {
    image: "/images/portfolio/icon-network.svg",
    title: "Avoid irreversible mistakes",
  },
  {
    image: "/images/portfolio/icon-guidance.svg",
    title: "Act before it's too late",
  },
];

export const upgradeData: { title: string }[] = [
  { title: "Priority Mentor Access" },
  { title: "Exclusive Events" },
  { title: "Career Counseling" },
  { title: "Premium Support" },
];

export const perksData: {
  icon: string;
  title: string;
  text: string;
  space: string;
}[] = [
  {
    icon: "/images/perks/icon-support.svg",
    title: "WhatsApp groups",
    text: "Students rely on chat threads to figure out deadlines and decisions.",
    space: "lg:mt-8",
  },
  {
    icon: "/images/perks/icon-community.svg",
    title: "Reddit threads",
    text: "Students crowdsource answers in scattered forums with mixed reliability.",
    space: "lg:mt-14",
  },
  {
    icon: "/images/perks/icon-academy.svg",
    title: "Senior advice",
    text: "Shared documents",
    space: "lg:mt-4",
  },
];

export const timelineData: {
  icon: string;
  title: string;
  text: string;
  position: string;
}[] = [
  {
    icon: "/images/timeline/icon-planning.svg",
    title: "Onboarding",
    text: "Get started with student portal setup and orientation",
    position: "md:top-0 md:left-0",
  },
  {
    icon: "/images/timeline/icon-mentorship.svg",
    title: "Mentorship",
    text: "Connect with mentors for academic and career guidance",
    position: "md:top-0 md:right-0",
  },
  {
    icon: "/images/timeline/icon-prototype.svg",
    title: "Community",
    text: "Join events, meetups, and build your network",
    position: "md:bottom-0 md:left-0",
  },
  {
    icon: "/images/timeline/icon-success.svg",
    title: "Success",
    text: "Achieve your academic and career goals with our support",
    position: "md:bottom-0 md:right-0",
  },
];

export const CryptoData: { name: string; price: number }[] = [
  { name: "Active Students", price: 12450 },
  { name: "Available Mentors", price: 1840 },
  { name: "Monthly Events", price: 287 },
  { name: "Success Rate %", price: 94.2 },
];
