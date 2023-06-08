export default function Home() {
  return (
    <div className="container mx-auto flex justify-center flex-col items-center h-screen text-4xl">
      <h1 className="py-2 mb-2">The current value is 0</h1>
      <input type="number" placeholder="Enter the number" className="border" />

      <br />
      <div className="flex flex-row py-2 mb-2">
        <button className="bg-slate-700 text-white px-4 py-2 mr-3 rounded">
          Add
        </button>
        <button className="bg-slate-700 text-white px-4 py-2 rounded">
          Subtract
        </button>
      </div>
      <input
        type="number"
        placeholder="Enter value to add"
        className="border"
      />
      <br />
      <button className="bg-slate-700 text-white px-4 py-2 rounded mt-2">
        Add a lot
      </button>
    </div>
  );
}
