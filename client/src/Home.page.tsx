import { useState } from "react";
import ReactIcon from "./assets/react.svg";

function HomePage() {
  const [count, setCount] = useState(0);

  return (
    <section>
      
      <h1>App1</h1>

      <img src={ReactIcon} />

      <button
        className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
        onClick={() => setCount(count + 1)}
      >
        count: {count}
      </button>

    </section>
  );
}

export default HomePage;