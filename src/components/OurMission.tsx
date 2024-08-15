const OurMission = () => {
  return (
    <div className="my-8">
      <div className="flex flex-col-reverse md:flex-row my-12 justify-between h-auto md:h-96 p-4 items-center bg-gray-100">
        <div className="flex-1 flex items-center justify-center ">
          <div className="w-auto lg:w-[30rem] text-center ">
            <h2 className="text-2xl font-bold my-2">Our Mission</h2>
            <p className="text-lg text-gray-600">
              To drive sustainable economic growth, enhance global trade
              relations, and empower the nation’s businesses to thrive in the
              competitive international market. By 2040, we aim to position
              Bangladesh as a leading economy, fostering innovation, ensuring
              fair trade practices, and creating opportunities for all citizens.
            </p>
          </div>
        </div>
        <div className="flex-1 flex justify-end gap-8">
          <div>
            <img
              src="https://mincom.gov.bd/sites/default/files/files/mincom.portal.gov.bd/office_head/13b06195_aeed_4ad3_ab7c_fdd1acb61e78/Dr.%20Muhammad%20Yunus%20(1).jpg.jpg.jpg"
              alt="Dr. Muhammad Yunus"
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <div className="">
              <h3 className="text-lg font-bold text-center ">
                Dr. Muhammad Yunus
              </h3>
              <p className="text-center text-gray-600">Hon'ble Chief Advisor</p>
              <p className="text-center text-gray-600">Ministry of Commerce</p>
            </div>
          </div>
          <div className="mb-8 me-8">
            <img
              src="https://mincom.gov.bd/sites/default/files/files/mincom.portal.gov.bd/office_head/c18b8d18_fd67_4555_b37b_2a72616fd2ee/Pic_Md.%20Selim%20(Secy)%20Sir.jpg"
              alt="Mohang Selim Uddin"
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <div className="">
              <h3 className="text-lg font-bold text-center ">
                Mohang Selim Uddin
              </h3>
              <p className="text-center text-gray-600">Secretary</p>
              <p className="text-center text-gray-600">Ministry of Commerce</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurMission;
