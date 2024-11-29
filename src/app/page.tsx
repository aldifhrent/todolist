import AddTodo from "@/components/add-todo";
import TodoCard from "@/components/todo-card";
import { todos } from "@/lib/const";

export default function Home() {
  return (
    <main className="bg-slate-950 min-h-screen  text-white pt-10">
      <section className="flex flex-col">
        <h1 className="text-center text-4xl font-bold mb-10">
          Chores To Do List
        </h1>
        <div className="flex flex-col gap-6 mt-10  justify-between p-20">
          {todos.map((todo) => (
            <TodoCard text={todo} key={todo} />
          ))}
        </div>
        <hr className="mt-8" />
        <AddTodo />
      </section>
    </main>
  );
}
