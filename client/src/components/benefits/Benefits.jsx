import React from 'react';
import './Benefits.css';

const Benefits = () => {
  return (
    <div className="w-full h-screen px-8">
      <div className="mt-32" id="benefit">
        <h2 className="text-center pt-10 mb-6 font-bold text-3xl text-black font-serif">
          B E N E F I T S
          <span className="block absolute bg-purple-500 w-10 h-1 top-0 left-1/2 transform -translate-x-1/2"></span>
        </h2>
        <div className="mt-16" id="benefit">
          <div className="grid grid-cols-3 sm:grid-cols-auto-fit sm:grid-cols-minmax-250px sm:grid-cols-1fr gap-6">
            <div className="service text-center py-2 px-1 rounded-md text-sm cursor-pointer bg-transparent transition-transform transition-background duration-500 hover:bg-purple-500 hover:text-white hover:scale-110">
              <i className="text-4xl mb-3 text-indigo-700 fas fa-list-check"></i>
              <h3 className="font-bold">Minimizing Missed Schedule</h3>
              <p>There are due date and activity status</p>
            </div>
            <div className="service text-center py-2 px-1 rounded-md text-sm cursor-pointer bg-transparent transition-transform transition-background duration-500 hover:bg-purple-500 hover:text-white hover:scale-110">
              <i className="text-4xl mb-3 text-indigo-700 fas fa-hand-holding-heart"></i>
              <h3 className="font-bold">Relieving Your Stress</h3>
              <p>Enter into a list of all activities in detail</p>
            </div>
            <div className="service text-center py-2 px-1 rounded-md text-sm cursor-pointer bg-transparent transition-transform transition-background duration-500 hover:bg-purple-500 hover:text-white hover:scale-110">
              <i className="text-4xl mb-3 text-indigo-700 fas fa-arrow-up-right-dots"></i>
              <h3 className="font-bold">Increases Productivity</h3>
              <p>Organized activity and do the best</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
