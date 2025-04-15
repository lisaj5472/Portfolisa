import { useState } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .send(
        "service_g7adymt",
        "template_13986ve",
        {
          from_name: formState.name,
          reply_to: formState.email,
          message: formState.message,
        },
        "3n8wPzKzKGTs3YAVD"
      )
      .then(() => {
        alert("Thank for your message! I will get back to you soon.");
        setFormState({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.error("EmailJS error:", error);
        alert("Something went wrong. Please try again.");
      });
  };

  return (
    <div className="container-default py-12 space-y-8">
      <h2 className="text-heading">Get in Touch</h2>
      <p className="text-body max-w-2xl">
        Whether you're interested in working together or just want to say hi,
        I’d love to hear from you!
      </p>

      <form onSubmit={handleSubmit} className="space-y-6 max-w-xl">
        <div>
          <label htmlFor="name" className="block font-medium text-primary mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formState.name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent"
            required
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block font-medium text-primary mb-1"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formState.email}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent"
            required
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="block font-medium text-primary mb-1"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formState.message}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-4 py-2 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-accent"
            required
          />
        </div>
        <button
          type="submit"
          className="btn bg-[color:var(--color-primary)] hover:bg-[color:var(--color-accent)] text-white px-6 py-2 rounded-md font-semibold transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
