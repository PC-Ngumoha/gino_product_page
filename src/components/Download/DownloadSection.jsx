import './Download.css';

import { useState } from 'react';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import DonationModal from '../Donation/DonationModal';

export default function DownloadSection() {
  const [show, setShow] = useState(false);
  const [timeToProceed, setTimeToProceed] = useState(10);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const routeToGithubRepo = () => {
    window.open(
      'https://github.com/PC-Ngumoha/Gino',
      '_blank',
      'noopener,noreferrer  '
    );
  };

  return (
    <>
      <section className="download-section" id="download">
        <h1 className="download-title">Get Gino Now!</h1>
        <p className="download-subtitle">
          Start your prehistoric adventure today. Available right now on your
          development platforms.
        </p>
        <div className="download-platforms">
          <div className="platform">
            {/* Desktop Icon */}
            <svg
              width="100"
              height="100"
              fill="none"
              stroke="#4ea44e"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <rect x="4" y="4" width="16" height="12" rx="2" />
              <rect x="9" y="18" width="6" height="2" rx="1" />
            </svg>
            <h2>Desktop</h2>
            <p>Windows, Mac &amp Linux</p>
            <Button className="download-btn cactus-green" onClick={handleShow}>
              Play
            </Button>
          </div>
        </div>
        <p className="download-footer">
          Free to play &bull No ads &bull Smooth gaming experience
        </p>
      </section>

      {/* Modal to be displayed when we click on Download button */}
      <Modal show={show} onHide={handleClose} size="lg" centered>
        <Modal.Header closeButton />
        <Modal.Body>
          <DonationModal setter={setTimeToProceed} />
        </Modal.Body>
        <Modal.Footer>
          {/* TODO: Will change this later so that it actually routes to the download start */}
          <Button
            onClick={routeToGithubRepo}
            className="cactus-green skip-btn"
            size="lg"
            disabled={timeToProceed > 0}
          >
            {timeToProceed > 0
              ? `Github link in ${timeToProceed} second${
                  timeToProceed > 1 ? 's' : ''
                }`
              : 'Proceed to Github'}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
