'use client'

import { useState } from 'react'

const book = {
  title: 'The Quiet Between',
  year: '2024',
  genre: 'Literary fiction',
  color: 'sage',
  description: 'A tender, atmospheric novel about the lives we build in the spaces between leaving and staying.',
  detail: 'When Elian returns to the coast after twelve years away, a house full of unsent letters asks him to reconsider the story he thought he had finished.',
}

function Cover({ large = false }: { large?: boolean }) {
  return (
    <div className={`book-cover cover-${book.color} ${large ? 'book-cover-large' : ''}`}>
      <span className="cover-rule" />
      <span className="cover-kicker">RYAN SUMMERS</span>
      <span className="cover-title">{book.title}</span>
      <span className="cover-bottom">{book.genre}</span>
    </div>
  )
}

export default function Page() {
  const [showDetails, setShowDetails] = useState(false)

  return (
    <main>
      <header className="site-header">
        <a href="#top" className="wordmark">Ryan Summers<span className="dot">.</span></a>
        <nav aria-label="Main navigation" className="nav-links">
          <a href="#book">The book</a><a href="#about">About</a><a href="#contact">Contact</a>
        </nav>
        <a href="#contact" className="header-link">Let&apos;s talk <span aria-hidden="true">↗</span></a>
      </header>

      <section id="top" className="hero section-shell">
        <div className="hero-copy">
          <p className="eyebrow">Author &amp; observer · New York / everywhere</p>
          <h1>One story for the<br /><em>in-between.</em></h1>
          <p className="hero-intro">A debut novel about what we inherit, what we carry, and what we choose to let go.</p>
          <a href="#book" className="text-link">Discover the book <span aria-hidden="true">↓</span></a>
        </div>
        <div className="hero-note" aria-label="Author note">
          <span className="note-mark">“</span>
          <p>There is always<br />another way to<br /><em>look at a thing.</em></p>
          <span className="note-signature">— R.S.</span>
        </div>
        <span className="hero-index">01 <span /> 01</span>
      </section>

      <section id="book" className="feature section-shell" aria-labelledby="book-title">
        <div className="section-label"><span>Current book</span><span>01 / 01</span></div>
        <div className="feature-grid">
          <div className="feature-cover"><Cover large /></div>
          <div className="feature-copy">
            <p className="eyebrow">Debut novel · {book.year}</p>
            <h2 id="book-title">The Quiet<br /><em>Between</em></h2>
            <p className="body-copy">{book.description}</p>
            <div className="book-meta"><span>Riverhead Books</span><span>352 pages</span><span>ISBN 978-0-593-72714-8</span></div>
            <button className="outline-button" onClick={() => setShowDetails(true)}>Read about the book <span aria-hidden="true">↗</span></button>
          </div>
        </div>
      </section>

      <section id="about" className="about section-shell">
        <div className="section-label"><span>About Ryan</span><span>02</span></div>
        <div className="about-grid"><h2>Paying attention<br />is a <em>practice.</em></h2><div><p className="about-lede">Ryan Summers is an author interested in the intimacy of ordinary things and the stories we tell ourselves to make sense of change.</p><p className="body-copy">The Quiet Between is Ryan&apos;s first novel. They live in a small apartment with too many plants and a very opinionated cat.</p></div></div>
      </section>

      <section id="contact" className="contact section-shell"><div className="contact-inner"><p className="eyebrow">For readings, conversations &amp; collaborations</p><h2>Say <em>hello.</em></h2><a className="contact-email" href="mailto:hello@ryansummers.com">hello@ryansummers.com <span aria-hidden="true">↗</span></a></div></section>
      <footer className="site-footer section-shell"><span>© 2024 Ryan Summers</span><span>Made with care for the written word</span><a href="#top">Back to top ↑</a></footer>

      {showDetails && <div className="modal-backdrop" role="presentation" onClick={() => setShowDetails(false)}><div className="book-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title" onClick={(event) => event.stopPropagation()}><button className="modal-close" onClick={() => setShowDetails(false)} aria-label="Close book details">×</button><Cover /><div className="modal-content"><p className="eyebrow">{book.genre} · {book.year}</p><h2 id="modal-title">{book.title}</h2><p>{book.detail}</p><a href="#contact" onClick={() => setShowDetails(false)} className="outline-button">Inquire about the book <span aria-hidden="true">↗</span></a></div></div></div>}
    </main>
  )
}
