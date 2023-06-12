const SectionTitle = ({title}) => {
  return (
    <div className="my-10">
      <h3 className="text-center text-3xl font-bold dark:text-gray-500">{title}</h3>
      <img
        className="mx-auto py-3"
        src="https://i.ibb.co/g3tz4T1/bar-img-1-Photo-Room-png-Photo-Room.png"
        alt=""
      />
    </div>
  );
};

export default SectionTitle;
