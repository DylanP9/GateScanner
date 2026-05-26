import AirportSearchCard from "./AirportSearchCard";

export default function HeroSection() {
  return (
    <section className="relative mx-auto max-w-7xl overflow-hidden px-6 pb-10 pt-8 md:pb-16 md:pt-16">
      <div className="pointer-events-none absolute right-[-120px] top-12 hidden rotate-[-8deg] opacity-20 md:block">
        <svg
          width="620"
          height="360"
          viewBox="0 0 620 360"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M118 236C212 170 352 92 552 54"
            stroke="white"
            strokeWidth="5"
            strokeLinecap="round"
            strokeDasharray="14 18"
          />
          <path
            d="M81 254L541 64C560 56 579 75 570 94L529 181C525 189 517 194 508 193L344 184L255 300C249 308 238 311 229 306L195 287L238 199L99 194C84 193 76 176 85 164L101 143L288 145L379 84L50 92C37 92 30 76 39 66L60 39L478 39C508 39 539 46 566 61L583 71C603 82 609 108 596 126L542 202C530 219 510 229 489 227L341 215L249 335C239 348 220 351 207 342L151 304L190 226L99 229C82 230 70 214 77 198L81 254Z"
            fill="white"
          />
        </svg>
      </div>

      <div className="relative max-w-4xl text-white">
        <p className="mb-4 inline-flex rounded-full bg-sky-400/15 px-4 py-2 text-sm font-bold text-sky-100 ring-1 ring-sky-300/25">
          Live security and passport-control times from real travellers
        </p>

        <h1 className="max-w-3xl text-5xl font-black leading-tight tracking-tight md:text-7xl">
          Know the airport queue before you fly.
        </h1>

        <p className="mt-5 max-w-2xl text-lg leading-8 text-sky-50/85">
          Search an airport once and see the combined departure queue picture
          across security and passport control, with arrivals and baggage
          information available when you need it.
        </p>
      </div>

      <AirportSearchCard />
    </section>
  );
}