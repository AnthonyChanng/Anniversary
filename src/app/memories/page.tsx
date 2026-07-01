import Link from "next/link";

export default function MemoriesPage() {
  return (
    <main className="simple-page">
      <p className="anniversary-kicker">Memories</p>
      <h1>A place for all the moments you want to save.</h1>
      <p>
        This is an example route at <strong>/memories</strong>. To add another
        page, create a new folder inside <strong>src/app</strong> and put a
        <strong> page.tsx</strong> file in it.
      </p>
      <Link href="/" className="secondary-link">
        Back home
      </Link>
    </main>
  );
}
