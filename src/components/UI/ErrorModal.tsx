import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';

import './ErrorModal.scss';

type ErrorModalProps = {
  className: string;
  title: string;
  message: string;
  resetError: () => void;
};

type BackdropProps = {
  className: string;
  resetError: () => void;
};
type ModalOverlayProps = {
  className: string;
  title: string;
  message: string;
  resetError: () => void;
};
const Backdrop = ({ resetError }: BackdropProps) => {
  return <div className="backdrop" onClick={resetError} />;
};

const ModalOverlay = ({ resetError, title, message }: ModalOverlayProps) => {
  return (
    <Card className="modal">
      <header className="header">
        <h2>{title}</h2>
      </header>
      <div className="content">
        <p>{message}</p>
      </div>
      <footer className="actions">
        <button onClick={resetError}>OK</button>
      </footer>
    </Card>
  );
};

const ErrorModal = ({
  className,
  title,
  message,
  resetError,
}: ErrorModalProps) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop className={className} resetError={resetError} />,
        document.getElementById('backdrop-root')
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={title}
          message={message}
          className={className}
          resetError={resetError}
        />,
        document.getElementById('overlay-root')
      )}
    </>
  );
};

export default ErrorModal;
