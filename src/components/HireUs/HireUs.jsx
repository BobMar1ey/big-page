import React, { useEffect, useState } from "react";
import "./HireUs.css";

export default function HireUs() {
  const [open, setOpen] = useState(false);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("is-locked", open);
    return () => document.body.classList.remove("is-locked");
  }, [open]);

  const onSubmit = (event) => {
    event.preventDefault();
    setSent(true);
  };

  return (
    <>
      <button type="button" className="hire" onClick={() => setOpen(true)}>
        <span className="hire__need">Need Help?</span>
        <span className="hire__cta">Hire Us</span>
      </button>

      {open && (
        <div className="hire__overlay" onClick={() => setOpen(false)}>
          <div
            className="hire__modal"
            role="dialog"
            aria-labelledby="hire-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button type="button" className="hire__close" onClick={() => setOpen(false)} aria-label="Close">
              ×
            </button>
            <p className="hire__kicker">Need Help?</p>
            <h3 id="hire-title">Let’s get in touch.</h3>
            {sent ? (
              <p className="hire__thanks">Thanks — I’ll get back to you shortly.</p>
            ) : (
              <form onSubmit={onSubmit}>
                <input type="text" name="name" placeholder="Name" required />
                <input type="email" name="email" placeholder="Email" required />
                <textarea name="message" rows="4" placeholder="Message" required />
                <button type="submit">Send Message</button>
              </form>
            )}
            <div className="hire__links">
              <a href="mailto:support@raddito.com">Mail Us</a>
              <a href="#contact" onClick={() => setOpen(false)}>Let’s Talk</a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
