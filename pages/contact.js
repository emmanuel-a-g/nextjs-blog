import ContactForm from "../components/contact/contactForm";
import Head from "next/head";
function ContactPage() {
  return (
    <div style={{ all: "unset" }}>
      <Head>
        <title>Contact Me</title>
        <meta name="description" content="Send me your messages" />
      </Head>
      <ContactForm />
    </div>
  );
}

export default ContactPage;
