import profile from "../assets/profile.jpeg";
import SocialList from "./SocialList";

const ProfileCard = () => {
  return (
    <div className="flex flex-col w-full h-full gap-5 px-5 text-center transition-all bg-white shadow-lg sm:h-auto sm:max-w-lg sm:rounded-2xl py-9">
      <div className="w-40 h-40 p-1 mx-auto rounded-full bg-gradient-to-r from-blue-300 to-cyan-300">
        <img src={profile} alt="profile" className="rounded-full" />
      </div>
      <div className="flex flex-col gap-3">
        <h1 className="text-xl font-bold">Reyke Syalramadhan</h1>
        <p className="text-base text-gray-700">
          A Software Engineer with over 2 years of professional experience in
          designing, developing, and maintaining web and mobile applications.
        </p>
      </div>
      <SocialList />
    </div>
  );
};

export default ProfileCard;
