import React, { useState } from 'react';

function FactoryMap() {
  const [showMap, setShowMap] = useState(false);

  return (
    <div className="w-full p-6 text-center">
      <h2 onClick={() => setShowMap(true)}
        className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded shadow transition"
      >
        Our Factory Location
      </h2>



      {showMap && (
        <div className="mt-6 w-full h-[450px]">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2941.605936238465!2d85.60439297442733!3d26.553467675438515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ec59203c159ae1%3A0x62931b95551bd21f!2sGenpur%20Chowk!5e1!3m2!1sen!2sin!4v1754208006418!5m2!1sen!2sin" ></iframe>
        </div>
      )}
    </div>
  );
}

export default FactoryMap;
