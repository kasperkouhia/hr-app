import Header from "./components/Header";
import Person from "./components/Person";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header version={1} />
      <div className="m-4 grow-1 self-start">
        <Person
          name="Aino Virtanen"
          title="HR Manager"
          salary={4200}
          phone="040-1234567"
          email="aino.virtanen@example.com"
          animal="Owl"
        />
      </div>
      <Footer />
    </div>
  );
}
