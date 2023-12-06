import "../scss/information.scss";
import Form from "./Form";
import Item from "./Item";
import Mobile from '../img/illustration-mobile.svg'

const Information = ({ setConfirm }) => {
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
        <img src={Mobile} alt="illustratorMobile" className="mobileImg"/>
      <div className="contentInformation">
        <h1>Stay Updated!</h1>
        <p>Join 60,000+ product managers receiving monthly updates on:</p>
        {list.map((item) => (
          <Item 
            key={item.id}
            text={item.text}
          />
        ))}
        <Form 
          setConfirm={setConfirm}
        />
      </div>
    </>
  );
};

export default Information;
