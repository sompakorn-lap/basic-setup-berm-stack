import { useState } from "react";

function HomePage() {
  const [count, setCount] = useState(0);

  return (
    <section>
      
      <h1>App</h1>

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