"use client";

import Image from "next/image";
import { useState } from "react";

const GALLERY_BATCH_SIZE = 10;

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
    title: "Our first NYC trip",
    description:
      "We explored the big city with our friends. The random Shark pop up was such a funny suprise. It was a great adventure together.",
    image: "/pictures/5CB64443-78BB-4FCB-B74F-E7217E683154_1_105_c.jpeg",
    imageAlt: "A little adventure together",
  },
  {
    date: "September 19th 2025",
    title: "KBBQ with my family",
    description:
      "We had a wonderful time at the barbecue with my family. It was a great opportunity to spend quality time together as you got to know my parents more, and becamse more part of the family.",
    image: "/pictures/E2182D1E-ECA2-4954-91E8-CA5BDB1202BE_1_105_c.jpeg",
    imageAlt: "A little adventure together",
  },
  {
    date: "October 31st 2025",
    title: "Halloween party at Ziggys",
    description:
      "We had a great time at the halloween party dressed as ninja swat people. You got drunk and were so cute.",
    image: "/pictures/D64A95B6-B743-4076-908B-9B75DC23BD93_1_105_c.jpeg",
    imageAlt: "A saved memory from our year together",
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
    date: "November 6th 2025",
    title: "The Giveon Concert",
    description: "This was my first concert experience, and I was so glad that I was able to experience it with you! We had a great time with friends, and the vibes were fun.",
    image: "/pictures/9C399D5E-24DF-40F1-9F1E-A3155FA3529D_1_105_c.jpeg",
    imageAlt: "A saved memory from our year together",
  },
  {
    date: "November 25th 2025",
    title: "Hanging up the the family Christmas tree",
    description: "I had an amazing time hanging up the tree with you and your family. It really made me feel like I was apart of the family.",
    image: "/pictures/CC74C47B-BCB6-45AF-B288-9DE06CC0B792_1_105_c.jpeg",
    imageAlt: "A saved memory from our year together",
  },
  {
    date: "December 14th, 2025",
    title: "Wicked Broadway Show with my parents",
    description: "This was an amazing day in the city with you and my parents. We had a great time seeing the show, and it was a great experience to share with you.",
    image: "/pictures/FB7A6859-D74B-436F-B8DA-BFFA3E7F1AE0_4_5005_c.jpeg",
    imageAlt: "A saved memory from our year together",
  },
  {
    date: "January 17th 2025",
    title: "SNOWMAN",
    description: "This was a great day where you came over to help me shovel the snow, and we made such a cute lil snowman together.",
    image: "/pictures/AB58EF61-C631-4C4C-A89B-695C87AEBC2E_1_105_c.jpeg",
    imageAlt: "A saved memory from our year together",
  },
  {
    date: "January 30th 2025",
    title: "A giant group snowboarding trip and getting into gtech",
    description: "This day was full of fun moments with friends and the icing on the cake was having you with me when I got into my dream school!",
    image: "/pictures/C69302C6-F76A-4ABD-9777-14E0003D1A51_1_105_c.jpeg",
    imageAlt: "A saved memory from our year together",
  },
  {
    date: "February 14th 2026",
    title: "Valentine's Day",
    description: "What a cute first valentine's day together. I had a great time with you and I loved the gifts you gave me. That dinner was also so amazing!",
    image: "/pictures/74F76CDA-965F-4F3F-AE72-61141AE4644F_1_105_c.jpeg",
    imageAlt: "A saved memory from our year together",
  },
  {
    date: "May 22nd 2026",
    title: "PROM",
    description:
      "What a beautiful day. Prom with you was one of the greatest times of my life. I had so much fun spending time with you and seeing you in that amazing dress. You looked so pretty.",
    image: "/pictures/26D066E1-43EE-4AF8-870E-D6D1971223F9_1_105_c.jpeg",
    imageAlt: "A little adventure together",
  },
  {
    date: "May 29th 2026",
    title: "Early birthday celebration",
    description: "We had a cute little date at the Thai restaurant you picked out for us. And then I got to give you a early Christmas gift of a Switch 2!",
    image: "/pictures/B7F5EA3A-4870-4611-874A-C98A1F037359_1_105_c.jpeg",
    imageAlt: "A saved memory from our year together",
  },
  {
    date: "June 18th 2026",
    title: "Our graduation day",
    description:
      "What a momentous day! We both celebrated our graduation from high school together. From here, we move onto bigger and better things. I look forward to spending every day with you as we continue to grow together.",
    image: "/pictures/FA7B87A3-80A5-440F-99B6-E6D7B1EA3AC5_4_5005_c.jpeg",
    imageAlt: "A saved memory from our year together",
  },
];

const galleryImages = [
  "/pictures/C4561680-91FE-4C13-96C4-D9EADC55AE09_1_105_c.jpeg",
  "/pictures/93AE8E91-26C8-4CF8-902C-3554E299B56A_1_105_c.jpeg",
  "/pictures/B7F5EA3A-4870-4611-874A-C98A1F037359_1_105_c.jpeg",
  "/pictures/86797691-F552-4DD5-A551-FEE86D1F66EE_1_105_c.jpeg",
  "/pictures/CC74C47B-BCB6-45AF-B288-9DE06CC0B792_1_105_c.jpeg",
  "/pictures/DEC4A6C3-DED0-4E8C-813E-28C68B08B14D_1_105_c.jpeg",
  "/pictures/826DCF2B-603F-4830-92B4-E691E72204AD_4_5005_c.jpeg",
  "/pictures/5F27EFA4-98D4-4496-8E92-E69BC3D2A8B4_4_5005_c.jpeg",
  "/pictures/81A556A9-63B4-4BF9-ABF8-8F27F74E5EA3_1_105_c.jpeg",
  "/pictures/A15D2EAA-9B0D-43FE-BE67-3F306103819C_1_105_c.jpeg",
  "/pictures/A97C829E-F6E0-4E12-9AB9-9E41A6BB5DC7_1_105_c.jpeg",
  "/pictures/0453377C-7218-41A8-97E5-C7ADF8C186F4_1_105_c.jpeg",
  "/pictures/507F035A-B234-42A6-A39F-8C6C67E6D1F5_1_105_c.jpeg",
  "/pictures/9C399D5E-24DF-40F1-9F1E-A3155FA3529D_1_105_c.jpeg",
  "/pictures/1F9FBD71-B439-4B7D-B8C1-F490480125FC_1_105_c.jpeg",
  "/pictures/188E980D-B2C2-4585-B6A8-F2B64FC13921_1_105_c.jpeg",
  "/pictures/741F69F1-BE3E-4C37-B817-D3E270AEBEDB_1_105_c.jpeg",
  "/pictures/65639C9F-6176-4D8D-A112-3119117FC070_1_105_c.jpeg",
  "/pictures/C69302C6-F76A-4ABD-9777-14E0003D1A51_1_105_c.jpeg",
  "/pictures/6D60BFA4-AE14-41C2-8754-D6010A02B921_1_102_o.jpeg",
  "/pictures/128B81C8-49B5-4606-924C-79861B1B8DDB_1_105_c.jpeg",
  "/pictures/D76D258E-0CB2-4166-A7D5-71CF00395534_1_105_c.jpeg",
  "/pictures/95D88BC6-C7AC-4FB7-8FD5-62EA218D034F_1_105_c.jpeg",
  "/pictures/D790B94E-AA94-462F-8B6F-5287924E4EEF_1_105_c.jpeg",
  "/pictures/B6F5652E-EFFD-463D-91A7-D09200EDCB3F_4_5005_c.jpeg",
  "/pictures/24A27AE0-D0E2-4847-9BD0-C8494CDD40D8_4_5005_c.jpeg",
  "/pictures/1637FE70-3AB9-4D86-A26D-0FD5CA65A9AB_1_105_c.jpeg",
  "/pictures/4DB1F147-B23D-4CE7-AE89-FC00A71BFFC2_1_105_c.jpeg",
  "/pictures/20E5E951-BA7F-437E-8E47-A5F0BC311EFF.jpeg",
  "/pictures/2062EA09-8CEE-4925-AF09-49A29D42ED4C_4_5005_c.jpeg",
  "/pictures/5CB64443-78BB-4FCB-B74F-E7217E683154_1_105_c.jpeg",
  "/pictures/26D066E1-43EE-4AF8-870E-D6D1971223F9_1_105_c.jpeg",
  "/pictures/776B8E0D-D57D-44C8-A2BD-A65915A0F6E4_1_105_c.jpeg",
  "/pictures/7FEC4716-81D5-47A2-9787-6E4F176A88F8_1_105_c.jpeg",
  "/pictures/ECF7AC5D-D95C-49A1-B050-111598EBD1CB_1_105_c.jpeg",
  "/pictures/0B68B09A-071A-476D-8883-68790AC803C1_1_105_c.jpeg",
  "/pictures/602D9D6C-2646-4619-ADF0-8ECA2093A66C_1_105_c.jpeg",
  "/pictures/FDED3509-FEB5-437F-8EC6-BBDB8A87CB27_1_105_c.jpeg",
  "/pictures/CC2C29CB-3CFF-4ECB-B6A8-E325B95373FA_1_105_c.jpeg",
  "/pictures/BFBD20A2-497F-469E-AA42-EBA78687DB9E_1_105_c.jpeg",
  "/pictures/5D4462C7-50F2-493C-8504-C65EE634B7C1_1_105_c.jpeg",
  "/pictures/AEE57AE1-5D9F-4558-BFC3-AEFB5A4CC8C8_1_105_c.jpeg",
  "/pictures/6444344A-8F0E-46AE-B1F0-1313CEED6E25_1_105_c.jpeg",
  "/pictures/FA7B87A3-80A5-440F-99B6-E6D7B1EA3AC5_4_5005_c.jpeg",
  "/pictures/74F76CDA-965F-4F3F-AE72-61141AE4644F_1_105_c.jpeg",
  "/pictures/617BC725-82AB-448E-A311-53F3E554807B_1_105_c.jpeg",
  "/pictures/64B6DEE8-4FA8-478B-81C0-FDCA70FCEB1F_1_105_c.jpeg",
  "/pictures/BF1F4529-65FE-4BD7-92B5-09CEC69EFAB7_1_105_c.jpeg",
  "/pictures/66C0A08E-58D9-457D-B079-BEFE95B49437_1_105_c.jpeg",
  "/pictures/4F9A6EFD-71D0-4150-8264-91B960BE7176_1_105_c.jpeg",
  "/pictures/DEA4FEF4-43BD-41EE-98EB-09D9237357E9_1_105_c.jpeg",
  "/pictures/985A7304-A6A3-4B07-8EBC-72479BE936C8_1_105_c.jpeg",
  "/pictures/AB58EF61-C631-4C4C-A89B-695C87AEBC2E_1_105_c.jpeg",
  "/pictures/E2182D1E-ECA2-4954-91E8-CA5BDB1202BE_1_105_c.jpeg",
  "/pictures/FB0F8F45-A90A-43A6-8D43-3F83C3B18590_1_105_c.jpeg",
  "/pictures/B9A93439-4246-43AA-BBAD-5E27A42F6429_1_105_c.jpeg",
  "/pictures/D64A95B6-B743-4076-908B-9B75DC23BD93_1_105_c.jpeg",
  "/pictures/DC37BD97-D9F5-41D0-97BE-C5DEEAFF6367_1_105_c.jpeg",
  "/pictures/0D6E3655-677B-4F5F-9D30-CAA12D5C45E0_1_105_c.jpeg",
  "/pictures/639DA505-C02E-4E2E-B613-AE39BFFB6589_4_5005_c.jpeg",
  "/pictures/69615059-0711-444E-812C-488AF02082A4_1_105_c.jpeg",
  "/pictures/8843FB11-2B6B-4EF8-B5CC-54942279A2D3_1_105_c.jpeg",
  "/pictures/16DE811B-03F9-4818-AC72-ED700ABAF30E_1_105_c.jpeg",
  "/pictures/A682E5ED-F392-425A-94EA-AEBD91889348_1_105_c.jpeg",
  "/pictures/CF5F8CAA-55AA-4BF9-B907-482CDAC83CB7_1_105_c.jpeg",
  "/pictures/B1773FBA-0671-4B62-B100-D65576D5BED3_1_105_c.jpeg",
  "/pictures/9282645D-2894-4038-96A1-4C69786FB26B_1_105_c.jpeg",
  "/pictures/D6913323-B43B-444D-8226-36432C8F130C_1_105_c.jpeg",
  "/pictures/965E92B8-8D0F-44C9-8D58-F1695BB9ED6B_1_105_c.jpeg",
  "/pictures/FB7A6859-D74B-436F-B8DA-BFFA3E7F1AE0_4_5005_c.jpeg",
  "/pictures/DE1057CF-6949-4FEA-BFB6-A8D2BD60A9C5_1_105_c.jpeg",
  "/pictures/0E7D6F89-5BE3-47E6-B44C-F0994EE4BB98_1_105_c.jpeg",
  "/pictures/76A6684E-C40F-4A86-A3C4-D9342C2DE8A9_1_105_c.jpeg",
];

export default function Home() {
  const [visibleCount, setVisibleCount] = useState(GALLERY_BATCH_SIZE);
  const visibleGalleryImages = galleryImages.slice(0, visibleCount);
  const hasMoreGalleryImages = visibleCount < galleryImages.length;

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

      <section className="gallery" aria-labelledby="gallery-title">
        <h2 id="gallery-title">All Our Pictures</h2>
        <div className="gallery-grid">
          {visibleGalleryImages.map((src, index) => (
            <div className="gallery-photo" key={src}>
              <Image
                src={src}
                alt={`Anniversary gallery photo ${index + 1}`}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1080px) 25vw, 220px"
              />
            </div>
          ))}
        </div>
        {hasMoreGalleryImages ? (
          <button
            className="gallery-load-more"
            type="button"
            onClick={() =>
              setVisibleCount((currentCount) =>
                Math.min(currentCount + GALLERY_BATCH_SIZE, galleryImages.length)
              )
            }
          >
            Load 10 more
          </button>
        ) : null}
      </section>
    </main>
  );
}
