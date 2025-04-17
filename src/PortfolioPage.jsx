
import React from "react";
import { Button } from "@/components/ui/button";

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-black text-white font-sans">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-24 px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Muhammad Mujtaba
        </h1>
        <p className="text-xl md:text-2xl mb-6 max-w-2xl">
          I write words that make people click, buy, and believe.
        </p>
        <div className="space-x-4">
          <a href="#contact">
            <Button className="text-lg px-6 py-3">Let’s Work Together</Button>
          </a>
          <a href="#portfolio">
            <Button variant="outline" className="text-lg px-6 py-3 border-white text-white hover:bg-white hover:text-black">
              View My Work
            </Button>
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-gray-900 py-20 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">About Me</h2>
        <p className="max-w-3xl mx-auto text-lg md:text-xl">
          You need someone who gets attention — and keeps it.<br />
          I'm Muhammad, a copywriter with a sharp eye for what sells. From email sequences to landing pages, I craft words that move people to act. I'm not here to just write — I'm here to help your business grow. Let's build something that hits.
        </p>
      </section>

      {/* Services Section */}
      <section className="bg-black py-20 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-8">Services</h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          <div className="bg-gray-800 p-6 rounded-2xl shadow-md">
            <h3 className="text-xl font-bold mb-2">Email Copywriting</h3>
            <p>Cold emails, welcome sequences, product launches</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-2xl shadow-md">
            <h3 className="text-xl font-bold mb-2">Landing Page Copy</h3>
            <p>High-converting landing pages for products, services, offers</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-2xl shadow-md">
            <h3 className="text-xl font-bold mb-2">Ad Copy</h3>
            <p>Short-form, scroll-stopping copy for social media ads</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-2xl shadow-md">
            <h3 className="text-xl font-bold mb-2">Website Copy</h3>
            <p>Engaging homepages, about pages, service pages</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-2xl shadow-md md:col-span-2">
            <h3 className="text-xl font-bold mb-2">Sales Copy & Brand Voice</h3>
            <p>Powerful CTAs, headlines, and defining your brand's tone</p>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="bg-gray-900 py-20 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-8">Portfolio</h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <a
            href="https://docs.google.com/document/d/19hbmoOyw7DEJ8EK4z03ooTrRQd6Iv5nD4YN037xS_rc/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 p-6 rounded-2xl hover:bg-white hover:text-black transition"
          >
            Landing Page for Coaching Offer
          </a>
          <a
            href="https://docs.google.com/document/d/1U8hVIHyl0TN7swjEGkHxLhITC_mxkMiPsqdCIJ712SY/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 p-6 rounded-2xl hover:bg-white hover:text-black transition"
          >
            Cold Email Sequence for Lead Gen
          </a>
          <a
            href="https://docs.google.com/document/d/1t5XnvkLbEiPQKvFxQCFYOQ7Q_3Wtj9bG1hqnY6IHDIY/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 p-6 rounded-2xl hover:bg-white hover:text-black transition"
          >
            Sales Page for Digital Product
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-black py-20 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">Let’s Talk</h2>
        <p className="text-lg md:text-xl mb-6">Ready to make your brand sound like it means business?</p>
        <p className="text-xl font-bold">📩 mujtaba2625@gmail.com</p>
      </section>
    </main>
  );
}
