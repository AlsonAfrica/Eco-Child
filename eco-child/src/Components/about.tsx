import React from 'react';
import '../Styles/about.css';

interface FloatingFlowerProps {
  delay: number;
  size: number;
  left: string;
}

const FloatingFlower: React.FC<FloatingFlowerProps> = ({ delay, size, left }) => (
  <div 
    className="floating-flower" 
    style={{
      animationDelay: `${delay}s`,
      fontSize: `${size}px`,
      left: left
    }}
  >
    🌸
  </div>
);

interface SectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ title, children, className = '' }) => (
  <div className={`section ${className}`}>
    <h2 className="section-title">{title}</h2>
    <div className="section-content">
      {children}
    </div>
  </div>
);

const About: React.FC = () => {
  return (
    <div className="about-container">
      {/* Floating Flowers */}
      <FloatingFlower delay={0} size={20} left="10%" />
      <FloatingFlower delay={2} size={16} left="80%" />
      <FloatingFlower delay={4} size={18} left="60%" />
      <FloatingFlower delay={1} size={14} left="30%" />
      <FloatingFlower delay={3} size={22} left="90%" />
      <FloatingFlower delay={5} size={16} left="5%" />

      {/* Background Elements */}
      <div className="background-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>

      <div className="content-wrapper">
        {/* Header */}
        <header className="hero-section">
          <h1 className="main-title">About Our Mission</h1>
          <div className="title-decoration">
            <span className="flower-accent">🌸</span>
            <div className="title-underline"></div>
            <span className="flower-accent">🌸</span>
          </div>
        </header>

        {/* Objective Section */}
        <Section title="Our Objective" className="objective-section">
          <div className="objective-grid">
            <div className="objective-card">
              <div className="card-icon">📊</div>
              <h3>Smart Analytics</h3>
              <p>Optimize waste collection through smart sensors and data analytics</p>
            </div>
            <div className="objective-card">
              <div className="card-icon">♻️</div>
              <h3>Sustainability</h3>
              <p>Enhance sustainability through waste sorting and recycling</p>
            </div>
          </div>
        </Section>

        {/* Services Section */}
        <Section title="Services" className="services-section">
          <div className="services-grid">
            <div className="service-item">
              <div className="service-header">
                <span className="service-icon">🏛️</span>
                <h3>Municipal Solutions</h3>
              </div>
              <p>Municipalities seek to modernize waste management with our comprehensive platform.</p>
            </div>
            <div className="service-item">
              <div className="service-header">
                <span className="service-icon">🏢</span>
                <h3>Commercial Solutions</h3>
              </div>
              <p>Commercial businesses aiming to lower waste disposal costs and improve sustainability.</p>
            </div>
          </div>
        </Section>

        {/* Technology Section */}
        <Section title="Technological Aspects" className="tech-section">
          <div className="tech-features">
            <div className="tech-feature">
              <div className="feature-icon">🗺️</div>
              <div className="feature-content">
                <h4>Route Optimization</h4>
                <p>Data analytics for route optimization and predictive fill patterns</p>
              </div>
            </div>
            <div className="tech-feature">
              <div className="feature-icon">📈</div>
              <div className="feature-content">
                <h4>Client Dashboard</h4>
                <p>Client dashboard for monitoring waste metrics and insights</p>
              </div>
            </div>
          </div>
        </Section>

        {/* Call to Action */}
        <div className="cta-section">
          <div className="cta-content">
            <h3>Ready to Transform Your Waste Management?</h3>
            <p>Join us in creating a more sustainable future through smart technology.</p>
            <button className="cta-button">
              Get Started
              <span className="button-flower">🌸</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;