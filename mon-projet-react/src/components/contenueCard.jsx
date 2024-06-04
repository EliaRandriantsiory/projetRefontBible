import React from 'react';
const ContentCard = ({ title, description }) => (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
      <p className="text-gray-500">{description}</p>
    </div>
  );
  export default ContentCard;