const SocialListItem = ({ icon, link }) => {
  return (
    <a
      className="p-3 transition-colors bg-blue-300 rounded-full hover:bg-blue-500"
      href={link}
    >
      {icon}
    </a>
  );
};

export default SocialListItem;
