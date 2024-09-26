import { useState } from 'react';
import Input from '../inputs/Input';
import Checkbox from '../inputs/Checkbox';
import { QuoteStepContentForm } from './QuoteStepContent';

export interface ClientInformation {
  full_name: string;
  country: string;
  email: string;
  phone: string;
  nda: boolean;
}

interface Props extends QuoteStepContentForm {
  onSubmit: (body: ClientInformation | null) => void;
  sendEmail: () => Promise<void>; // Change this to indicate it returns a promise
}

export default function QuoteClientInformation({
  onSubmit,
  onNext,
  currentStep,
  step,
  sendEmail,
}: Props) {
  const [full_name, setFullName] = useState('John Doe');
  const regexFullName = /^[\p{L}\s'\-\u0100-\uFFFF]+$/;

  const [email, setEmail] = useState('my-email@gmail.com');
  const regexEmail = /^[\w\-\.]+@([\w\-]+\.)+[\w\-]{2,}$/;

  const [phone, setPhone] = useState('+1-555-555-5555');
  const regexPhone = /^\+?\d{1,3}[- ]?\d{2,3}[- ]?\d{3}[- ]?\d{4}$/;

  const [country, setCountry] = useState('USA');
  const regexCountry = /^[a-zA-Z\s]+$/;

  const [nda, setNDA] = useState(false);

  const [error, setError] = useState('');

  async function onclickSubmitForm(event: any) {
    event.preventDefault();

    const form: HTMLFormElement = event.target;

    if (form.reportValidity()) {
      const clientData = {
        full_name,
        country,
        email,
        phone,
        nda,
      };


      onSubmit(clientData);
      
   
      await sendEmail(); 

    //   onNext(step + 1);
      setError('');
    } else {
      setError('Please fill in the form correctly.');
      onSubmit(null);
    }
  }

  return (
    <form
      noValidate={true}
      className="grid gap-card md:grid-cols-2"
      onSubmit={onclickSubmitForm} // Call onclickSubmitForm on submit
    >
      <header className="-mb-2">
        <h2 className="text-responsive-2xl">Tell us about yourself</h2>
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
        placeholder="e.g. +1-555-555-5555 or 555-555-5555"
        value={phone}
        type="tel"
        required
        pattern={regexPhone}
        onChange={(event: any) => setPhone(event.target.value)}
      />
      <Input
        name="country"
        label="Country"
        placeholder="e.g. USA"
        value={country}
        pattern={regexCountry}
        onChange={(event: any) => setCountry(event.target.value)}
      />

      <Checkbox
        label="I would like to sign an NDA"
        name="nda"
        value="nda"
        checked={nda}
        onChangeBoolean={(event) => setNDA(event)}
      />
      <div className="md:col-span-2">
        <button  className="btn btn-primary" type="submit"> {/* Change to type="submit" */}
          Submit
        </button>
      </div>
    </form>
  );
}
