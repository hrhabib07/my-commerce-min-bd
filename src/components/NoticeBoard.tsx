import { useState } from "react";

interface Notice {
  id: number;
  title: string;
  date: string;
  download: string;
}
const NoticeBoard = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [noticesPerPage, setNoticesPerPage] = useState(5);

  const notices: Notice[] = [
    {
      id: 71,
      title: "Weekly Report on Price Increase and Decrease (08 August 2024)",
      date: "2024-08-12",
      download: "pdf",
    },
    {
      id: 70,
      title: "Weekly Report on Price Increase and Decrease (01 August 2024)",
      date: "2024-08-12",
      download: "pdf",
    },
    {
      id: 69,
      title: "Notice for Lentil Dehusking for 2024-2025 Fiscal Year",
      date: "2024-07-15",
      download: "pdf",
    },
    {
      id: 68,
      title: "Fair Circular 2024",
      date: "2024-06-24",
      download: "pdf",
    },
    {
      id: 67,
      title:
        "Final Results for Direct Recruitment in Vacant Posts (Grade 13-20)",
      date: "2023-12-28",
      download: "pdf",
    },
    {
      id: 66,
      title:
        "Written Exam Results and Oral Exam Schedule for Cashier (Grade-14)",
      date: "2023-06-12",
      download: "pdf",
    },
    {
      id: 65,
      title:
        "License Cancellation of Bangladesh Tobacco Products Distributors Association",
      date: "2023-05-11",
      download: "pdf",
    },
    { id: 64, title: "Tender Notice", date: "2023-04-18", download: "pdf" },
    {
      id: 63,
      title:
        "Recruitment Notice for Various Posts at Bangladesh Mission Commercial Wing Abroad",
      date: "2023-04-17",
      download: "pdf",
    },
    {
      id: 62,
      title:
        "Permission to Export Hilsa Fish to India on the Occasion of Durga Puja",
      date: "2022-09-04",
      download: "pdf",
    },
    {
      id: 61,
      title: "Recruitment Notice for Member, Bangladesh Competition Commission",
      date: "2022-01-27",
      download: "pdf",
    },
    {
      id: 60,
      title:
        "Draft Environmental and Social Management Framework (ESMF) - BBIN, Phase 1 - Vol. II, Annexures",
      date: "2022-01-26",
      download: "pdf",
    },
    {
      id: 59,
      title:
        "List of 97% Duty-Free and Quota-Free Market Access to Bangladeshi Products in China",
      date: "2020-10-11",
      download: "pdf",
    },
    {
      id: 58,
      title:
        "Office Order on Roster Duty for Officials and Employees of the Administration Branch",
      date: "2020-06-14",
      download: "pdf",
    },
    {
      id: 57,
      title:
        "Guidelines for the Use of Social Media in Government Institutions (Revised Edition)",
      date: "2020-05-08",
      download: "pdf",
    },
    {
      id: 56,
      title: "Office Order on Expansion of Official Work",
      date: "2020-04-27",
      download: "pdf",
    },
    {
      id: 55,
      title: "Office Order on Keeping the Office Open",
      date: "2020-04-26",
      download: "pdf",
    },
    {
      id: 54,
      title:
        "List of Officials and Employees Assigned for Roster Duty at the Ministry of Commerce",
      date: "2020-04-26",
      download: "pdf",
    },
    {
      id: 53,
      title:
        "Continuation of Communication During the Government-Declared General Leave",
      date: "2020-04-24",
      download: "pdf",
    },
    {
      id: 52,
      title:
        "Following Health Guidelines During Government-Declared General Leave",
      date: "2020-03-25",
      download: "pdf",
    },
  ];

  // Get current notices based on pagination
  const indexOfLastNotice = currentPage * noticesPerPage;
  const indexOfFirstNotice = indexOfLastNotice - noticesPerPage;
  const currentNotices = notices.slice(indexOfFirstNotice, indexOfLastNotice);

  // Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  // Handle show more/show less button
  const handleShowMore = () => {
    if (noticesPerPage === 5) {
      setNoticesPerPage(10);
    } else {
      setNoticesPerPage(5);
    }
    setCurrentPage(1); // Reset to the first page
  };

  return (
    <div className=" p-4 my-8">
      <h2 className="text-2xl font-bold mb-4">Notice Board</h2>
      <table className="min-w-full bg-white border border-gray-300">
        <thead className="bg-gray-200">
          <tr>
            <th className="text-left lg:px-4 py-2 border">Serial</th>
            <th className="text-left lg:px-4 py-2 border">Title</th>
            <th className="text-left lg:px-4 py-2 border">Published Date</th>
            <th className="text-left lg:px-4 py-2 border">Download</th>
          </tr>
        </thead>
        <tbody>
          {currentNotices.map((notice) => (
            <tr key={notice.id}>
              <td className="px-4 py-2 border">{notice.id}</td>
              <td className="px-4 py-2 border">{notice.title}</td>
              <td className="px-4 py-2 border">{notice.date}</td>
              <td className="px-4 py-2 border">
                <a href="#" className="text-green-600 hover:underline">
                  {notice.download}
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-between items-center mt-4">
        <button
          onClick={handleShowMore}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-900"
        >
          {noticesPerPage === 5 ? "Show More" : "Show Less"}
        </button>
        <div className="flex space-x-2">
          {[...Array(Math.ceil(notices.length / noticesPerPage))].map(
            (_, i) => (
              <button
                key={i + 1}
                onClick={() => paginate(i + 1)}
                className={`px-4 py-2 border rounded ${
                  currentPage === i + 1 ? "bg-green-600 text-white" : "bg-white"
                }`}
              >
                {i + 1}
              </button>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default NoticeBoard;

// const NoticeBoard = () => {
//   // Array of notices
//   const notices = [
//     "Weekly Report on Price Increase and Decrease (08 August 2024) (New)",
//     "Weekly Report on Price Increase and Decrease (01 August 2024) (New)",
//     "TCB's Plan to Import Lentils with Skin for 2024-2025 Fiscal Year...",
//     "Fair Circular 2024",
//     "Waiting List for Direct Recruitment in Vacant Posts (Grade 13-20)...",
//   ];
//   return (
//     <div className="flex flex-wrap max-w-full mx-auto p-4 bg-white shadow-lg rounded-lg">
//       {/* Notice Board */}
//       <div className="w-full md:w-2/3 p-4">
//         <h2 className="text-2xl font-bold mb-4">Notice Board</h2>
//         <ul className="list-disc list-inside space-y-2">
//           {notices.map((notice, index) => (
//             <li key={index} className="text-gray-800 hover:text-green-600">
//               {notice}
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* Minister Information */}
//       <div className="w-full md:w-1/3 p-4">
//         <div className="mb-8">
//           <img
//             src="https://mincom.gov.bd/sites/default/files/files/mincom.portal.gov.bd/office_head/13b06195_aeed_4ad3_ab7c_fdd1acb61e78/Dr.%20Muhammad%20Yunus%20(1).jpg.jpg.jpg"
//             alt="Dr. Muhammad Yunus"
//             className="w-32 h-32 rounded-full mx-auto mb-4"
//           />
//           <h3 className="text-lg font-bold text-center">Dr. Muhammad Yunus</h3>
//           <p className="text-center text-gray-600">Hon'ble Chief Advisor</p>
//           <p className="text-center text-gray-600">Ministry of Commerce</p>
//         </div>
//         {/* <div className="mb-8">
//           <img
//             src="https://mincom.gov.bd/sites/default/files/files/mincom.portal.gov.bd/office_head/c18b8d18_fd67_4555_b37b_2a72616fd2ee/Pic_Md.%20Selim%20(Secy)%20Sir.jpg"
//             alt="Mohang Selim Uddin"
//             className="w-32 h-32 rounded-full mx-auto mb-4"
//           />
//           <h3 className="text-lg font-bold text-center">Mohang Selim Uddin</h3>
//           <p className="text-center text-gray-600">Secretary</p>
//           <p className="text-center text-gray-600">Ministry of Commerce</p>
//         </div> */}
//       </div>
//     </div>
//   );
// };

// export default NoticeBoard;
