import Image from "next/image";
import BookingForm from "@/components/BookingForm";
import EnquiryForm from "@/components/EnquiryForm";
import PhotoStrip from "@/components/PhotoStrip";

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
  {
    src: "/gallery/kitchen-tap-install.jpg",
    alt: "Chrome three-way filtered kitchen tap installed above a sink",
    title: "Kitchen tap install",
    caption: "Three-way filtered tap fitted and plumbed in above the kitchen sink.",
    tall: true,
  },
];

export default function Home() {
  return (
    <>
      <div className="topbar">
        <div className="wrap">
          <div className="brand">
            Reehal <span>Plumbing &amp; Heating</span>
          </div>
          <nav>
            <div className="nav-dropdown">
              <a href="#services">Services ▾</a>
              <div className="dropdown-menu">
                <a href="#service-general-plumbing">General plumbing</a>
                <a href="#service-emergency-callouts">Emergency callouts</a>
                <a href="#service-boiler-services">Boiler &amp; gas appliances</a>
                <a href="#service-bathroom-fitting">Bathroom &amp; kitchen fitting</a>
                <a href="#service-leak-detection">Leak detection</a>
                <a href="#service-heating-systems">Heating systems</a>
              </div>
            </div>
            <a href="#our-work">Our work</a>
            <a href="#reviews">Reviews</a>
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
              Reehal Plumbing &amp; Heating — plumbing repairs, boiler and gas appliance care, leak detection
              and bathroom fitting across Smethwick and surrounding areas. 24/7 call-outs.
            </p>
            <div className="cta-row">
              <a className="btn-primary" href="tel:07857873515">
                Call Harpreet
              </a>
              <a className="btn-outline" href="#enquiry">
                Request a quote
              </a>
              <a
                className="whatsapp-link"
                href="https://wa.me/447857873515"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" stroke="none">
                  <path d="M17.5 14.4c-.3-.1-1.6-.8-1.9-.9-.3-.1-.4-.1-.6.1-.2.3-.7.9-.8 1-.1.2-.3.2-.6.1-.3-.1-1.2-.4-2.2-1.4-.8-.7-1.4-1.6-1.5-1.9-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.1.2-.3.2-.4.1-.2 0-.3 0-.5-.1-.1-.6-1.5-.8-2-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.1s1 2.5 1.1 2.6c.1.2 2 3 4.8 4.2.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.6-.7 1.9-1.3.2-.6.2-1.1.2-1.2-.1-.2-.3-.2-.6-.4z" />
                  <path d="M12 2C6.5 2 2 6.5 2 12c0 1.9.5 3.6 1.4 5.2L2 22l4.9-1.3c1.5.8 3.2 1.3 5.1 1.3 5.5 0 10-4.5 10-10S17.5 2 12 2zm0 18.2c-1.7 0-3.3-.5-4.6-1.3l-.3-.2-3.1.8.8-3-.2-.3C3.9 14.8 3.4 13.4 3.4 12c0-4.7 3.9-8.6 8.6-8.6s8.6 3.9 8.6 8.6-3.9 8.6-8.6 8.6z" />
                </svg>
                WhatsApp
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
            <span><strong>Gas Safe registered</strong> — Reg No. 658223</span>
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
          <div className="trust-divider" />
          <div className="trust-item">
            <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="9" />
              <path d="M12 7v5l3.5 2" />
            </svg>
            <span><strong>24/7</strong> call-outs</span>
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
                <h3>Boiler &amp; gas appliances</h3>
                <p>Boiler installs, repairs and servicing, plus gas cookers, fires and water heaters.</p>
                <a className="service-link" href="#booking">Book this job →</a>
              </div>
              <div className="service" id="service-bathroom-fitting">
                <div className="icon">
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 12h18M4 12V7a2 2 0 012-2h3v2M7 21l-1-4M17 21l1-4M6 12a2 2 0 002 2h8a2 2 0 002-2" />
                  </svg>
                </div>
                <h3>Bathroom &amp; kitchen fitting</h3>
                <p>Full or partial bathroom refits, plus kitchen, garden and specialist tap installs.</p>
                <a className="service-link" href="#enquiry">Request a quote →</a>
              </div>
              <div className="service" id="service-leak-detection">
                <div className="icon">
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 3s6 6.5 6 10.5a6 6 0 01-12 0C6 9.5 12 3 12 3z" />
                    <path d="M9.5 14a2.5 2.5 0 002.5 2.5" />
                  </svg>
                </div>
                <h3>Leak detection</h3>
                <p>Thermal imaging to trace hidden leaks in walls, floors and ceilings before repair.</p>
                <a className="service-link" href="#enquiry">Request a quote →</a>
              </div>
              <div className="service" id="service-heating-systems">
                <div className="icon">
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="4" y="4" width="16" height="16" rx="2" />
                    <path d="M8 8h.01M12 8h4M8 12h8M8 16h4" />
                  </svg>
                </div>
                <h3>Heating systems</h3>
                <p>Underfloor heating, heating system extensions and smart thermostat installation.</p>
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
                  Harpreet runs Reehal Plumbing &amp; Heating, a Gas Safe registered plumbing and heating
                  business based in Smethwick. He handles jobs himself, from a dripping tap to a full boiler
                  swap, so you always know who&apos;s turning up and who to call afterwards if you need
                  anything. He answers the phone directly, keeps pricing upfront before any work starts, and
                  offers 24/7 call-outs for jobs that can&apos;t wait.
                </p>
              </div>
            </div>
                  </div>
      </section>

      <section className="section" id="our-work">
        <div className="wrap">
                      <h2>Recent work</h2>
            <p className="intro">A few recent jobs, from full boiler swaps to hot water system upgrades.</p>
                                <PhotoStrip items={recentWork} />
                  </div>
      </section>

      <section className="section" id="reviews">
        <div className="wrap">
                      <h2>What customers say</h2>
            <p className="intro">Genuine reviews from Google.</p>
                                <div className="review-summary">
              <span className="review-stars" aria-hidden="true">★★★★★</span>
              <span><strong>5.0</strong> from 4 Google reviews</span>
            </div>
            <div className="reviews">
              <div className="review-card">
                <div className="review-head">
                  <span className="review-name">Arjan Marway</span>
                  <span className="review-stars" aria-hidden="true">★★★★★</span>
                </div>
                <p className="review-date">Google review · a year ago</p>
                <p>
                  &quot;I&apos;ve known Harps for a while now, and honestly, I can&apos;t recommend him enough.
                  He&apos;s helped me and my family so much over the years. Harps is a brilliant plumber who
                  always takes his time to get things done properly — no rushing, just…&quot;
                </p>
              </div>
              <div className="review-card">
                <div className="review-head">
                  <span className="review-name">Paul Biernat</span>
                  <span className="review-stars" aria-hidden="true">★★★★★</span>
                </div>
                <p className="review-date">Google review · 8 months ago</p>
                <p>
                  &quot;Absolutely fantastic service! Very polite, highly skilled and extremely punctual. I have
                  called him twice now. Once for the boiler repair and once for the leaking pipes in the
                  ceiling and on both occasions the work was completed to an…&quot;
                </p>
              </div>
              <div className="review-card">
                <div className="review-head">
                  <span className="review-name">Sumit Parghi</span>
                  <span className="review-stars" aria-hidden="true">★★★★★</span>
                </div>
                <p className="review-date">Google review · 3 months ago</p>
              </div>
              <div className="review-card">
                <div className="review-head">
                  <span className="review-name">Noor Khan</span>
                  <span className="review-stars" aria-hidden="true">★★★★★</span>
                </div>
                <p className="review-date">Google review · a day ago</p>
                <p>
                  &quot;Harpreet was brilliant from start to finish. He gave me clear, honest advice about
                  what my heating actually needed. When I had a burst pipe, he came out for the emergency
                  call out really quickly and sorted it properly on the spot. Reliable, trustworthy and
                  very hardworking. Would recommend him to anyone. Very friendly guy too, did both the
                  boiler and heating. 10/10&quot;
                </p>
              </div>
            </div>
            <a
              className="service-link"
              href="https://share.google/gNRe8IgofKzk6sG9o"
              target="_blank"
              rel="noopener noreferrer"
            >
              View all reviews on Google →
            </a>
                  </div>
      </section>

      <section className="section alt" id="pricing">
        <div className="wrap">
                      <h2>Pricing</h2>
            <p className="intro">Straightforward, no-surprise pricing.</p>
                                <div className="pricing-points">
              <div className="pricing-point">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
                <p>Free, no-obligation quotes on every job</p>
              </div>
              <div className="pricing-point">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
                <p>Prices confirmed upfront before any work starts — no surprises</p>
              </div>
            </div>
            <a className="btn-primary" href="#enquiry">Request a Quote</a>
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
                <p>Harpreet offers 24/7 call-outs across Smethwick and Birmingham — call or WhatsApp anytime, day or night.</p>
              </details>
              <details>
                <summary>Do you charge a call-out fee?</summary>
                <p>Every quote is free and with no obligation — you'll know the full price before any work starts.</p>
              </details>
              <details>
                <summary>Are you Gas Safe registered and insured?</summary>
                <p>
                  Yes — Gas Safe registered (Reg No. 658223) for boilers, gas cookers, gas fires, gas pipework,
                  meters and water heaters, and fully insured.
                </p>
              </details>
              <details>
                <summary>What areas do you cover?</summary>
                <p>Based in Smethwick, covering Birmingham, West Bromwich, Oldbury, Edgbaston and Sandwell. Not sure if you&apos;re in range? Just call.</p>
              </details>
              <details>
                <summary>What payment methods do you accept?</summary>
                <p>Cash and bank transfer.</p>
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
            <p>24/7 call-outs — call or WhatsApp anytime, day or night.</p>
          </div>
          <div className="contact-actions">
            <a className="phone-link" href="tel:07857873515">
              07857 873515
            </a>
            <a
              className="phone-link whatsapp"
              href="https://wa.me/447857873515"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      <footer className="bottom">
        <div className="wrap">
          <span>Reehal Plumbing &amp; Heating — Smethwick &amp; Birmingham</span>
          <span className="footer-links">
            <a href="tel:07857873515">07857 873515</a>
            <a href="mailto:Reehal.Engineer@Hotmail.com">Reehal.Engineer@Hotmail.com</a>
            <a href="https://share.google/gNRe8IgofKzk6sG9o" target="_blank" rel="noopener noreferrer">
              Find us on Google
            </a>
          </span>
        </div>
      </footer>
    </>
  );
}
