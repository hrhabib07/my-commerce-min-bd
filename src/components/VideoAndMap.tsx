const VideoAndMap = () => {
  return (
    <div className="my-8 p-4 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-center text-green-700 mb-6">
        Explore Bangladesh: Land of Stories & Commerce Ministry Location
      </h2>
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-1">
          <iframe
            className="w-full h-64 lg:h-80 rounded-lg border-2 border-gray-200 shadow-sm"
            src="https://www.youtube.com/embed/QNUSIOMb6vI"
            title="Beautiful Bangladesh - Land Of Stories"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
          ></iframe>
          <p className="mt-4 text-center text-gray-700">
            Enjoy this video that beautifully captures the essence of
            Bangladesh.
          </p>
        </div>
        <div className="flex-1">
          <iframe
            className="w-full h-64 lg:h-80 rounded-lg border-2 border-gray-200 shadow-sm"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14610.078019182973!2d90.408772!3d23.728847!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8f73e970091%3A0xeefa71570a2b73bc!2sMinistry%20of%20Commerce!5e0!3m2!1sen!2sus!4v1723804265992!5m2!1sen!2sus"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <p className="mt-4 text-center text-gray-700">
            Find the Commerce Ministry of Bangladesh on the map.
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoAndMap;
