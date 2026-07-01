import Link from "next/link";

const highlights = [
  "365 days of choosing each other",
  "A whole year of little inside jokes",
  "Still my favorite person to tell everything to",
];

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

      <section className="anniversary-grid" aria-label="Anniversary highlights">
        {highlights.map((highlight) => (
          <article className="memory-card" key={highlight}>
            <span aria-hidden="true">♥</span>
            <p>{highlight}</p>
          </article>
        ))}
      </section>

      <section className="love-letter" id="letter">
        <p className="anniversary-kicker">A letter to my favorite person in the world!</p>
        <h2>Happy 1 year, my love.</h2>
        <p>
          Thank you for being my peace, my smile, and the best part of so many
          ordinary days. I cannot wait to keep making memories with you.
        </p>
      </section>
    </main>
  );
}