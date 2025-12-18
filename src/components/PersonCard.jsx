export default function PersonCard({
  name,
  title,
  salary,
  phone,
  email,
  animal,
  startDateString,
  location,
  department,
  skills,
}) {
  const currentDate = new Date();
  const startDate = new Date(startDateString);

  const yearsSinceStart =
    currentDate.getFullYear() -
    startDate.getFullYear() -
    (currentDate <
    new Date(
      currentDate.getFullYear(),
      startDate.getMonth(),
      startDate.getDate(),
    )
      ? 1
      : 0);

  return (
    <div className="border-1">
      <h2 className="border-b-1 p-4 font-bold">{name}</h2>
      <ul className="p-4">
        <li>Title: {title}</li>
        <li>Salary: {salary}€/mo</li>
        <li>Phone number: {phone}</li>
        <li>Email: {email}</li>
        <li>Favorite animal: {animal.emoji}</li>
        <li>
          Start date: {startDateString} ({yearsSinceStart}{" "}
          {yearsSinceStart === 1 ? "year" : "years"} ago)
        </li>
        <li>Location: {location}</li>
        <li>Department: {department}</li>
        <li>Skills: {skills.join(", ")}</li>
      </ul>
    </div>
  );
}
