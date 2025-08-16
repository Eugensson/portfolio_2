"use client";

import { useEffect, useState } from "react";
import { GoCheckCircleFill } from "react-icons/go";
import { useForm, ValidationError } from "@formspree/react";

const FORMID = process.env.NEXT_PUBLIC_FORMSPREE_ID;

export const FeedbackForm = () => {
  const [state, handleSubmit] = useForm(FORMID!);
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    message: "",
  });
  const [showIcon, setShowIcon] = useState<boolean>(false);

  useEffect(() => {
    if (!state.succeeded) return;

    setShowIcon(true);
    setFormData({
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
      message: "",
    });

    const timer = setTimeout(() => {
      setShowIcon(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [state.succeeded]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    handleSubmit(formData);
  };

  return (
    <form
      onSubmit={handleFormSubmit}
      className="flex flex-col gap-6 w-full max-w-[480px]"
    >
      <div className="flex gap-8">
        <div className="flex-1">
          <label
            htmlFor="firstname"
            className="block mb-2 text-sm font-medium text-primary"
          >
            First Name <span className="text-accent">*</span>
          </label>
          <input
            type="text"
            name="firstname"
            id="firstname"
            value={formData.firstname}
            onChange={handleChange}
            className="input"
            placeholder="First Name"
            required
          />
        </div>
        <div className="flex-1">
          <label
            htmlFor="lastname"
            className="block mb-2 text-sm font-medium text-primary"
          >
            Last Name <span className="text-accent">*</span>
          </label>
          <input
            type="text"
            name="lastname"
            id="lastname"
            value={formData.lastname}
            onChange={handleChange}
            className="input"
            placeholder="Last Name"
            required
          />
        </div>
      </div>
      <div>
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-primary"
        >
          Email <span className="text-accent">*</span>
        </label>
        <input
          type="text"
          name="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          className="input"
          placeholder="your.email@example.com"
          required
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>
      <div>
        <label
          htmlFor="phone"
          className="block mb-2 text-sm font-medium text-primary"
        >
          Phone number <span className="text-accent">*</span>
        </label>
        <input
          type="text"
          name="phone"
          id="phone"
          value={formData.phone}
          onChange={handleChange}
          className="input"
          placeholder="+1 (555) 000-0000"
        />
      </div>
      <div>
        <label
          htmlFor="message"
          className="block mb-2 text-sm font-medium text-primary"
        >
          Message <span className="text-accent">*</span>
        </label>
        <textarea
          name="message"
          id="message"
          value={formData.message}
          onChange={handleChange}
          className="textarea"
          placeholder="Leave me a message..."
          rows={5}
          required
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
      </div>
      <button
        type="submit"
        disabled={state.submitting}
        className="btn btn-accent flex justify-center items-center gap-2"
      >
        {state.submitting ? (
          <span>Sending...</span>
        ) : (
          <>
            <GoCheckCircleFill
              className={`absolute text-white text-lg transition-opacity duration-500 ease-in-out ${
                showIcon ? "opacity-100" : "opacity-0"
              }`}
            />
            <span
              className={`transition-opacity duration-500 ease-in-out ${
                showIcon ? "opacity-0" : "opacity-100"
              }`}
            >
              Send message
            </span>
          </>
        )}
      </button>
    </form>
  );
};
