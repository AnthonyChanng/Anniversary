
import Image from "next/image";

const timelineItems = [
  {
    date: "July 13th 2025",
    title: "Our first date",
    description:
      "This was the start of our beautiful relationship together. It was a great day where we shared our first kiss, and first memories as a couple!",
    image: "/pictures/D76D258E-0CB2-4166-A7D5-71CF00395534_1_105_c.jpeg",
    imageAlt: "A favorite anniversary memory",
  },
  {
    date: "July 21th 2025",
    title: "Our first gym date",
    description:
      "One of our first of many gym dates together. We worked out hard and gained big muscles.",
    image: "/pictures/D790B94E-AA94-462F-8B6F-5287924E4EEF_1_105_c.jpeg",
    imageAlt: "A little adventure together",
  },
  {
    date: "August 1st 2025",
    title: "Our first proper, fancy date",
    description:
      "We went to a nice italian restaurant and had a great time. What was funny was that we ordered the same entree which was silly billy.",
    image: "/pictures/95D88BC6-C7AC-4FB7-8FD5-62EA218D034F_1_105_c.jpeg",
    imageAlt: "A little adventure together",
  },
  {
    date: "August 9th 2025",
    title: "Our first NYC trip ",
    description:
      "We explored the big city with our friends. The random Shark pop up was such a funny suprise. It was a great adventure together.",
    image: "/pictures/5CB64443-78BB-4FCB-B74F-E7217E683154_1_105_c.jpeg",
    imageAlt: "A little adventure together",
  },
  {
    date: "November 4th 2025",
    title: "My first birthday with you",
    description:
      "This was my first birthday celebrated with you, and you made it amazing. The little scavanger hunt you set up for me was so thoughtful, and the gifts you gave me were perfect.",
    image: "/pictures/FB0F8F45-A90A-43A6-8D43-3F83C3B18590_1_105_c.jpeg",
    imageAlt: "A saved memory from our year together",
  },
  {
    date: "Winter 2025",
    title: "One of our little adventures",
    description:
      "Replace this with the story of the day, where you went, and what made it special.",
    image: "/pictures/DE1057CF-6949-4FEA-BFB6-A8D2BD60A9C5_1_105_c.jpeg",
    imageAlt: "A little adventure together",
  },
  {
    date: "July 2026",
    title: "One year together",
    description:
      "A place for your anniversary memory, favorite photo, and the words you want to keep.",
    image: "/pictures/FB7A6859-D74B-436F-B8DA-BFFA3E7F1AE0_4_5005_c.jpeg",
    imageAlt: "Our first anniversary memory",
  },
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

      <section className="love-letter" id="letter">
        <h2>Happy 1 year, my love!</h2>
        <div className="letter-content">
          <div className="letter-image">
            <Image
              src="/pictures/FB7A6859-D74B-436F-B8DA-BFFA3E7F1AE0_4_5005_c.jpeg"
              alt="A favorite anniversary memory"
              fill
              sizes="(max-width: 760px) 90vw, 400px"
            />
          </div>
          <div className="letter-text">
            Thank you for being my peace, my smile, and the best part of so
            many ordinary days. I cannot wait to keep making memories with you.
            Every single day with you is a gift, and I am so grateful that you
            choose to be with me every single one of those days. I love you so
            much. I know that we will be together for many more years to come,
            and I cannot wait to see what the future holds for us. You are my
            everything, and I am so lucky to have you in my life. Happy
            anniversary, my love.
          </div>
        </div>
      </section>

      <section className="timeline">
        <h2>Our Year Together</h2>
        <p className="timeline-intro">
          From our first date to our first anniversary, every moment has been a
          treasure. Here&apos;s a look back at some of our favorite memories.
        </p>
        <div className="timeline-scroller" aria-label="Relationship timeline">
          {timelineItems.map((item) => (
            <article className="timeline-card" key={`${item.date}-${item.title}`}>
              <div className="timeline-image">
                <Image
                  src={item.image}
                  alt={item.imageAlt}
                  fill
                  sizes="(max-width: 760px) 82vw, 360px"
                />
              </div>
              <div className="timeline-copy">
                <time>{item.date}</time>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
