import Accordion from "../General/Miscellaneous/Accordion";

/**
 * @description Frequently Asked Questions component
 * @summary Contains a list of questions and answers. Each question can be clicked to reveal the answer
 * @returns {JSX.Element} The FAQ component
 */

const FAQ = () => {
  const QA = [
    {
      Q: "Question 1",
      A: "Answer",
    },
    {
      Q: "Question 2",
      A: "Answer",
    },
    {
      Q: "Question 3",
      A: "Answer",
    },
    {
      Q: "Question 4",
      A: "Answer",
    },
    {
      Q: "Question 5",
      A: "Answer",
    },
  ];

  return (
    <div className="flex px-5 w-full max-w-screen-lg flex-col items-center justify-center gap-2 pt-5">
      <h2 className="text-lg font-semibold lg:text-2xl 3xl:text-3xl">FAQ</h2>
      <div className="w-full rounded border-0.5 bg-white shadow-md">
        {QA.map((qa) => (
          <div
            className={QA.indexOf(qa) === QA.length - 1 ? "" : "border-b-0.5"}
            key={qa.Q}
          >
            <Accordion title={qa.Q} answer={qa.A} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
