export default function Cars({ model, year, color }) {
    return (
        <div className="w-96 border rounded mb-4 p-2">
            <h2>Model: {model}</h2>
            <h4>Year: {year}</h4>
            <h4>Color: {color} </h4>
        </div>
    )
}

