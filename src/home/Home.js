
export default function Home() {
  return (
    <main className="anniversary-page">
      <section className="anniversary-hero" aria-labelledby="anniversary-title">
        <div className="floating-hearts" aria-hidden="true">
          <span />
          <span />
          <span />
          <span />
        </div>

        <p className="anniversary-kicker">Our first anniversary</p>
        <h1 id="anniversary-title">One year with my favorite person</h1>
        <p className="anniversary-note">
          This little corner of the internet is for us: the laughs, the dates,
          the quiet moments, and every reason I am lucky to love you.
        </p>
      </section>

      <section className="love-letter" id="letter">
        <h2>Happy 1 year, my love.</h2>
        <div className="letter-image"></div>
        <div className="letter-content"> Thank you for being my peace, my smile, and the best part of so many
          ordinary days. I cannot wait to keep making memories with you. Every
           single day with you is a gift, and I am so grateful that you choose 
           to be with me every single one of those days. I love you so much. I know that 
           we will be together for many more years to come, and I cannot wait to see what the 
           future holds for us. You are my everything, and I am so lucky to have you in my life.
            Happy anniversary, my love. </div>
      </section>

      <section className="timeline">
        <h2>Our Year Together</h2>
        <p>
          From our first date to our first anniversary, every moment has been a
          treasure. Here's a look back at some of our favorite memories.
        </p>
      </section>
    </main>
  );
}