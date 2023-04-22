const Profile = () => {
  return (
    <a className="flex pl-4">
      <img alt="profile image" />
      <div className="flex flex-col">
        <span title="full name">Omid Neshati</span>
        <span title="email" className="text-sm">
          startomid2020@gmail.com
        </span>
      </div>
    </a>
  );
};

export default Profile;
