const SocialListItem = ({ icon, link }) => {
  return (
    <a className="p-3 bg-green-300 rounded-full" href={link}>
      {icon}
    </a>
  );
};

export default SocialListItem;
