import React from 'react';

const HostelRules = () => {
  return (
    <div className='container mx-auto my-10'>
      <div className='grid lg:grid-cols-2 gap-4 md:grid-cols-1'>
        <div className=''>
          <h2 className='text-2xl text-secondary m-2'>Hostel Rules and Regulations:-</h2>
          <div className='bg-neutral p-1'></div>
          <ul className='text-left grid gap-3 text-white p-3' >
            <li className='text-white'>Students are not allowed to use electric stoves, heaters etc in rooms except in designated places.</li>
            <li className='text-accent'>Smoking, alcohol & Narcotic consumption is strictly prohibited in and around the hostel premises. Strict action will be taken against offenders.</li>
            <li className='text-white'>All lights must be switched off before 11 pm in the rooms. Only study lamps are permited.</li>
            <li className='text-accent'>The quantity of food will be unlimited except in the case of special items.</li>
            <li className='text-white'>The students are expected to be iside the hostel by 9.00 pm on weekdays and at 9.30 pm on saturday and sunday.</li>
            <li className='text-accent'>The students are expected to give their biometic roll before 9.30 pm on week days and before 10.00 pm on weekdays.</li>

          </ul>
        </div>
        <div className=''>
          <h2 className='text-2xl text-secondary m-2'>Regular Menu:-</h2>
          <div className='bg-neutral p-1'></div>
          <div class=" ">
            <table class="table">
              <thead>
                <tr >
                  <th>Days</th>
                  <th>BreakFast</th>
                  <th>Lunch</th>
                  <th>Dinner</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>Sunday</th>
                  <td>Bread</td>
                  <td>Quality Control Specialist</td>
                  <td>Blue</td>
                </tr>
                <tr>
                  <th>Monday</th>
                  <td>Poha</td>
                  <td>Desktop Support Technician</td>
                  <td>Purple</td>
                </tr>
                <tr>
                  <th>Tuesday</th>
                  <td>Idly</td>
                  <td>Tax Accountant</td>
                  <td>Red</td>
                </tr>
                <tr>
                  <th>Wednesday</th>
                  <td>White Pongal</td>
                  <td>Quality Control Specialist</td>
                  <td>Blue</td>
                </tr>
                <tr>
                  <th>Thursday</th>
                  <td>Semiya Kichhadi</td>
                  <td>Desktop Support Technician</td>
                  <td>Purple</td>
                </tr>
                <tr>
                  <th>Friday</th>
                  <td>Dosa</td>
                  <td>Tax Accountant</td>
                  <td>Red</td>
                </tr>
                <tr>
                  <th>Saturday</th>
                  <td>Poha Samosa</td>
                  <td>Tax Accountant</td>
                  <td>Red</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HostelRules;