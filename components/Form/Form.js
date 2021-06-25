import React, { useState } from 'react';
import Input from './Input';
import Email from './Email';
import SubmitButton from './../Button/SubmitButton';

const Form = ({ onSubmitCB }) => {
  const [emails, setEmails] = useState([]);

  const addEmail = (email) => {
    setEmails(currentEmails => !currentEmails.includes(email) ? [...currentEmails, email] : currentEmails);
  }

  const removeEmail = (email) => {
    setEmails(currentEmails => currentEmails.filter((cEmail) => cEmail !== email));
  }

  const onSubmit = () => {
    onSubmitCB(emails);
  }

  return (
    <div className="min-w-screen md:min-h-screen flex items-center justify-center font-sans ">
      <div className="rounded bg-gray-300 w-full lg:w-5/6 md:shadow-lg">
        <div className="p-6 m-4 md:w-full sm:w-5/6">
          <Input title={'Tutors'} placeholder={'Email'} addCB={addEmail} />
          <div>
            { emails.map((email, i) => (
              <Email key={i} email={email} removeCB={removeEmail}/>
            ))}
          </div>
        </div>
        <div className="px-9 pb-9 md:w-full sm:w-5/6">
          <SubmitButton
            data-testid='form-submit-btn'
            onClick={onSubmit}
            text={'Get Common Students'}
            disabled={emails.length === 0}
          />
        </div>
      </div>
    </div>
  )
}

export default Form;