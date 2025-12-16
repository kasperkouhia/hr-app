export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t-1 p-4">
      <p>Kasper Kouhia &mdash; WP25K &copy; {currentYear}</p>
    </footer>
  );
}
