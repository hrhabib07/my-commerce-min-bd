import CategoryPostCard from "./CategoryPostCard";

const categoryData = {
  categories: [
    {
      category: "Public Services",
      posts: [
        {
          title: "About Us",
          img: "https://mincom.gov.bd/sites/default/files/files/mincom.portal.gov.bd/front_service_box/8d579f11_10d6_4e38_b83e_44f460aae94d/our%20sub.png",
          description: [
            "History Mission-Vision and Functions",
            "Organizational Structure",
            "List of Officers",
            "Decentralization of administrative and financial power",
          ],
        },
        {
          title: "Citizen E-Services",
          img: "https://mincom.gov.bd/sites/default/files/files/mincom.portal.gov.bd/front_service_box/db4c0523_eb55_4bee_8c85_41fbb8496c0e/Eservice.png",
          description: [
            "Citizen E-Services",
            "Delivering Integrated Digital Services",
            "National Trade Portal",
            "Foreign Trade Agreement",
            "MyGov Services",
          ],
        },
        {
          title: "Citizen's Charter",
          img: "https://mincom.gov.bd/sites/default/files/files/mincom.portal.gov.bd/front_service_box/7693a0cb_56c6_4917_9e08_f76c8dce7f4a/Service.png",
          description: [
            "Citizen's Charter",
            "Focal Point/Evaluation Committee",
            "Work Plan, Monitoring & Evaluation Report",
          ],
        },
        {
          title: "Grievance Redress System",
          img: "https://mincom.gov.bd/sites/default/files/files/mincom.portal.gov.bd/front_service_box/9fd827d7_740f_4646_a6f4_462360a1924c/0vijog.png",
          description: [
            "Grievance Redress System",
            "GRS and Appellate Officers",
            "Monthly/Annually Reports",
            "Grievance Submission (Online)",
          ],
        },
        {
          title: "Right to Information",
          img: "https://mincom.gov.bd/sites/default/files/files/mincom.portal.gov.bd/front_service_box/f2c32438_7525_44cf_b969_203f1fa977a9/tothho%20odikar.png",
          description: [
            "Right to Information",
            "Designated Officer & Appellate Authority",
            "Acts/Rules/Guidelines",
            "Application and Appeal Form",
            "Proactively Disclosed Information",
          ],
        },
        {
          title: "Citizen Service",
          img: "https://mincom.gov.bd/sites/default/files/files/mincom.portal.gov.bd/front_service_box/6f518351_5f33_4c4a_aa74_fd673e59ba80/help.png",
          description: ["Citizen Service", "Citizen Charter", "Forms"],
        },
      ],
    },
    {
      category: "Official Documents & Circulars",
      posts: [
        {
          title: "Circulars / Orders / Circulars",
          img: "https://mincom.gov.bd/sites/default/files/files/mincom.portal.gov.bd/front_service_box/27abb42c_e2dc_492a_a034_3dd411985eaa/add%20ades%20poripotro.png",
          description: [
            "Circulars / Orders / Circulars",
            "Notification / Circular",
            "Office Orders",
            "Foreign Visit (G.O)",
          ],
        },
        {
          title: "Law, Rules, Policies and Publications",
          img: "https://mincom.gov.bd/sites/default/files/files/mincom.portal.gov.bd/front_service_box/82223543_daf0_4b9c_a66a_3a7c499e0378/low%20nitimala%20pokashona.png",
          description: [
            "Law, Rules, Policies and Publications",
            "Law and Regulations",
            "Policy and Policy Order",
            "Annual Report",
            "Publications",
          ],
        },
        {
          title: "Annual Performance Management",
          img: "https://mincom.gov.bd/sites/default/files/files/mincom.portal.gov.bd/front_service_box/fc7b5f30_a1d1_4be9_b1aa_47f68b2c7a2c/apa_cab.png",
          description: [
            "Annual Performance Management",
            "Team Leaders & Focal Point Officers",
            "APA Agreements",
            "Quarterly Reports",
            "APAMS Software Link",
          ],
        },
        {
          title: "Purification",
          img: "https://mincom.gov.bd/sites/default/files/files/mincom.portal.gov.bd/front_service_box/17582938_5a54_4061_8e91_8c6e77c9a480/nis_logo3.png",
          description: [
            "Purification",
            "NIS Action Plan",
            "Focal Point Officers & Alternative Officers",
            "Quarterly Reports",
            "Notification / Circular / Policy",
          ],
        },
        {
          title: "Innovative Activities",
          img: "https://mincom.gov.bd/sites/default/files/files/mincom.portal.gov.bd/front_service_box/73037e63_dcfe_484a_9dcd_9192b5b13272/ut%20va%20boni%20karjokrom%20(1).png",
          description: [
            "Innovative Activities",
            "Notification / Circular / Policy",
            "Innovation Team",
            "Annual Innovation Action Plans",
            "Monitoring and Evaluation Report",
          ],
        },
        {
          title: "SPS",
          img: "https://mincom.gov.bd/sites/default/files/files/mincom.portal.gov.bd/front_service_box/ef7627c6_1dad_41a6_a796_f36108ef5a65/SPS-3.png",
          description: [
            "SPS",
            "Notifications/Circulars/Policies/Office Orders/Collections",
          ],
        },
      ],
    },
    {
      category: "Projects & Performance",
      posts: [
        {
          title: "Budget & Projects",
          img: "https://mincom.gov.bd/sites/default/files/files/mincom.portal.gov.bd/front_service_box/39fa5d67_08c1_45cc_b0e6_3fc30bd7ddc2/budget%20o%20prokolpo.png",
          description: [
            "Budget Project",
            "Annual Budget",
            "Annual Purchase Plan",
            "Projects/Programs",
          ],
        },
        {
          title: "SDG and Development Plan",
          img: "https://mincom.gov.bd/sites/default/files/files/mincom.portal.gov.bd/front_service_box/9e07a288_8e0a_42eb_b502_ea25f4bd666d/SDG.png",
          description: [
            "SDG and Dev Plan",
            "SDG National Document",
            "SDG for Ministry",
            "SDG Focal Points",
            "Action Plans and Reports on SDGs",
          ],
        },
        {
          title: "Service Facilitation",
          img: "https://mincom.gov.bd/sites/default/files/files/mincom.portal.gov.bd/front_service_box/ef7627c6_1dad_41a6_a796_f36108ef5a65/SPS-3.png",
          description: [
            "Examples of Service Facilitation",
            "Service Facilitation Manual",
            "Simplified List of Services",
          ],
        },
      ],
    },
    {
      category: "International Affairs & Trade",
      posts: [
        {
          title: "International Affairs",
          img: "https://mincom.gov.bd/sites/default/files/files/mincom.portal.gov.bd/front_service_box/37e16b94_fd8c_45d8_ae75_68c2ab6fddaf/worldwide.png",
          description: [
            "International Affairs",
            "World Trade Organization",
            "SDGs",
            "Trade Agreement",
            "Exporter",
          ],
        },
        {
          title: "GSP Facility",
          img: "https://mincom.gov.bd/sites/default/files/files/mincom.portal.gov.bd/front_service_box/431ccd60_dcf9_4c44_8610_0de6d608a783/export.png",
          description: [
            "Abandoned Property",
            "Export",
            "Export Statistics",
            "Export Procedure",
            "Top Ten Products & Destinations",
          ],
        },
        {
          title: "Trade Organization",
          img: "https://mincom.gov.bd/sites/default/files/files/mincom.portal.gov.bd/front_service_box/a5408b0b_f978_4c00_bc0d_0a5aa44d6b92/business.png",
          description: [
            "Bilateral Trade Cooperation Agreement",
            "Trade Organization Related",
            "Trade Organization of Bangladesh",
            "Chamber and Joint Chamber",
            "Group, Forum and Others",
          ],
        },
      ],
    },
    {
      category: "Miscellaneous",
      posts: [
        {
          title: "Business Information Desk",
          img: "https://mincom.gov.bd/sites/default/files/files/mincom.portal.gov.bd/front_service_box/bf02d06d_cac4_483e_acdb_bdb5854b5527/business%20(1).png",
          description: [
            "Market Price of Dhaka City",
            "Import Product Information",
            "Market Price of Agro-Based Products",
            "Trade Statistics",
          ],
        },
        {
          title: "Social Security",
          img: "https://mincom.gov.bd/sites/default/files/files/mincom.portal.gov.bd/front_service_box/c2f30437_0e58_486c_b4ab_a964f57f4ce8/Social%20Protection.png",
          description: [
            "Social Security",
            "Coordination Management",
            "Notifications/Circulars/Policies",
          ],
        },
        {
          title: "Miscellaneous",
          img: "https://mincom.gov.bd/sites/default/files/files/mincom.portal.gov.bd/front_service_box/878cb5c9_2ab2_4a5c_8117_d111f3854157/Mesilenious.png",
          description: [
            "Miscellaneous",
            "Tender",
            "NOC",
            "Representative",
            "Focal Point",
          ],
        },
      ],
    },
  ],
};
// console.log(categoryData);
const OurServices = () => {
  return (
    <div className="">
      <div className=" my-8">
        {categoryData.categories.map((category, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg my-8 border"
          >
            <h2 className="text-2xl font-bold text-center text-green-700 my-8 ">
              {category.category}
            </h2>
            <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-4">
              {category.posts.map((post, postIndex) => (
                <CategoryPostCard
                  post={post}
                  key={postIndex}
                  index={postIndex}
                ></CategoryPostCard>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurServices;
