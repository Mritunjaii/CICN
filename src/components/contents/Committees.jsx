import React from "react";

const committees = [
  {
    title: "Honorary Chairs",
    members: [
      "Prof. OR Jaiswal, Director NIT Goa",
      "Prof. GS Tomar, IEEE MP Chair",
      // "Prof. Sameer Nanivadekar, IEEE Bombay",
      // "Prof. Garima Ghai, Oriental University, Indore",
    ],
  },
  {
    title: "General Chairs",
    members: [
      "Prof. Manish Dixit, MITS Gwalior",
      "Dr. Lalat Indu Giri, NIT Goa",
      "Dr. Shashikant Patil, IEEE Bombay Section",
    ],
  },
  {
    title: "General Co-Chairs",
    members: [
      "Dr. Abul Bashar, PMU, United Arab Emirates",
      "Dr. Robin Singh Bhadoria, NIT Hamirpur",
      "Dr. T Veerakumar, NIT Goa",
    ],
  },
  {
    title: "Technical Program Committee Chairs",
    members: [
      "Dr. Vijaya Laxmi Biradar, Kalinga University Raipur",
      "Dr. Vivek Singh Kushwah, CBIT Hyderabad",
      // "Dr. Ashish Bagwari, WIT Dehradun",
    ],
  },
  {
    title: "Finance Committee Chairs",
    members: [
      "Dr. Amit Ojha, MANIT Bhopal",
      "Dr.K Musti, NUST, Namibia",
    ],
  },
  {
    title: "Publication Committee Chairs",
    members: [
      "Dr. Deepika Dubey, MIR Labs",
      // "Dr. Bishwajeet Pandey, Astana IT University, Kazakhstan",
      "Mr. Anubhav Singh, Redbus Pvt Ltd",
    ],
  },
  {
    title: "Workshop Chairs",
    members: [
      "Dr. Ashraf Samarah, University of Michigan",
      "Dr. Alhad Kuwadekar, Pai Group BV, Netherlands",
      "Dr. Debnath Bhattacharyya, KL University, Andhra Pradesh",
    ],
  },
  {
    title: "Publicity Committee Chairs",
    members: [
      "Dr. Jagdish Bansal, South Asia University, New Delhi",
      "Dr.Kashif Amjad, PMU, KSA",
      "Dr. Bishwajeet Pandey, IT University Astana",
      "Dr.Noorbakhsha, Mississippi Univ, USA",
      "Dr. Jitendra Agrawal, RGPV Bhopal",
    ],
  },
  {
    title: "Hospitality Committee Chairs",
    members: [
      "Dr. Anirban Chatterjee",
    ],
  },
  {
    title: "Technical Program Committee",
    members: [
      "Prof. Tai Hoon Kim, Korea",
      "Prof. Dr. Mehmet Efe, Turkey",
      "Dr. Layth AbdulRasool, Iran",
      "Prof. NS Chaudhari, IIT Indore, India",
      "Dr. MKS Sastry, NUST Namibia",
      "Prof. Dr. Ilias Savvas, Greece",
      "Dr. Ratheesh Kumar Meleppa, University of California Davis",
      "Dr. Sanjay Sutar, BATU Lonere",
      "Prof. Manjushree Adhha, BATU Lonere",
      "Dr. Brijesh Iyyer, BATU Lonere",
      "Prof. Manmohan Shukla, PSIT Kanpur",
      "Dr. Dharmendra Dixitl, REC Sonbhadra",
      "Dr. NS Jadhav, BATU Lonere",
      "Prof. Fahrettin Sadıkoğlu, Cyprus",
      "Prof. Ali Haydar, Cyprus",
      "Dr. Kamil Dimililer, Cyprus",
      "Mr. Abhineet Tomar, Volvo, Sweden",
      "Dr. Hüseyin Öztoprak, Cyprus",
      "Dr. Tayfun Nesimoğlu, Cyprus",
      "Prof. Ciro Rodriguez, Peru",
      "Dr. Vivek Singh Kushwah, Amity Gwalior",
      "Prof. Stephen Wagner, Brazil",
      "Prof. Jorge Barbossa, Brazil",
      "Prof. Rajeev Tripathi, MNNIT Allahabad",
      "Dr. KV Arya, IIITM Gwalior",
      "Dr. Harkirat Singh, Samsung, USA",
      "Dr. Ngoc Tu Nguyen, Missouri University, USA",
      "Dr. Maman Abdurohman, Institut Teknologi Telkom, Indonesia",
      "Prof. Dr. Hai Jiang, Arkansas State University, USA",
      "Dr. Varun Jeoti, Petronas, Malaysia",
      "Dr. Joanne Scillitoe, Michigan Tech Univ, USA",
      "Prof. Dr. Helen Karatza, Greece",
      "Prof. Dr. Anna Lekova, Bulgaria",
      "Dr. Azrin Aris, Malaysia",
      "Dr. Jongman Cho, Korea",
      "Dr. BDK Patro, REC Kannauj",
      "Dr. Ranjeet Singh, ITM University",
      "Dr. Neeraj Shrivastava, RJIT",
      "Dr. Sanjay Kushwah, GEC",
      "Dr. Mamdouh Gouda, Egypt",
      "Dr. Beatris M, Spain",
      "Dr. Sani Sushanto, Indonesia",
      "Dr. Yong Ju Lee, Korea",
      "Dr. Amit Ojha, MANIT, Bhopal",
      "Prof. Dr. M.C. Govil, MNIT, Jaipur, India",
      "Prof. Dr. O.B.V. Ramanaiya, JNTU, Hyderabad, India",
      "Prof. Dr. Alaknanda Ashok, WIT Dehradun",
      "Prof. Dr. Pedro Albertos, Univ. Politecnica Valencia, Spain",
      "Prof. Dr. Mandava Rajeshwari, USM, Malaysia",
      "Dr. Xua Han, Kains Ave, USA",
      "Prof. Dr. Shailendra Singh, NITTTR",
      "Prof. Dr. Victor Govindaswamy, USA",
      "Prof. Dr. MS Whang, Brazil",
      "Dr. Trapti Jain, IIT Indore, India",
      "Dr. A.A. Lofti Neyestanak, Iran",
      "Prof. Dr. Houssem Jerbi, Lecap - Tunisia",
      "Prof. Dr. P. Chatterjee, National Tech. University, Argentina",
      "Dr. Aresh Dadlani, University of Tehran, Iran",
      "Prof. Dr. N. Krishnan, MSU, India",
      "Prof. Dr. B.K. Kanaujia, JNU Delhi",
      "Prof. Dr. Ghanshyam Singh, MNIT, Jaipur, India",
      "Dr. Surendra Gupta, Delhi",
      "Dr. BK Kaushik, IIT Roorkee",
      "Mr. Kunal Patel, Ingenuity Systems, USA",
      "Dr. Sahnaz Ayub, BIET, Jhansi, India",
      "Dr. Amitabha, Dublin University",
      "Dr. Alhad Kuwadekar, Univ of South Walse, UK",
      "Dr. Hon Tat Hui, NUS, Singapore",
      "Dr. Ashok Singh, IIT Patna, India",
      "Dr. Yusuke NOJIMA, Osaka Prefecture University",
      "Prof. Dr. Frédéric Pinel, Luxembourg",
      "Dr. N.Ch.Sriman Narayana Iyengar, VIT Vellore, India",
      "Dr. Manoj Shukla, HBTI, Kanpur, India - Track Chair",
      "Dr. Shuza Binzaid, Texas University",
      "Prof. Mario KOEPPEN, Kyushu Inst of Tech. Fukuoka, Japan",
      "Prof. Dr. Michele Vadursi, University of Naples 'Parthenope', Italy",
      "Dr. Rawya Rizk, Port-Said University, Egypt",
      "Dr. Junichi FUNASAKA, Hiroshima City University, Japan",
      "Dr. Mourad Abbas, Phonetics and Speech Processing Lab, CRSTDLA, Algiers",
      "Dr. Zutao Zhu, Google Inc., Japan",
      "Dr. Simon Dobson, Univ. of St. Andrews, UK",
      "Dr. Amitabha Chakraborty, Dublin Univ, Ireland",
      "Prof. Jaime Caro, University of Philippines, Philippines",
      "Dr. Debnath Bhattacharyya, Kolkata",
      "Dr. Bruno Fernandes",
      "Mr. Abhineet Tomar, VOLVO, Sweden",
      "Dr. DK Tripathi, REC Sonbhadra",
      "Dr. BK Chaurasia, IIIT Lucknow",
      "Dr. Paolo Roborto Grassi, Milan, Italy",
      "Dr. Bareh Asadi, Iran",
      "Dr. Sanjeev Sharma, RGPV Bhopal",
      "Dr. Biju Issac, Teesside University, Middlesbrough, Tees Valley, UK",
      "Prof. Dr. Cai Zhimming, Macau Univ, China",
      "Dr. Neeraj Shrivastava, RJIT Jaupur",
      "Dr. Laxmit Shrivastava, MITS Gwalior",
      "Prof. MPS Chawla, SGSITS Indore",
      "Dr. Manmohan Shukla, PSIT Kanpur",
      "Dr. Ruidan Su, Dalian, China - Track Chair",
      "Dr. Roshan Chhetri, Bhutan",
      "Prof. Dr. Li Jun Zhang, Champlain College, USA",
      "Dr. Arvind Singh, UWI Trinidad",
      "Dr. Jitendra Agrawal, RGPV Bhopal",
      "Dr. Ashiish Bagwari, WIT Dehradun",
      "Dr. Amir Houmansadr, University of Texas, Austin",
      "Dr. Thorsten Schöler, Germany",
      "Dr. Zhiyuan Tan, Australia",
      "Dr. Ashish Agrawal, Bostan Univ, USA",
      "Dr. Subhashis Bhattacharya, Bristol Univ, U.K., Austin",
      "Dr. Jens Nielsen, Aalborg Univ, Denmark",
      "Dr. Dong Huang, China",
      "Dr. Jiewen Huang, China",
      "Dr. Agya Mishra, India",
      "Dr. Ankit Chaudhary, MUM, Fairfield, USA",
      "Dr. Imad Jawhar, United Arab Emirat Univ, Al Ain, UAE",
      "Dr. Martyna Ulinowicz, Warsaw Univ. of Technology, Poland",
      "Dr. Velmurugan Ayyadurai, University of Surrey, U.K.",
      "Prof. Dr. Rodrigo C. Bortoletto, São Paulo Federal Institute, Brazil",
      "Dr. Shikha Agrawal, RGPV Bhopal",
      "Dr. Gregorio Andria, Italy",
      "Dr. Danilo Pelusi, University of Teramo, Italy",
      "Dr. Abhishek Shukla, KNIT Sultanpur",
      "Dr. Deng Huifang, Guangzhou, China",
      "Dr. Deepak Singh Tomar, MANIT, Bhopal, India",
      "Dr. Tatsuya Suda, University Netgroup Inc., USA",
    ],
  },
  // Add other committees here
];

const Committee = () => {
  return (
    <div className="container mx-auto px-4 py-12 text-gray-900">
      <div className="bg-gray-200 p-6 sm:p-8 md:p-10 lg:p-12 rounded-3xl shadow-lg">
        <center>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 sm:mb-6 lg:mb-8 text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-700">
            Committees
          </h1>
        </center>
        <p className="text-lg sm:text-xl md:text-2xl mb-4 sm:mb-6 md:mb-8 text-center">
          <strong>Conference is organized in Hybrid Mode</strong>
        </p>

        <div className="flex flex-col items-center space-y-6">
          {committees.map((committee, index) => (
            <div
              key={index}
              className="w-full max-w-md sm:max-w-lg md:max-w-xl p-4 sm:p-6 md:p-8 lg:p-10 bg-gray-100 rounded-lg shadow-md transition-shadow duration-300 hover:shadow-xl hover:shadow-blue-500"
            >
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 lg:mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">
                {committee.title}
              </h3>
              <ul className="list-disc list-inside text-gray-800 text-xs sm:text-sm text-justify">
                {committee.members.map((member, i) => (
                  <li key={i} className="mb-1">
                    {member}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


export default Committee;
