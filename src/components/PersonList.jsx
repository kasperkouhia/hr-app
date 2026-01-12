import PersonCard from "./PersonCard";

export default function PersonList({ employees }) {
  return (
    <div className="responsive-cols-70 grid w-full grow-1 gap-4 self-start p-4">
      {employees.map((employee) => (
        <PersonCard
          key={employee.id}
          name={employee.name}
          title={employee.title}
          salary={employee.salary}
          phone={employee.phone}
          email={employee.email}
          animal={employee.animal}
          startDateString={employee.startDate}
          location={employee.location}
          department={employee.department}
          skills={employee.skills}
        />
      ))}
    </div>
  );
}
