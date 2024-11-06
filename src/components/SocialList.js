import { GrGithub, GrInstagram, GrLinkedinOption } from "react-icons/gr";
import SocialListItem from "./SocialListItem";

const SocialList = () => {
  const linkedInUrl =
    "https://www.linkedin.com/in/reyke-syalramadhan-4522a61b6/";
  const githubUrl = "https://github.com/Reyshal";
  const instagramUrl = "https://www.instagram.com/syalramadhan/";

  return (
    <div className="flex justify-center gap-2">
      <SocialListItem
        link={linkedInUrl}
        icon={<GrLinkedinOption className="text-lg text-white" />}
      />
      <SocialListItem
        link={githubUrl}
        icon={<GrGithub className="text-lg text-white" />}
      />
      <SocialListItem
        link={instagramUrl}
        icon={<GrInstagram className="text-lg text-white" />}
      />
    </div>
  );
};

export default SocialList;
