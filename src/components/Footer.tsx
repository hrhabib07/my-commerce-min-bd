const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        {/* Row 1: Internal eServices */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Internal eServices</h3>
            <ul className="space-y-2">
              <li className="cursor-pointer hover:underline hover:text-green-700">
                Bangladesh Trade Portal
              </li>
              <li className="cursor-pointer hover:underline hover:text-green-700">
                Integrated Digital Service Delivery Platform
              </li>
              <li className="cursor-pointer hover:underline hover:text-green-700">
                Web Mail
              </li>
              <li className="cursor-pointer hover:underline hover:text-green-700">
                List of approved DBIDs
              </li>
              <li className="cursor-pointer hover:underline hover:text-green-700">
                Store Management and e-Requisition
              </li>
              <li className="cursor-pointer hover:underline hover:text-green-700">
                Regional and bilateral trade agreements
              </li>
              <li className="cursor-pointer hover:underline hover:text-green-700">
                All
              </li>
            </ul>
          </div>

          {/* Row 2: Important Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Important Links</h3>
            <ul className="space-y-2">
              <li className="cursor-pointer hover:underline hover:text-green-700">
                JDS Program
              </li>
              <li className="cursor-pointer hover:underline hover:text-green-700">
                Bangladesh Customs
              </li>
              <li className="cursor-pointer hover:underline hover:text-green-700">
                Ministry of Public Administration
              </li>
              <li className="cursor-pointer hover:underline hover:text-green-700">
                Prime Minister's Office
              </li>
              <li className="cursor-pointer hover:underline hover:text-green-700">
                President's Office (Bangabhaban)
              </li>
              <li className="cursor-pointer hover:underline hover:text-green-700">
                National Web Portal
              </li>
              <li className="cursor-pointer hover:underline hover:text-green-700">
                Cabinet Division
              </li>
              <li className="cursor-pointer hover:underline hover:text-green-700">
                All Links
              </li>
            </ul>
          </div>

          {/* Image Section */}
          <div className=" text-center">
            <img
              src="https://bangladesh.gov.bd/sites/default/files/files/bangladesh.gov.bd/files/a3cbb305_511d_4266_bf35_74cfcfd2be9d/hotline_v.2_bn.png"
              alt="Important Image"
              className="h-96 w-full"
            />
          </div>

          {/* Row 3: Emergency Helplines and GEMS */}
          <div>
            <h3 className="text-lg font-bold mb-4">
              Emergency Helpline Numbers
            </h3>
            <ul className="space-y-2">
              <li className="cursor-pointer hover:underline hover:text-green-700">
                ACC: 106
              </li>
              <li className="cursor-pointer hover:underline hover:text-green-700">
                Emergency Service: 999
              </li>
              <li className="cursor-pointer hover:underline hover:text-green-700">
                Citizen Service: 333
              </li>
              <li className="cursor-pointer hover:underline hover:text-green-700">
                Child Help Line: 1098
              </li>
              <li className="cursor-pointer hover:underline hover:text-green-700">
                Prevention of Violence against Women and Children: 109
              </li>
            </ul>
            <h3 className="text-lg font-bold mt-4 mb-4">GEMS</h3>
            <ul className="space-y-2">
              <li className="cursor-pointer hover:underline hover:text-green-700">
                Government Employee Management System (GEMS)
              </li>
              <li className="cursor-pointer hover:underline hover:text-green-700">
                Government Employee Management System (GEMS)
              </li>
            </ul>
          </div>

          {/* Row 4: Social Media and Other */}
          <div>
            <h3 className="text-lg font-bold mb-4">Social Media</h3>
            <ul className="space-y-2">
              <li className="cursor-pointer hover:underline hover:text-green-700">
                <a
                  href="https://www.facebook.com/bdmincom/"
                  className="cursor-pointer hover:underline hover:text-green-700"
                >
                  facebook
                </a>
              </li>
            </ul>

            <h3 className="text-lg font-bold mt-4 mb-4">Innovation Corner</h3>
            <ul className="space-y-2">
              <li className="cursor-pointer hover:underline hover:text-green-700">
                Innovation Team
              </li>
              <li className="cursor-pointer hover:underline hover:text-green-700">
                Innovation Report
              </li>
              <li className="cursor-pointer hover:underline hover:text-green-700">
                Innovation Action Plan
              </li>
              <li className="cursor-pointer hover:underline hover:text-green-700">
                4th Industrial Revolution
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
