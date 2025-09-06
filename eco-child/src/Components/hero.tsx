import "../Styles/hero.css"

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Let's Make Our Planet
            <br />
            <span className="hero-title-accent">Green & Clean!</span>
          </h1>
          <p className="hero-description">
            Join our mission to save the environment through fun activities and eco-friendly adventures. Together, we
            can make a difference. Learn, play, and make a difference!
          </p>
          <div className="hero-buttons">
            <button className="hero-btn hero-btn-primary">Start Your Adventure</button>
            <button className="hero-btn hero-btn-secondary">Watch Now</button>
          </div>
        </div>

        <div className="hero-illustration">
          <div className="sun"></div>
          <div className="cloud cloud-1"></div>
          <div className="cloud cloud-2"></div>
          <div className="cloud cloud-3"></div>

          <div className="earth-container">
            <div className="earth">
              <div className="continent continent-1"></div>
              <div className="continent continent-2"></div>
              <div className="continent continent-3"></div>
            </div>

            <div className="child child-1">
              <div className="child-head"></div>
              <div className="child-body"></div>
              <div className="child-arms"></div>
            </div>

            <div className="child child-2">
              <div className="child-head"></div>
              <div className="child-body"></div>
              <div className="child-arms"></div>
            </div>

            <div className="child child-3">
              <div className="child-head"></div>
              <div className="child-body"></div>
              <div className="child-arms"></div>
            </div>

            <div className="child child-4">
              <div className="child-head"></div>
              <div className="child-body"></div>
              <div className="child-arms"></div>
            </div>
          </div>

          <div className="grass">
            <div className="grass-blade"></div>
            <div className="grass-blade"></div>
            <div className="grass-blade"></div>
            <div className="flower flower-1"></div>
            <div className="flower flower-2"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
