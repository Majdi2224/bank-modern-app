import React from 'react';
import { stats } from '../constants'; // Use 'stats' instead of 'Status'
import styles from '../style'; // Correct import of styles

function StatsComponent() { // Renamed to avoid conflict
  return (
    <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
      {stats.map((stat) => ( // Use 'stats' here
        <div key={stat.id} className={`flex-1 flex justify-start items-center flex-row m-3 sm:w-1/3 w-full px-4 py-6 text-center`}>
          <h4 className='font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-white'>
            {stat.value}
          </h4>
          <p className='font-poppins xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-gradient uppercase ml-3'>
            {stat.title}
          </p>
        </div>
      ))}
    </section>
  );
}

export default StatsComponent; // Export under the new name
