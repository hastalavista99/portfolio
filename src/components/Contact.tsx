import React, { useState } from "react";

interface ContactForm {
  name: string;
  email: string;
  message: string;
}

const initialForm: ContactForm = {
  name: "",
  email: "",
  message: "",
};

const socials = [
  { name: "GitHub", href: "https://github.com/hastalavista99", icon: "fab fa-github" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/jackson-githumu/", icon: "fab fa-linkedin" },
  { name: "Twitter", href: "https://x.com/davidjaxon1", icon: "fab fa-x-twitter" },
];

const Contact: React.FC = () => {
  const [form, setForm] = useState<ContactForm>(initialForm);
  const [errors, setErrors] = useState<Partial<ContactForm>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (field: ContactForm) => {
    const errs: Partial<ContactForm> = {};
    if (!field.name.trim()) errs.name = "Name is required.";
    if (!field.email.trim() || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(field.email)) errs.email = "Valid email required.";
    if (!field.message.trim()) errs.message = "Message is required.";
    return errs;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: undefined });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate(form);
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      setSubmitted(true);
      setForm(initialForm);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Contact</h2>
        <form className="space-y-6" onSubmit={handleSubmit} noValidate>
          <div>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={form.name}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400 ${errors.name ? "border-red-500" : "border-gray-300"}`}
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400 ${errors.email ? "border-red-500" : "border-gray-300"}`}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>
          <div>
            <textarea
              name="message"
              placeholder="Message"
              value={form.message}
              onChange={handleChange}
              rows={4}
              className={`w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400 ${errors.message ? "border-red-500" : "border-gray-300"}`}
            />
            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
          </div>
          <button type="submit" className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition font-medium">Send Message</button>
          {submitted && <p className="text-green-600 text-center mt-2">Message sent! (not really, just UI)</p>}
        </form>
        <div className="flex gap-6 justify-center mt-8">
          {socials.map((social) => (
            <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 text-2xl">
              <i className={social.icon}></i>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
