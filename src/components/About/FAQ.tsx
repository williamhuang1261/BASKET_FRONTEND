import Accordion from "../General/Miscellaneous/Accordion";

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
    <div className="flex w-full flex-col items-center justify-center gap-2 pt-5">
      <h2 className="text-xl font-semibold lg:text-3xl 3xl:text-4xl">FAQ</h2>
      <div className="w-full rounded border-0.5">
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
