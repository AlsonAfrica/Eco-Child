"use client"

import type React from "react"

import { useState } from "react"
import "../Styles/contact.css"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Handle form submission here
    alert("Thank you for your message! We'll get back to you soon.")
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  return (
    <section className="contact-section">
      {/* Floating Nature Elements */}
      <div className="floating-elements">
        <div className="floating-leaf leaf-1">🍃</div>
        <div className="floating-leaf leaf-2">🌿</div>
        <div className="floating-leaf leaf-3">🍃</div>
        <div className="floating-flower flower-1">🌸</div>
        <div className="floating-flower flower-2">🌼</div>
        <div className="floating-butterfly">🦋</div>
      </div>

      <div className="contact-container">
        <div className="contact-header">
          <h1 className="contact-title">Get in Touch with Us!</h1>
          <p className="contact-subtitle">
            Have questions about our mission? Want to join our eco-adventure? We'd love to hear from you!
          </p>
        </div>

        <div className="contact-content">
          {/* Contact Info Card */}
          <div className="contact-info-card">
            <div className="info-header">
              <div className="earth-icon">🌍</div>
              <h3>Let's Save Our Planet Together!</h3>
            </div>

            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon">📧</div>
                <div>
                  <h4>Email Us</h4>
                  <p>hello@greenplanet.com</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">📞</div>
                <div>
                  <h4>Call Us</h4>
                  <p>+1 (555) 123-GREEN</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">📍</div>
                <div>
                  <h4>Visit Us</h4>
                  <p>
                    123 Eco Street
                    <br />
                    Green City, Earth 12345
                  </p>
                </div>
              </div>
            </div>

            <div className="fun-facts">
              <h4>🌱 Fun Eco Facts!</h4>
              <ul>
                <li>🌳 One tree produces oxygen for 2 people per day</li>
                <li>♻️ Recycling one can saves enough energy to power a TV for 3 hours</li>
                <li>🐝 Bees pollinate 1/3 of all the food we eat</li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-card">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-header">
                <h3>Send Us a Message! 💌</h3>
                <p>We promise to reply faster than a growing sunflower! 🌻</p>
              </div>

              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  Your Name 👋
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="What should we call you?"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Email Address 📧
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject" className="form-label">
                  What's This About? 🤔
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Tell us the topic!"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  Your Message 💭
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="form-textarea"
                  placeholder="Share your thoughts, ideas, or questions with us!"
                  rows={5}
                  required
                />
              </div>

              <button type="submit" className="submit-button">
                <span>Send Message</span>
                <div className="button-icon">🚀</div>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
