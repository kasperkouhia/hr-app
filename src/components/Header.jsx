export default function Header({ version }) {
  return (
    <header className="border-b-1 p-4">
      <h1 className="text-2xl">
        HR App (Version &#8470;{version ? version : 0})
      </h1>
    </header>
  );
}
