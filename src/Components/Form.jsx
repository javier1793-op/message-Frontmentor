import { useRef } from "react";
import "../scss/form.scss";
import { useState } from "react";

const Form = ({setConfirm}) => {
  const [error, setError] = useState(false);
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const mailregex =
      /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    const email = form.current.mail.value;

    if (!mailregex.test(email) || email === "") {
      setError(true);
      return;
    }
    setError(false);
    setConfirm(true);
  };

  return (
    <>
      <form onSubmit={handleSubmit} ref={form}>
        <section className="labelBox">
          <label> Email address:</label>
          {error && <label className="labelError"> Valid email required</label>}
        </section>
        <input
          type="text"
          placeholder="email@company.com"
          name="mail"
          className={`${error ? "error" : ""}`}
        />
        <button>Subscribe to monthly newsletter</button>
      </form>
    </>
  );
};

export default Form;
