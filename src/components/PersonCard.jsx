export default function PersonCard({
  name,
  title,
  salary,
  phone,
  email,
  animal,
  startDate,
  location,
  department,
  skills,
}) {
  return (
    <div className="border-1">
      <h2 className="border-b-1 p-4 font-bold">{name}</h2>
      <ul className="p-4">
        <li>Title: {title}</li>
        <li>Salary: {salary}€/mo</li>
        <li>Phone number: {phone}</li>
        <li>Email: {email}</li>
        <li>Favorite animal: {animal}</li>
        <li>Start date: {startDate}</li>
        <li>Location: {location}</li>
        <li>Department: {department}</li>
        <li>Skills: {skills.join(", ")}</li>
      </ul>
    </div>
  );
}
