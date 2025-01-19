/**
 * @description The Information component displays information about the website
 * @summary This component displays a list of information with a title and a body. An array of objects is used to store the information
 * @returns {JSX.Element} The Information component
 */

const Information = () => {
  const info = [
    {
      title: "Title1",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores delectus consectetur eligendi rem quis at quod cumque, velit dignissimos cum temporibus deleniti id perferendis quidem suscipit debitis quae maxime sint veniam ut doloribus exercitationem asperiores commodi. Aliquid, quam! Ducimus asperiores, placeat veritatis laboriosam earum maxime odit non. Fugit, nulla numquam?",
    },
    {
      title: "Title2",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores delectus consectetur eligendi rem quis at quod cumque, velit dignissimos cum temporibus deleniti id perferendis quidem suscipit debitis quae maxime sint veniam ut doloribus exercitationem asperiores commodi. Aliquid, quam! Ducimus asperiores, placeat veritatis laboriosam earum maxime odit non. Fugit, nulla numquam?",
    },
    {
      title: "Title3",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores delectus consectetur eligendi rem quis at quod cumque, velit dignissimos cum temporibus deleniti id perferendis quidem suscipit debitis quae maxime sint veniam ut doloribus exercitationem asperiores commodi. Aliquid, quam! Ducimus asperiores, placeat veritatis laboriosam earum maxime odit non. Fugit, nulla numquam?",
    },
    {
      title: "Title4",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores delectus consectetur eligendi rem quis at quod cumque, velit dignissimos cum temporibus deleniti id perferendis quidem suscipit debitis quae maxime sint veniam ut doloribus exercitationem asperiores commodi. Aliquid, quam! Ducimus asperiores, placeat veritatis laboriosam earum maxime odit non. Fugit, nulla numquam?",
    },
  ];

  return (
    <div className="flex flex-col gap-5">
      {info.map((i) => (
        <div className="flex flex-col gap-1" key={i.title}>
          <h2 className="text-lg font-bold">{i.title}</h2>
          <span>{i.body}</span>
        </div>
      ))}
    </div>
  );
};

export default Information;
