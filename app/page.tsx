import Image from "next/image";
import BookingForm from "@/components/BookingForm";
import EnquiryForm from "@/components/EnquiryForm";

const recentWork = [
  {
    src: "/gallery/gledhill-thermal-store.jpg",
    alt: "Recently installed Gledhill open vented thermal store",
    title: "Open vented thermal store",
    caption: "New Gledhill thermal store installed to replace an ageing hot water system.",
  },
  {
    src: "/gallery/worcester-combi-cheltenham.jpg",
    alt: "Worcester combi boiler installed in a period property",
    title: "Combi boiler in a period property",
    caption: "Worcester combi boiler swap, carefully routed around original exposed beams.",
  },
  {
    src: "/gallery/baxi-eco-compact-cupboard.jpg",
    alt: "Baxi Eco Compact combi boiler installed in a kitchen cupboard",
    title: "Boiler integrated into a kitchen cupboard",
    caption: "Baxi Eco Compact fitted neatly into existing kitchen cabinetry.",
  },
];

export default function Home() {
  return (
    <>
      <div className="topbar">
        <div className="wrap">
          <div className="brand">
            Harpreet Singh <span>Plumbing &amp; Heating</span>
          </div>
          <nav>
            <div className="nav-dropdown">
              <a href="#services">Services ▾</a>
              <div className="dropdown-menu">
                <a href="#service-general-plumbing">General plumbing</a>
                <a href="#service-emergency-callouts">Emergency callouts</a>
                <a href="#service-boiler-services">Boiler services</a>
                <a href="#service-bathroom-fitting">Bathroom fitting</a>
              </div>
            </div>
            <a href="#our-work">Our work</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>
          <a className="header-call" href="tel:07857873515">
            <svg viewBox="0 0 24 24" fill="currentColor" stroke="none">
              <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.6.1.4 0 .8-.3 1L6.6 10.8z" />
            </svg>
            Call Harpreet
          </a>
        </div>
      </div>

      <a className="call-fixed" href="tel:07857873515">
        <svg viewBox="0 0 24 24" fill="currentColor" stroke="none">
          <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.6.1.4 0 .8-.3 1L6.6 10.8z" />
        </svg>
        Call Harpreet — 07857 873515
      </a>

      <section className="hero-split">
        <div className="wrap hero-grid">
          <div className="hero-text">
            <div className="kicker">Smethwick &amp; Birmingham</div>
            <h1>Your local plumber in Smethwick.</h1>
            <p className="lead">
              Plumbing repairs, boiler care and bathroom fitting across Smethwick and surrounding areas.
            </p>
            <div className="cta-row">
              <a className="btn-primary" href="tel:07857873515">
                Call Harpreet
              </a>
              <a className="btn-outline" href="#enquiry">
                Request a quote
              </a>
            </div>
          </div>
          <div className="hero-photo">
            <Image
              src="/gallery/boiler-swap-after.jpg"
              alt="A recently completed Baxi combi boiler installation"
              fill
              priority
              sizes="(max-width: 860px) 90vw, 45vw"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </section>

      <div className="trust-strip">
        <div className="wrap">
          <div className="trust-item">
            <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2l8 4v6c0 4.9-3.4 8.4-8 10-4.6-1.6-8-5.1-8-10V6l8-4z" />
            </svg>
            <span><strong>Gas Safe registered</strong> — Reg No. [insert here]</span>
          </div>
          <div className="trust-divider" />
          <div className="trust-item">
            <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 21c-4-3-7-6.5-7-11a7 7 0 0114 0c0 4.5-3 8-7 11z" />
              <circle cx="12" cy="10" r="2.5" />
            </svg>
            <span>Serving <strong>Smethwick &amp; Birmingham</strong></span>
          </div>
          <div className="trust-divider" />
          <div className="trust-item">
            <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2v4M12 18v4M4.9 4.9l2.8 2.8M16.3 16.3l2.8 2.8M2 12h4M18 12h4M4.9 19.1l2.8-2.8M16.3 7.7l2.8-2.8" />
              <circle cx="12" cy="12" r="4" />
            </svg>
            <span>Fully insured</span>
          </div>
        </div>
      </div>

      <section className="section" id="services">
        <div className="wrap">
                      <h2>Services</h2>
            <p className="intro">Straightforward plumbing and heating work, done properly the first time.</p>
                                <div className="services">
              <div className="service" id="service-general-plumbing">
                <div className="icon">
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.3-3.3a4 4 0 01-5.4 5.4L6.3 20.7a1.4 1.4 0 01-2-2L13.6 9.4a4 4 0 015.4-5.4l-3.3 3.3z" />
                  </svg>
                </div>
                <h3>General plumbing</h3>
                <p>Leaks, blockages, taps, pipework and everyday repairs around the home.</p>
                <a className="service-link" href="#booking">Book this job →</a>
              </div>
              <div className="service" id="service-emergency-callouts">
                <div className="icon">
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2v4M12 18v4M4.9 4.9l2.8 2.8M16.3 16.3l2.8 2.8M2 12h4M18 12h4M4.9 19.1l2.8-2.8M16.3 7.7l2.8-2.8" />
                    <circle cx="12" cy="12" r="4" />
                  </svg>
                </div>
                <h3>Emergency callouts</h3>
                <p>Same-day response for burst pipes, no water and other jobs that can&apos;t wait.</p>
                <a className="service-link" href="tel:07857873515">Call now →</a>
              </div>
              <div className="service" id="service-boiler-services">
                <div className="icon">
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M8 3c-1.5 2-1 3.5 0 5-1.8.9-3 2.8-3 5a5 5 0 0010 0c0-1.6-.6-2.7-1.4-3.8-.9 1-1 2-.6 3a2 2 0 11-3.8-1c.9-1.6 1-3.4-1.2-8.2z" />
                  </svg>
                </div>
                <h3>Boiler services</h3>
                <p>Boiler repairs, servicing and installation to keep your heating and hot water running.</p>
                <a className="service-link" href="#booking">Book this job →</a>
              </div>
              <div className="service" id="service-bathroom-fitting">
                <div className="icon">
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 12h18M4 12V7a2 2 0 012-2h3v2M7 21l-1-4M17 21l1-4M6 12a2 2 0 002 2h8a2 2 0 002-2" />
                  </svg>
                </div>
                <h3>Bathroom fitting</h3>
                <p>Full or partial bathroom fits, from a new suite to a full refit.</p>
                <a className="service-link" href="#enquiry">Request a quote →</a>
              </div>
            </div>
                  </div>
      </section>

      <section className="section alt" id="about">
        <div className="wrap">
                      <h2>Meet Harpreet</h2>
            <p className="intro">Local, straightforward, and easy to reach when it matters.</p>
                                <div className="meet">
              <div className="meet-avatar">HS</div>
              <div className="meet-body">
                <h3>Harpreet Singh</h3>
                <p>
                  Harpreet is a Gas Safe registered plumber based in Smethwick. He handles jobs himself, from a
                  dripping tap to a full boiler swap, so you always know who&apos;s turning up and who to call
                  afterwards if you need anything. He answers the phone directly, keeps pricing upfront before
                  any work starts, and gets to emergency jobs quickly wherever possible.
                </p>
              </div>
            </div>
                  </div>
      </section>

      <section className="section" id="our-work">
        <div className="wrap">
                      <h2>Recent work</h2>
            <p className="intro">A few recent jobs, from full boiler swaps to hot water system upgrades.</p>
                                <div className="recent-work">
              {recentWork.map((job) => (
                <div className="work-card" key={job.src}>
                  <div className="work-photo">
                    <Image
                      src={job.src}
                      alt={job.alt}
                      fill
                      loading="eager"
                      sizes="(max-width: 860px) 50vw, 33vw"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div className="work-caption">
                    <h3>{job.title}</h3>
                    <p>{job.caption}</p>
                  </div>
                </div>
              ))}
            </div>
                  </div>
      </section>

      <section className="section alt" id="pricing">
        <div className="wrap">
                      <h2>Pricing</h2>
            <p className="intro">Clear costs before any work starts.</p>
                                <div className="pricing">
              <div className="price-card">
                <h3>Standard call-out</h3>
                <div className="amount">[insert £]</div>
                <p className="note">[insert what this covers, e.g. first 30 mins]</p>
              </div>
              <div className="price-card">
                <h3>Emergency call-out</h3>
                <div className="amount">[insert £]</div>
                <p className="note">[insert response time / hours this applies]</p>
              </div>
              <div className="price-card">
                <h3>Hourly rate</h3>
                <div className="amount">[insert £]</div>
                <p className="note">[insert any minimum charge]</p>
              </div>
            </div>
            <p className="pricing-caveat">
              Bathroom fits and larger jobs are quoted individually after a quick look at the work.
            </p>
                  </div>
      </section>

      <section className="section area" id="areas">
        <div className="wrap">
                      <h2>Areas covered</h2>
            <p className="intro">Based in Smethwick, covering the surrounding areas.</p>
            <div className="list">
              <span>Smethwick</span>
              <span>Birmingham</span>
              <span>West Bromwich</span>
              <span>Oldbury</span>
              <span>Edgbaston</span>
              <span>Sandwell</span>
            </div>
            <p className="note">Not sure if you&apos;re in range? Just call — happy to check.</p>
                  </div>
      </section>

      <section className="section alt" id="faq">
        <div className="wrap">
                      <h2>Common questions</h2>
                                <div className="faq">
              <details>
                <summary>How quickly can you get to an emergency?</summary>
                <p>[Insert typical response time, e.g. &quot;Usually within the hour for emergencies in the local area.&quot;]</p>
              </details>
              <details>
                <summary>Do you charge a call-out fee?</summary>
                <p>[Insert answer — see pricing above.]</p>
              </details>
              <details>
                <summary>Are you Gas Safe registered and insured?</summary>
                <p>[Insert answer — see trust strip above.]</p>
              </details>
              <details>
                <summary>What areas do you cover?</summary>
                <p>Based in Smethwick, covering Birmingham, West Bromwich, Oldbury, Edgbaston and Sandwell. Not sure if you&apos;re in range? Just call.</p>
              </details>
              <details>
                <summary>What payment methods do you accept?</summary>
                <p>[Insert accepted payment methods, e.g. cash, bank transfer, card.]</p>
              </details>
            </div>
                  </div>
      </section>

      <section className="section" id="booking">
        <div className="wrap">
                      <h2>Book online</h2>
            <p className="intro">Fill in your details and it&apos;ll be sent straight to Harpreet to confirm.</p>
                                <BookingForm />
                  </div>
      </section>

      <section className="section alt" id="enquiry">
        <div className="wrap">
                      <h2>Request a quote</h2>
            <p className="intro">Not ready to book a slot? Tell us about the job and we&apos;ll get back to you.</p>
                                <EnquiryForm />
                  </div>
      </section>

      <section className="contact" id="contact">
        <div className="wrap grid">
          <div>
            <h2>Got a plumbing job?</h2>
            <p>Call or text anytime — usually gets back within the hour.</p>
          </div>
          <a className="phone-link" href="tel:07857873515">
            07857 873515
          </a>
        </div>
      </section>

      <footer className="bottom">
        <div className="wrap">
          <span>Harpreet Singh Plumbing &amp; Heating — Smethwick &amp; Birmingham</span>
          <span>
            <a href="tel:07857873515">07857 873515</a>
          </span>
        </div>
        <div className="wrap footer-note">
          Placeholders marked in [brackets] — swap in real details, pricing and reviews as they come in.
        </div>
      </footer>
    </>
  );
}
