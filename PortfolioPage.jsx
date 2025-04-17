import React from "react";

export default function PortfolioPage() {
  return (
    <main style={{ backgroundColor: 'black', color: 'white', fontFamily: 'sans-serif', minHeight: '100vh', padding: '2rem' }}>
      <section style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 'bold' }}>Muhammad Mujtaba</h1>
        <p style={{ fontSize: '1.5rem', maxWidth: '800px', margin: '1rem auto' }}>
          I help businesses turn words into money. Whether it's landing pages, email sequences, or product descriptions — I make sure your message sells.
        </p>
      </section>
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem' }}>What I Do</h2>
        <ul style={{ fontSize: '1.2rem', lineHeight: '2rem' }}>
          <li>✓ Website Copy</li>
          <li>✓ Landing Pages</li>
          <li>✓ Email Marketing Copy</li>
          <li>✓ Product Descriptions</li>
          <li>✓ Social Media Ad Copy</li>
          <li>✓ Sales Page Copy</li>
        </ul>
      </section>
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem' }}>Portfolio Samples</h2>
        <ul style={{ fontSize: '1.2rem' }}>
          <li><a href="https://docs.google.com/document/d/19hbmoOyw7DEJ8EK4z03ooTrRQd6Iv5nD4YN037xS_rc/edit" target="_blank" rel="noopener noreferrer">Sample 1</a></li>
          <li><a href="https://docs.google.com/document/d/1U8hVIHyl0TN7swjEGkHxLhITC_mxkMiPsqdCIJ712SY/edit" target="_blank" rel="noopener noreferrer">Sample 2</a></li>
          <li><a href="https://docs.google.com/document/d/1t5XnvkLbEiPQKvFxQCFYOQ7Q_3Wtj9bG1hqnY6IHDIY/edit" target="_blank" rel="noopener noreferrer">Sample 3</a></li>
        </ul>
      </section>
      <section>
        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem' }}>Let's Connect</h2>
        <p style={{ fontSize: '1.2rem' }}>Email me at: <a href="mailto:mujtaba2625@gmail.com" style={{ color: 'lightblue' }}>mujtaba2625@gmail.com</a></p>
      </section>
    </main>
  );
}