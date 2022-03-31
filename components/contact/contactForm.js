import classes from "./contactForm.module.css";
import { useEffect, useState } from "react";
import Notification from "../../ui/notification";
function ContactForm() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [notification, setNotification] = useState();
  const [requestError, setError] = useState();
  //pending, success, error
  useEffect(() => {
    if (notification === "success" || notification === "error") {
      let timer = setTimeout(() => {
        setNotification(null)
        setError(null)
      }, 3000)
      return () => {
        clearTimeout(timer)
      }
    }
  }, [notification])

  async function formHandler(e) {
    e.preventDefault();
    setNotification("pending");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify({ email, name, message: text }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Something went wrong");
      }
      setNotification("success");
      setEmail("")
      setName("")
      setText("")
    } catch (err) {
      setNotification("error");
      setError(err.message);
    }
  }
  let notificationData;
  if (notification === "pending") {
    notificationData = {
      status: "pending",
      title: "Sending message..",
      message: "Your message is on the way!",
    };
  }
  if (notification === "success") {
    notificationData = {
      status: "success",
      title: "Sucess!",
      message: "Your message was received!",
    };
  }
  if (notification === "error") {
    notificationData = {
      status: "error",
      title: "Error!",
      message: requestError,
    };
  }

  return (
    <section className={classes.contact}>
      <h1>How Can I help You?</h1>
      <form className={classes.form} onSubmit={formHandler}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
        </div>
        <div className={classes.control}>
          <label htmlFor="message">Your Message</label>
          <textarea
            name=""
            id="message"
            rows="5"
            value={text}
            onChange={(e) => setText(e.target.value)}
            required
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Send Message to Emmanuel !</button>
        </div>
      </form>
      {notification && (
        <Notification
          status={notificationData.status}
          title={notificationData.title}
          message={notificationData.message}
        />
      )}
    </section>
  );
}

export default ContactForm;
