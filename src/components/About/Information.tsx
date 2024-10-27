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
          <h2 className="text-xl font-bold">{i.title}</h2>
          <p>{i.body}</p>
        </div>
      ))}
    </div>
  );
};

export default Information;
