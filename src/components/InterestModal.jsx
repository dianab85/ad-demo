import React, { useState } from 'react';

export default function InterestModal({ open, onClose }) {
  const [submitted, setSubmitted] = useState(false);

  if (!open) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <dialog
        open
        aria-modal="true"
        aria-labelledby="dialog-title"
        onKeyDown={(e) => {
          if (e.key === 'Escape') onClose();
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="close"
          autoFocus
          onClick={onClose}
          aria-label="Close"
        >
          ×
        </button>
        <p className="eyebrow">THE NEXT CHAPTER</p>
        <h2 id="dialog-title">
          {submitted ? 'You’re on the list.' : 'Stay ahead of the curve.'}
        </h2>
        {submitted ? (
          <p>
            Your interest has been saved in this browser. This is a concept
            demo; no email was sent.
          </p>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              localStorage.setItem('aera-interest', 'true');
              setSubmitted(true);
            }}
          >
            <p>
              Get a first look at the AERA GT. Demo sign-up is stored locally on
              this device.
            </p>
            <label htmlFor="email">Email address</label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              required
            />
            <button className="primary" type="submit">
              Keep me in the loop ↗
            </button>
          </form>
        )}
      </dialog>
    </div>
  );
}
