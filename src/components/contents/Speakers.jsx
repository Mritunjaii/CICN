import React from 'react';

const Speakers = () => {
  return (
    <div className="container mx-auto px-4 py-6 sm:px-6 sm:py-8">
      {/* Background Gradient */}
      <div className="bg-gradient-to-r from-teal-500 to-cyan-600 p-4 sm:p-6 rounded-lg shadow-lg">
        <center>
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6">
            Keynote Speakers
          </h1>
        </center>
        <div className="space-y-6 sm:space-y-8 ">
          {/* Speaker 1 */}
          <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 border border-gray-200 text-justify">
            <div className="flex flex-col sm:flex-row items-center sm:space-x-4">
              <img 
                src="src/assets/avatar.png" 
                alt="Dr. Noorbakhsh Amiri Golilarz" 
                className="w-24 h-24 sm:w-32 sm:h-32 rounded-full object-cover shadow-md"
              />
              <div className="flex-1 mt-4 sm:mt-0">
                <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-2">
                Prof Seilov Shakhmara
                </h2>
                <p className="text-sm sm:text-base text-gray-600 mb-4">
                  L.N. Gumilyov Eurasian National University, Kazakhstan
                </p>
              </div>
            </div>
            <p className="text-gray-800 font-medium mb-2">Biography:</p>
            <p className="text-sm sm:text-base text-gray-700">
            President of the Kazakh Academy of Infocommunications, Dean of the Information Technologies Faculty of the L.N. Gumilyov Eurasian National University, candidate of technical sciences (1990) and doctor of economic sciences (2006), professor, academician of the International Academy of Communications (2004).
Seilov Sh. has graduated in 1983 from the Leningrad (St. Petersburg) Electrotechnical Institute of Communications with a degree in automatic telecommunications. Since 1996, he worked in executive positions in Kazakh telecom JSC, Kazteleradio JSC.
In 2007, he founded the Kazakh Academy of Infocommunications, a non-governmental scientific consulting fund, deals with market analysis and improvement of state regulation of the telecommunications sector, development of regulatory legal acts and technical regulations in the field of ICT. For the development of the Institute of Innovation, a project has been developed for the selection and commercialization of start-up projects using crowdfunding and cryptocurrency.
Under his leadership, the “Model of universal service and provision of broadband access to the Internet in rural settlements of the republic”, “Opportunities and potential for transit of telecommunication traffic Eastern Europe - Southeast Asia of the Republic of Kazakhstan” for the Ministry of Health of the Republic of Kazakhstan “Development and use of telemedicine systems for rural settlements of Kazakhstan ", the Ministry of Labor and Social Protection " Intelligent information system for searching for vacancies and personnel using elements of artificial intelligence ", the Ministry of Industry and Trade " Identification of critical technologies for the industrial and innovative development of the economy of Kazakhstan in the framework of foresight research. "
Seilov Sh. has experience in international projects, he was the national coordinator of the Center of Excellence of the International Telecommunication Union, an expert of the European Bank for Development and Reconstruction in the project "Liberalization of the telecommunications market of the CIS countries", proposed to strengthen the integration of countries and competition to zero roaming rates and symmetric interconnect between telecom operators during traffic exchange. Development of Seilov Sh.Zh., the “Methodology for determining economically fair payments for the use of radio frequency resources by telecom operators” was adopted by the ITU Radiocommunication Bureau as a national contribution and the norm of an article in the Law of the Republic of Kazakhstan “On Communications” and the Tax Code of the Republic of Kazakhstan. For a qualitative increase in human capital and international certification of Kazakhstan's ICT specialists, a network of Cisco network academies has been created in the Republic of Kazakhstan, currently this project is supported by Cisco and proposed to the countries of Central Asia.
</p>
          </div>

          {/* Speaker 2 */}
          <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 border border-gray-200 text-justify">
            <div className="flex flex-col sm:flex-row items-center sm:space-x-4">
              <img 
                src="src/assets/gohel.jpeg" 
                alt="Prof. Hardik Gohel" 
                className="w-24 h-24 sm:w-32 sm:h-32 rounded-full object-cover shadow-md"
              />
              <div className="flex-1 mt-4 sm:mt-0">
                <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-2">
                  Prof. Hardik Gohel
                </h2>
                <p className="text-sm sm:text-base text-gray-600 mb-4">
                  University of Houston at Victoria
                </p>
              </div>
            </div>
            <p className="text-gray-800 font-medium mb-2">Biography:</p>
            <p className="text-sm sm:text-base text-gray-700">
              Dr. Gohel has extensive research experience in artificial intelligence and his research projects have involved cyber test automation and monitoring, smart bandages for wound monitoring, big data for security intelligence, trustworthy cyberspace for security and privacy of social media, predictive maintenance for nuclear infrastructure, and database and mobile forensics infrastructure. Dr. Gohel is also working on how to prepare a quality diversified workforce with artificial intelligence in science, technology, engineering, and mathematics (STEM) education.

              His independent research program is inspired by his graduate and postdoc studies. He is interested in designing and developing robust artificial intelligence and cybersecurity solutions to make human life better. Dr. Gohel is actively working with United States Federal funding agencies and national labs for research collaborations. He is also interested in linkages and MOUs with government, academia, and industry to foster individual and institutional partnerships in a natural and sustainable manner.

              Dr. Gohel welcomes motivated undergraduate and graduate students to join his research team and contact him.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Speakers;
