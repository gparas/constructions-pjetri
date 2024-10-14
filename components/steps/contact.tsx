"use client";

import React, { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { selectors } from "@/store/stepper";
import emailjs from "@emailjs/browser";

import Actions from "../actions";
import Loader from "../loader";
import Header from "./header";

const Contact = () => {
  const steps = useSelector(selectors.getSteps);
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const form = useRef<HTMLFormElement | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;
    setLoading(true);
    setError(null);

    const formData = new FormData(form.current as HTMLFormElement);

    const formValues: { [key: string]: FormDataEntryValue } = {};
    formData.forEach((value, key) => {
      formValues[key] = value;
    });

    emailjs
      .sendForm("service_x5hcwza", "template_l8eof3u", form.current, {
        publicKey: "OwAgwW27mjzkBHrtt",
      })
      .then(
        () => {
          router.push("/prosfora/thank-you/");
        },
        (error) => {
          console.log("FAILED...", error.text);
          setError("Κάτι πήγε στραβά. Παρακαλώ δοκιμάστε ξανά.");
        }
      )
      .finally(() => {
        setLoading(false);
        form.current?.reset();
      });
  };

  return (
    <>
      {error && (
        <div
          className="p-4 text-sm text-red-800 rounded-lg bg-red-50"
          role="alert"
        >
          {error}
        </div>
      )}
      {loading && (
        <Loader className="absolute inset-x-0 inset-y-0 bg-white bg-opacity-75" />
      )}
      <Header subtitle="Συμπληρώστε τα στοιχεία σας για να σας στείλουμε την προσφορά" />
      <form
        ref={form}
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 flex-grow sm:flex-grow-0"
      >
        <div className="flex flex-col gap-4 flex-grow sm:flex-grow-0">
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="form-control"
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Τηλέφωνο"
            className="form-control"
            required
            pattern="[0-9]{10}"
            title="Εισάγετε 10 ψηφία"
          />
          <textarea
            name="comments"
            placeholder="Σχόλια"
            className="form-control"
            rows={5}
          />
        </div>
        {Object.entries(steps)
          .filter(([key]) => key !== "activeStep")
          .map(([key, value]) => (
            <input key={key} type="hidden" name={key} value={value || "-"} />
          ))}
        <Actions lastStep />
      </form>
    </>
  );
};

export default Contact;
