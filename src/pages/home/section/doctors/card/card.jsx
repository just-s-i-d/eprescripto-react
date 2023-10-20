const DoctorCard = ({ element }) => {
  const { name, img, specialist } = element;
  return (
    <div className="doctor">
      <img src={img} alt="Profile" className="profile-pic" />
      <h2>{name}</h2>
      <h3>{specialist}</h3>
    </div>
  );
};
export default DoctorCard;
