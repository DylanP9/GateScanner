export type QueueType =
  | "Security"
  | "Passport control"
  | "Immigration"
  | "Baggage"
  | "Customs";

export type AirportStatus = "Clear" | "Busy" | "Heavy";

export type AirportReport = {
  airport: string;
  code: string;
  city: string;
  country: string;
  terminal: string;
  securityMinutes: number;
  passportMinutes: number;
  immigrationMinutes: number;
  baggageMinutes: number;
  customsMinutes: number;
  status: AirportStatus;
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

export type RecentAirportReport = {
  id: number;
  queueType: QueueType;
  terminal: string;
  waitMinutes: number;
  submittedAt: string;
  note: string;
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
    immigrationMinutes: 20,
    baggageMinutes: 16,
    customsMinutes: 8,
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
    immigrationMinutes: 8,
    baggageMinutes: 11,
    customsMinutes: 4,
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
    immigrationMinutes: 19,
    baggageMinutes: 18,
    customsMinutes: 9,
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
    immigrationMinutes: 13,
    baggageMinutes: 15,
    customsMinutes: 7,
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
    immigrationMinutes: 7,
    baggageMinutes: 10,
    customsMinutes: 4,
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
    immigrationMinutes: 14,
    baggageMinutes: 13,
    customsMinutes: 6,
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

export function getAirportByCode(code: string) {
  const normalisedCode = code.trim().toLowerCase();

  return airportReports.find(
    (report) => report.code.toLowerCase() === normalisedCode,
  );
}

export function getRecentAirportReports(
  report: AirportReport,
): RecentAirportReport[] {
  return [
    {
      id: 1,
      queueType: "Security",
      terminal: report.terminal,
      waitMinutes: report.securityMinutes,
      submittedAt: report.updated,
      note: "Security queue moving steadily.",
    },
    {
      id: 2,
      queueType: "Passport control",
      terminal: report.terminal,
      waitMinutes: report.passportMinutes,
      submittedAt: "12 min ago",
      note: "Passport desks open and moving normally.",
    },
    {
      id: 3,
      queueType: "Baggage",
      terminal: report.terminal,
      waitMinutes: report.baggageMinutes,
      submittedAt: "18 min ago",
      note: "Baggage wait based on recent arrival reports.",
    },
  ];
}