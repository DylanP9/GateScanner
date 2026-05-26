export type QueueType =
  | "Security"
  | "Passport control"
  | "Immigration"
  | "Baggage"
  | "Customs";

export type AirportReport = {
  airport: string;
  code: string;
  city: string;
  country: string;
  terminal: string;
  securityMinutes: number;
  passportMinutes: number;
  status: "Clear" | "Busy" | "Heavy";
  statusClass: string;
  updated: string;
  reports: number;
};

export type QueueSubmission = {
  id: number;
  airport: string;
  terminal: string;
  queueType: QueueType;
  waitMinutes: number;
  note: string;
  submittedAt: string;
};

export const airportReports: AirportReport[] = [
  {
    airport: "London Heathrow",
    code: "LHR",
    city: "London",
    country: "United Kingdom",
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
    city: "Edinburgh",
    country: "United Kingdom",
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
    city: "Manchester",
    country: "United Kingdom",
    terminal: "Terminal 1",
    securityMinutes: 24,
    passportMinutes: 15,
    status: "Heavy",
    statusClass: "bg-red-100 text-red-700",
    updated: "11 min ago",
    reports: 18,
  },
  {
    airport: "London Gatwick",
    code: "LGW",
    city: "London",
    country: "United Kingdom",
    terminal: "South Terminal",
    securityMinutes: 14,
    passportMinutes: 10,
    status: "Busy",
    statusClass: "bg-amber-100 text-amber-700",
    updated: "13 min ago",
    reports: 15,
  },
  {
    airport: "Glasgow Airport",
    code: "GLA",
    city: "Glasgow",
    country: "United Kingdom",
    terminal: "Main Terminal",
    securityMinutes: 7,
    passportMinutes: 5,
    status: "Clear",
    statusClass: "bg-emerald-100 text-emerald-700",
    updated: "16 min ago",
    reports: 9,
  },
  {
    airport: "Birmingham Airport",
    code: "BHX",
    city: "Birmingham",
    country: "United Kingdom",
    terminal: "Main Terminal",
    securityMinutes: 16,
    passportMinutes: 11,
    status: "Busy",
    statusClass: "bg-amber-100 text-amber-700",
    updated: "20 min ago",
    reports: 14,
  },
];

export const queueTypes: QueueType[] = [
  "Security",
  "Passport control",
  "Immigration",
  "Baggage",
  "Customs",
];

export function getCombinedDepartureMinutes(report: AirportReport) {
  return report.securityMinutes + report.passportMinutes;
}

export function matchesAirportSearch(report: AirportReport, searchTerm: string) {
  const normalisedSearch = searchTerm.trim().toLowerCase();

  if (normalisedSearch.length === 0) {
    return true;
  }

  const searchableText = [
    report.airport,
    report.code,
    report.city,
    report.country,
    report.terminal,
  ]
    .join(" ")
    .toLowerCase();

  return searchableText.includes(normalisedSearch);
}