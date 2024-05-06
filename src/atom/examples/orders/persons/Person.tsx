export default function Person({ name, email, age, nationality }) {
  return (
    <div className="w-96 border rounded mb-4 p-2">
      <h2>Persons:</h2>
      <h4>name: {name}</h4>
      <h4>email: {email} </h4>
      <h4>age: {age}</h4>
      <p className="text-end">nationality: {nationality} </p>
    </div>
  )
}