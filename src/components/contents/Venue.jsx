import React from 'react';
// import sanchi from '../../assets/sanchi_1.jpeg';
// import mp1 from '../../assets/mp1.jpg';
import oa1 from '../../assets/oa1.jpg';
// import iete from '../../assets/IETE.png';
import hostelImg from '../../assets/hostell.jpg'; // Ensure this path is correct

const Venue = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white p-6 rounded-lg shadow-lg text-justify leading-relaxed">
        <h1 className="text-3xl font-extrabold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-700 text-center">
          Conference Venue
        </h1>

        <p className="text-lg font-semibold text-gray-800 mb-4">
          <strong>NIT Goa</strong>
        </p>

        <p className="text-gray-700 mb-4">
          <strong>About Us:</strong>
          <br />
          <span className="text-gray-700">
            <strong>National Institute of Technology Goa</strong> (also known as NIT Goa or NITG) is an engineering institution in the Indian state of Goa. It was founded in 2010 being one of the 31 National Institutes of Technology in India and is recognised as an Institute of National Importance. It admitted its first batch of students in 2010-11.
            <br />
            <br />
            The campus is located at Farmagudi, Ponda approximately 29 km south-side of Panaji, the capital of Goa and it is a temporary campus. The state of Goa is well connected by roadways, railways and airways with various parts of the country. At present NIT Goa is temporarily accommodated and functioning in the Goa Engineering College (GEC) Campus located at Farmagudi, Goa. For the permanent campus, an area of 300 acres, spanning from Cuncolim to Balli, was identified by the state but the project ran into trouble when locals objected to the proposal as 50% exclusive reservation was not promised for Goan students. The former Chief Minister of Goa, Mr. Manohar Parrikar reiterated that no land will be given to the institute if 50% reservation is not provided for Goan students. The Government of India finally decided to reserve 50 per cent of the seats exclusively for Goan students in the National Institute of Technology, Goa from academic year 2012-13. Now NIT Goa is operating from its permanent campus.
          </span>
        </p>

        <p className="text-gray-700 mb-4">
          <a href="https://maps.app.goo.gl/3dDRgGwNECKsHryj8" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 hover:underline transition duration-300 ease-in-out">
            Maps Link to NIT Goa
          </a>
        </p>

        <p className="text-gray-700 mb-4">
          <strong>Hostel:</strong>
          Coming soon
          {/* <br />
          1. Single bed room rent: Rs 1000/- per day
          <br />
          2. Double bed room rent: Rs 1500/- per day
          <br />
          3. Triple bed room rent: Rs 2000/- per day */}
        </p>

        <p className="text-gray-700 mb-4">
          <strong>For any accommodation query:</strong>
          <br />
          coming soon
          {/* Name: Sudhir Singh */}
          <br />
          {/* Mobile Contact: +91-9926225555 */}
        </p>

        <div className="flex justify-center mb-6">
          <img src={hostelImg} alt="Hostel" width="300" height="150" className="rounded-md shadow-md" />
        </div>

        <div className="text-gray-700 mb-6">
          <h2 className="text-lg font-bold mb-2">HOTELS:</h2>
          <ul className="list-disc pl-5">
            Coming soon
            {/* <li><a href="https://www.radissonhotels.com/en-us/hotels/radisson-blu-indore" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 hover:underline transition duration-300 ease-in-out">Radisson Blu Hotel</a></li>
            <li><a href="https://www.essentiahotels.in/indore" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 hover:underline transition duration-300 ease-in-out">Essentia Luxury Hotel</a></li>
            <li><a href="https://sayajihotels.com/our-hotels/sayaji-indore/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 hover:underline transition duration-300 ease-in-out">Sayaji Indore</a></li>
            <li><a href="https://www.marriott.com/en-us/hotels/idrmh-indore-marriott-hotel/overview/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 hover:underline transition duration-300 ease-in-out">Marriott Hotel</a></li>
            <li><a href="https://www.lemontreehotels.com/lemon-tree-hotel/indore/hotel-indore" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 hover:underline transition duration-300 ease-in-out">Lemon Tree Hotel</a></li>
            <li><a href="https://www.monksnirvanaa.com/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 hover:underline transition duration-300 ease-in-out">Monk's Nirvanaa Hotel & Resort</a></li>
            <li><a href="https://www.makemytrip.com/hotels/hotel_the_grand_shaurya-details-indore.html" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 hover:underline transition duration-300 ease-in-out">The Grand Shaurya</a></li>
            <li><a href="https://www.makemytrip.com/hotels/alba_inn_indore-details-indore.html" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 hover:underline transition duration-300 ease-in-out">Alba Inn Indore</a></li>
            <li><a href="https://www.justdial.com/Indore/Babashree-Hotels-And-Resorts-Behind-Airport-Thana-Bijasan-Road/0731PX731-X731-180821034635-D4G1_BZDET" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 hover:underline transition duration-300 ease-in-out">Babashree Hotel</a></li>
            <li><a href="https://www.makemytrip.com/hotels/hotel_siddhant-details-indore.html" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 hover:underline transition duration-300 ease-in-out">Hotel Siddhant</a></li> */}
          </ul>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-6">
          <img src={oa1} alt="OU1" className="w-80 h-auto object-cover rounded-md shadow-md" />
        </div>

        <p className="text-gray-600 text-center italic mt-6">
          <strong>We look forward to welcoming you to a wonderful conference experience!</strong>
        </p>
      </div>
    </div>
  );
};

export default Venue;
