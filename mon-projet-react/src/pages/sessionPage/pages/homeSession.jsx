import React, { useEffect, useState } from "react";
const Home_session = () => {
    return (
        <div className="flex flex-wrap justify-between h-[88vh]">
        <div className="bg-gray-200 p-4 rounded-lg shadow-md max-w-[15vw] hidden md:block">
          <h3 className="text-lg font-bold mb-2">Column 1</h3>
          <p>This is the content of the first column.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md flex-1 max-h-[88vh] md:flex-auto overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
          <h2 className="text-2xl font-bold mb-4 h-[1000px]">Main Column</h2>
          <p className="mb-4">This is the content of the main column, which is larger than the others.</p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            Learn More
          </button>
        </div>
        <div className="bg-gray-200 p-4 rounded-lg shadow-md max-w-[15vw] hidden md:block">
          <h3 className="text-lg font-bold mb-2">Column 3</h3>
          <p>This is the content of the third column.</p>
        </div>
      </div>
    )
}
export default Home_session;