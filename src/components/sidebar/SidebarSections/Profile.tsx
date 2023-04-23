const Profile = () => {
  return (
    <a className="flex items-center pl-4">
      <img
        alt="profile image"
        src="profile.png"
        className="h-[40px] [40px] mr-1"
      />
      <div className="flex flex-col">
        <span title="full name" className="font-medium text-black">
          Omid Neshati
        </span>
        <span title="email" className="text-sm">
          startomid2020@gmail.com
        </span>
      </div>
    </a>
  );
};

export default Profile;
