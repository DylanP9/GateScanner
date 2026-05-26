export const airportReports = [
  {
    airport: "London Heathrow",
    code: "LHR",
    terminal: "Terminal 5",
    securityMinutes: 18,
    passportMinutes: 12,
    status: "Busy",
    statusClass: "bg-amber-100 text-amber-700",
    updated: "4 min ago",
    reports: 23,
  },
  {
    airport: "Edinburgh Airport",
    code: "EDI",
    terminal: "Main Terminal",
    securityMinutes: 9,
    passportMinutes: 6,
    status: "Clear",
    statusClass: "bg-emerald-100 text-emerald-700",
    updated: "8 min ago",
    reports: 11,
  },
  {
    airport: "Manchester Airport",
    code: "MAN",
    terminal: "Terminal 1",
    securityMinutes: 24,
    passportMinutes: 15,
    status: "Heavy",
    statusClass: "bg-red-100 text-red-700",
    updated: "11 min ago",
    reports: 18,
  },
];

export type AirportReport = (typeof airportReports)[number];