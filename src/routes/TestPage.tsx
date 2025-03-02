import { useState } from "react";

/**
 * @description Test page for development and debugging purposes
 * @returns {JSX.Element} Test page with any content for testing
 */
const TestPage = () => {
  const [active, setActive] = useState(false);
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div className="h-screen w-screen">
      <div
        className="w-80 bg-white p-2"
        onBlur={(e) => {
          if (!e.relatedTarget) {
          }
        }}
      >
        <button
          className="h-full w-full ring ring-blue-500"
          onClick={() => setActive(!active)}
        >
          Title
        </button>
        <div
          className={`flex flex-col ring ring-red-500 transition-all ${active ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none -translate-y-2 opacity-0"}`}
        >
          {data.map((d) => (
            <button
              key={d}
              className="border p-2"
              tabIndex={active  ? 0 : -1}
              onClick={() => console.log(d)}
            >
              {d}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestPage;
