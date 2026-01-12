import Header from "./components/Header";
import PersonList from "./components/PersonList";
import Footer from "./components/Footer";
import useAxios from "./hooks/useAxios";
import { useEffect, useState } from "react";

export default function App() {
  const { data } = useAxios("http://localhost:3001/employees");

  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    if (data) setEmployees(data);
  }, [data]);

  return (
    <div className="flex min-h-screen flex-col">
      <Header version={2} />
      <PersonList employees={employees} />
      <Footer />
    </div>
  );
}
