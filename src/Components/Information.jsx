import "../scss/information.scss";
import Form from "./Form";
import Item from "./Item";

const Information = () => {
  const list = [
    {
      id: 1,
      text: "Product discovery and building what matters",
    },
    {
      id: 2,
      text: "Measuring to ensure updates are a success",
    },
    {
      id: 3,
      text: "And much more!",
    },
  ];

  return (
    <>
      <div className="contentInformation">
        <h1>Stay Updated!</h1>
        <p>Join 60,000+ product managers receiving monthly updates on:</p>
        {list.map((item) => (
          <Item 
            key={item.id}
            text={item.text}
          />
        ))}
        <Form/>
      </div>
    </>
  );
};

export default Information;
