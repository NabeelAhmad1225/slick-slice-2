import { useState } from "react";
import Input from "../inputs/Input";
import Checkbox from "../inputs/Checkbox";
import { QuoteStepContentForm } from "./QuoteStepContent";
import { ProjectIdea } from "./QuoteProjectIdea";
import { ProjectServices } from "./QuoteServiceType";
import Modal from "../../components/Modal";
import QuoteStepActions from "./QuoteStepActions";

export interface ClientInformation {
  full_name: string;
  email: string;
  phone: string;
}

interface Props extends QuoteStepContentForm {
  onSubmit: (body: ClientInformation | null) => void;
  services: ProjectServices | null;
}

export default function QuoteClientInformation({
  onSubmit,
  onNext,
  currentStep,
  step,
  services,
  onBack,
}: Props) {
  const [full_name, setFullName] = useState("");
  const regexFullName = /^[\p{L}\s'\-\u0100-\uFFFF]+$/;

  const [email, setEmail] = useState("");
  const regexEmail = /^[\w\-\.]+@([\w\-]+\.)+[\w\-]{2,}$/;

  const [phone, setPhone] = useState("");
  const regexPhone = /^\+?\d{1,3}[- ]?\d{2,3}[- ]?\d{3}[- ]?\d{4}$/;

  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const send = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    if (!services || !full_name || !email || !phone) {
      console.log("Missing information. Please complete all fields.");
      setLoading(false);
      return;
    }

    const emailBody = `
      <h3>New Service Request</h3>
      <p><strong>Full Name:</strong> ${full_name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Services Requested:</strong> ${services.services.join(
        ", "
      )}</p>
    `;

    const data = {
      from: email,
      subject: "Service Request",
      body: emailBody,
    };

    try {
      const res = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        console.log("Email sent successfully");
        setModalVisible(true);
        console.log("modal", modalVisible);
        resetForm();
      } else {
        const errorData = await res.json();
        console.log("Failed to send email:", errorData.message);
        console.log("Response Status:", res.status);
        console.log("Response Body:", errorData);
      }
    } catch (error) {
      console.log("Error sending email:", error);
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setFullName("");
    setEmail("");
    setPhone("");
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <>
      <form noValidate={true} className="grid gap-card " onSubmit={send}>
        <header className="-mb-2">
          <h2 className="text-responsive-2xl">Tell us about yourself </h2>
          <p className="text-error text-responsive-base">{error}</p>
        </header>
        <div className="md:col-span-2">
          <Input
            name="full_name"
            label="Full Name"
            placeholder="e.g. John Doe"
            value={full_name}
            required
            pattern={regexFullName}
            patternInstructions="Cannot contain numbers or special characters"
            onChange={(event: any) => setFullName(event.target.value)}
          />
        </div>
        <div className="md:col-span-2">
          <Input
            name="email"
            label="Email Address"
            placeholder="e.g. my-email@gmail.com"
            value={email}
            type="email"
            required
            pattern={regexEmail}
            onChange={(event: any) => setEmail(event.target.value)}
          />
        </div>
        <Input
          name="phone"
          label="Phone Number"
          placeholder="e.g. +44-555-555-5555 or 555-555-5555"
          value={phone}
          type="number"
          required
          pattern={regexPhone}
          onChange={(event: any) => setPhone(event.target.value)}
        />
      </form>
      <div className="w-full flex justify-between items-center mt-10">
        <QuoteStepActions
          isActive={currentStep == step}
          onBack={() => onBack && onBack(step - 1)}
          finalBtnText="nadd"
        />
        <button className="btn btn-primary" type="submit" onClick={send}  disabled={loading}>
          {loading ? <span className="loader" /> : "Submit"}
        </button>
      </div>

      <Modal
        isVisible={modalVisible}
        onClose={closeModal}
        title="Success!"
        message="Your email has been sent successfully."
      />
    </>
  );
}
