import "../scss/confirm.scss";
import Icon from "../img/icon-success.svg";

const Confirm = ({setConfirm}) => {
  return (
    <>
      <div className="contentConfirm">
        <img src={Icon} alt="icon-success" className="iconSuccess" />
        <h1>Thanks for subscribing!</h1>
        <p>
          A confirmation email has been sent to{' '}
          <strong>ash@loremcompany.com.</strong>{' '}
          Please open it and click the button inside to confirm your
          subscription.
        </p>
        <button
            onClick={()=>{setConfirm(false)}}
        >Dismiss message</button>
      </div>
    </>
  );
};

export default Confirm;
