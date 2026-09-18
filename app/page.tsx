import BookingForm from "@/components/BookingForm";
import EnquiryForm from "@/components/EnquiryForm";

export default function Home() {
  return (
    <>
      <div className="topbar">
        <div className="wrap">
          <div className="brand">
            Harpreet Singh <span>Plumbing &amp; Heating</span>
          </div>
          <div className="right">
            <nav>
              <a href="#services">Services</a>
              <a href="#pricing">Pricing</a>
              <a href="#reviews">Reviews</a>
              <a href="#booking">Book online</a>
              <a href="#faq">FAQ</a>
            </nav>
            <a className="call" href="tel:07857873515">
              Call 07857 873515
            </a>
          </div>
        </div>
      </div>

      <section className="hero">
        <div className="wrap">
          <div className="kicker">Smethwick &amp; Birmingham</div>
          <h1>Burst pipe or boiler down? Get a local plumber out today.</h1>
          <p className="lead">
            General plumbing, emergency callouts, boiler repairs and bathroom fitting — no job too small, no wait
            for a callback.
          </p>
          <div className="cta-row">
            <a className="btn-primary" href="tel:07857873515">
              Call now — 07857 873515
            </a>
            <a className="btn-outline" href="#booking">
              Book online
            </a>
          </div>
        </div>
      </section>

      <section className="section" id="services">
        <div className="wrap">
          <h2>Services</h2>
          <p className="intro">Straightforward plumbing and heating work, done properly the first time.</p>
          <div className="services">
            <div className="service">
              <div className="icon">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.3-3.3a4 4 0 01-5.4 5.4L6.3 20.7a1.4 1.4 0 01-2-2L13.6 9.4a4 4 0 015.4-5.4l-3.3 3.3z" />
                </svg>
              </div>
              <h3>General plumbing</h3>
              <p>Leaks, blockages, taps, pipework and everyday repairs around the home.</p>
            </div>
            <div className="service">
              <div className="icon">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2v4M12 18v4M4.9 4.9l2.8 2.8M16.3 16.3l2.8 2.8M2 12h4M18 12h4M4.9 19.1l2.8-2.8M16.3 7.7l2.8-2.8" />
                  <circle cx="12" cy="12" r="4" />
                </svg>
              </div>
              <h3>Emergency callouts</h3>
              <p>Same-day response for burst pipes, no water and other jobs that can't wait.</p>
            </div>
            <div className="service">
              <div className="icon">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M8 3c-1.5 2-1 3.5 0 5-1.8.9-3 2.8-3 5a5 5 0 0010 0c0-1.6-.6-2.7-1.4-3.8-.9 1-1 2-.6 3a2 2 0 11-3.8-1c.9-1.6 1-3.4-1.2-8.2z" />
                </svg>
              </div>
              <h3>Boiler services</h3>
              <p>Boiler repairs, servicing and installation to keep your heating and hot water running.</p>
            </div>
            <div className="service">
              <div className="icon">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 12h18M4 12V7a2 2 0 012-2h3v2M7 21l-1-4M17 21l1-4M6 12a2 2 0 002 2h8a2 2 0 002-2" />
                </svg>
              </div>
              <h3>Bathroom fitting</h3>
              <p>Full or partial bathroom fits, from a new suite to a full refit.</p>
            </div>
          </div>

          <div className="gallery">
            <div className="photo-slot">
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="6" width="18" height="14" rx="2" />
                <circle cx="12" cy="13" r="3.5" />
                <path d="M9 6l1.2-2h3.6L15 6" />
              </svg>
              <span>[Insert job photo — e.g. boiler install]</span>
            </div>
            <div className="photo-slot">
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="6" width="18" height="14" rx="2" />
                <circle cx="12" cy="13" r="3.5" />
                <path d="M9 6l1.2-2h3.6L15 6" />
              </svg>
              <span>[Insert job photo — e.g. bathroom fit]</span>
            </div>
            <div className="photo-slot">
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="6" width="18" height="14" rx="2" />
                <circle cx="12" cy="13" r="3.5" />
                <path d="M9 6l1.2-2h3.6L15 6" />
              </svg>
              <span>[Insert job photo — e.g. Harpreet at work]</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section why">
        <div className="wrap">
          <h2>Why call Harpreet</h2>
          <p className="intro">Local, straightforward, and easy to reach when it matters.</p>
          <div className="points">
            <div className="point">
              <h3>Based locally</h3>
              <p>Works out of Smethwick, so he's never far from your door.</p>
            </div>
            <div className="point">
              <h3>Fast response</h3>
              <p>Answers the phone and gets to emergency jobs quickly.</p>
            </div>
            <div className="point">
              <h3>Fair, upfront pricing</h3>
              <p>You'll know the cost before any work starts — no surprises.</p>
            </div>
            <div className="point">
              <h3>All-round trade</h3>
              <p>From a dripping tap to a full bathroom refit, one number to call.</p>
            </div>
          </div>
          <p className="certline">
            <strong>Gas Safe registered</strong> — Reg No. [insert Gas Safe registration number here]. Fully
            insured — [insert insurer/policy detail if you want it shown].
          </p>
        </div>
      </section>

      <section className="section" id="pricing">
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

      <section className="section alt" id="reviews">
        <div className="wrap">
          <h2>What customers say</h2>
          <p className="intro">[Swap these placeholders for real reviews once you have a few.]</p>
          <div className="reviews">
            <div className="review">
              <div className="quote-mark">&ldquo;</div>
              <p className="text">[Insert customer review here]</p>
              <p className="author">— [Name], [area]</p>
            </div>
            <div className="review">
              <div className="quote-mark">&ldquo;</div>
              <p className="text">[Insert customer review here]</p>
              <p className="author">— [Name], [area]</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section booking" id="booking">
        <div className="wrap">
          <h2>Book online</h2>
          <p className="intro">Fill in your details and it'll be sent straight to Harpreet to confirm.</p>
          <BookingForm />
        </div>
      </section>

      <section className="section" id="faq">
        <div className="wrap">
          <h2>Common questions</h2>
          <div className="faq">
            <details>
              <summary>How quickly can you get to an emergency?</summary>
              <p>[Insert typical response time, e.g. "Usually within the hour for emergencies in the local area."]</p>
            </details>
            <details>
              <summary>Do you charge a call-out fee?</summary>
              <p>[Insert answer — see pricing above.]</p>
            </details>
            <details>
              <summary>Are you Gas Safe registered and insured?</summary>
              <p>[Insert answer — see certification note above.]</p>
            </details>
            <details>
              <summary>What areas do you cover?</summary>
              <p>Based in Smethwick, covering Birmingham, West Bromwich, Oldbury, Edgbaston and Sandwell. Not sure if you're in range? Just call.</p>
            </details>
            <details>
              <summary>What payment methods do you accept?</summary>
              <p>[Insert accepted payment methods, e.g. cash, bank transfer, card.]</p>
            </details>
          </div>
        </div>
      </section>

      <section className="section area alt">
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
          <p className="note">Not sure if you're in range? Just call — happy to check.</p>
        </div>
      </section>

      <section className="section" id="enquiry">
        <div className="wrap">
          <h2>General enquiry</h2>
          <p className="intro">Not ready to book? Send a quick message and we'll get back to you.</p>
          <EnquiryForm />
        </div>
      </section>

      <section className="contact">
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
        <div className="edit-note">
          Placeholders marked in [brackets] — swap in real details, photos and reviews as they come in.
        </div>
        Harpreet Singh Plumbing &amp; Heating — Smethwick &amp; Birmingham
      </footer>
    </>
  );
}
