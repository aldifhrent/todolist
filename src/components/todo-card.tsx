import { Trash } from "lucide-react";

interface TodoProps {
  text: string;
}
export default function TodoCard(props: TodoProps) {
  return (
    <div
      className="flex justify-between items-center  p-4 rounded-lg shadow-md"
      key={props.text}
    >
      <div className="flex items-center gap-12">
        <input
          type="checkbox"
          className="outline-none border-2 focus:bg-green"
        />
        <p className="text-xl">{props.text}</p>
      </div>
      <button
        className="text-red-500 hover:text-red-600 focus:outline-none border-2 bg-none rounded-md p-2"
        aria-label="Delete todo"
      >
        <Trash />
      </button>
    </div>
  );
}
