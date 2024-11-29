export default function AddTodo() {
  return (
    <section className="flex flex-col  justify-center mt-8 px-20 pb-20">
      <h1 className="text-4xl font-bold text-center">Done : 0</h1>

      <div className="flex flex-col items-start mt-[35px] gap-4">
        <p className="text-lg">Add todo</p>
        <input
          type="text"
          className="mt-2 w-full h-10 rounded-lg border border-gray-300 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="bg-blue-300 p-2 rounded-lg text-black font-bold  mt-4 w-28 text-lg">
          ADD TASK
        </button>
      </div>
    </section>
  );
}
