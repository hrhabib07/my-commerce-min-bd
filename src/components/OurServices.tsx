import CategoryPostCard from "./CategoryPostCard";

const categoryData = {
  categories: [
    {
      category: "Public Services",
      posts: [
        {
          title: "About Us",
          description: [
            "History Mission-Vision and Functions",
            "Organizational Structure",
            "List of Officers",
            "Decentralization of administrative and financial power",
          ],
        },
        {
          title: "Citizen E-Services",
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
          description: [
            "Citizen's Charter",
            "Focal Point/Evaluation Committee",
            "Work Plan, Monitoring & Evaluation Report",
          ],
        },
        {
          title: "Grievance Redress System",
          description: [
            "Grievance Redress System",
            "GRS and Appellate Officers",
            "Monthly/Annually Reports",
            "Grievance Submission (Online)",
          ],
        },
        {
          title: "Right to Information",
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
          description: ["Citizen Service", "Citizen Charter", "Forms"],
        },
      ],
    },
    {
      category: "Official Documents & Circulars",
      posts: [
        {
          title: "Circulars / Orders / Circulars",
          description: [
            "Circulars / Orders / Circulars",
            "Notification / Circular",
            "Office Orders",
            "Foreign Visit (G.O)",
          ],
        },
        {
          title: "Recruitment Notice/Joining",
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
          description: [
            "Budget Project",
            "Annual Budget",
            "Annual Purchase Plan",
            "Projects/Programs",
          ],
        },
        {
          title: "SDG and Development Plan",
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
          description: [
            "Market Price of Dhaka City",
            "Import Product Information",
            "Market Price of Agro-Based Products",
            "Trade Statistics",
          ],
        },
        {
          title: "Social Security",
          description: [
            "Social Security",
            "Coordination Management",
            "Notifications/Circulars/Policies",
          ],
        },
        {
          title: "Miscellaneous",
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
    <div className="container mx-auto p-6">
      <div className=" my-8">
        {categoryData.categories.map((category, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md border my-8"
          >
            <h2 className="text-2xl font-bold text-center text-green-700 my-8 ">
              {category.category}
            </h2>
            <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 ">
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
