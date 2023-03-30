import "./Contact.css";
import { forwardRef, useRef, useImperativeHandle } from "react";
const Contact = forwardRef((props, ref) => {
  const contactRef = useRef();

  useImperativeHandle(ref, () => ({
    scrollIntoView: () => {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    },
  }));

  return (
    <div className="contact" ref={contactRef}>
      <h3>CONTACT</h3>
      <form name="contact" method="POST" data-netlify="true">
          <input type="text" name="name" placeholder="Name" className="test" />
          <input type="email" name="email" placeholder="Email" />
          <textarea name="message" placeholder="Message"></textarea>
          <button type="submit">Send</button>
      </form>
    </div>
  );
});

export default Contact;
