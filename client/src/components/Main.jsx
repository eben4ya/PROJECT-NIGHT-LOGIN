import React from 'react'

const Main = () => {
  return (
    <div class="benefit-container" id="benefit">
            <h2>Benefits</h2>
            <div className="row">
            <div class="service">
                <i class="fa-solid fa-list-check"></i>
                <h3>Minimizing Missed Schedule</h3>
                <p>There are due date and activity status</p>
              </div>
            <div class="service">
                <i class="fa-solid fa-hand-holding-heart"></i>
                <h3>Relieving Your Stress</h3>
                <p>Enter into a list of all activities in detail</p>
            </div>
            <div class="service">
                <i class="fa-sharp fa-solid fa-arrow-up-right-dots"></i>
                <h3>Increases Productivity</h3>
                <p>Organized activity and do the best</p>
            </div>
            </div>
    </div>
  )
}

export default Main
