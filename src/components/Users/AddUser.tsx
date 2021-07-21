import React, { FormEvent, useState, useRef } from 'react';

import Card from '../UI/Card';
import ErrorModal from '../UI/ErrorModal';
import './AddUsers.scss';

type AddUserProps = {
  input: string;
  onAddUser: (uName: string, uAge: number) => void;
};

type ErrorStateType = {
  title: string;
  message: string;
};

const AddUser = ({ input, onAddUser }: AddUserProps) => {
  const usernameInputRef = useRef(null);
  const ageInputRef = useRef(null);

  const [error, setError] = useState<ErrorStateType>({
    title: '',
    message: '',
  });

  const addUserHandler = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const username = usernameInputRef.current.value;
    const age = ageInputRef.current.value;

    if (username.trim().length === 0 || age === undefined) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age (non emty values).',
      });
      return;
    }
    if (+age < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age(>0).',
      });
      return;
    }
    onAddUser(username, age);
    usernameInputRef.current.value = '';
    ageInputRef.current.value = '';
  };

  const resetError = () => {
    setError({ title: '', message: '' });
  };

  return (
    <>
      {error.title && error.message && (
        <ErrorModal
          className="modal"
          title={error.title}
          message={error.message}
          resetError={resetError}
        />
      )}
      <Card className={input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" ref={usernameInputRef} />
          <label htmlFor="age">Age(Years)</label>
          <input id="age" type="number" ref={ageInputRef} />
          <button className="button" type="submit">
            Add User
          </button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
