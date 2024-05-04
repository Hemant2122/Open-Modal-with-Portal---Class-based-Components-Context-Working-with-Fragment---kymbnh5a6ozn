import { useState } from 'react';
import Modal from '../components/Modal';

const HomePage = () => {
  
  const [isModelOpen, setIsModelOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsModelOpen(true)}>Open Modal</button>

      <Modal isOpen={isModelOpen} onClick={() => setIsModelOpen(false)}>
        <h2>This is a Modal</h2>
        <p>Using React Portals with Next.js</p>
        <button onClick={() => setIsModelOpen(false)} >Close Modal</button>
      </Modal>
    </div>
  );
};

export default HomePage;
