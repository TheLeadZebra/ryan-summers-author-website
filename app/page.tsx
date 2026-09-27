const bookLinks = [
  {
    label: "thegreatbritishbookshop.co.uk/products/the-fate-of-the-basking-glory",
    href: "https://thegreatbritishbookshop.co.uk/products/the-fate-of-the-basking-glory",
  },
  {
    label: "amazon.co.uk/dp/1806548194",
    href: "https://amazon.co.uk/dp/1806548194",
  },
]

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 px-6 text-center">
      <h1 className="text-4xl font-medium tracking-tight">Website coming soon.</h1>
      <nav aria-label="Buy the book" className="flex flex-col gap-3 text-sm">
        {bookLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-4 transition-opacity hover:opacity-75"
          >
            {link.label}
          </a>
        ))}
      </nav>
    </main>
  )
}
