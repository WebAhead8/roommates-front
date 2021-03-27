import React from "react";
import getProfile from "../fetches/fetchProfile";
import { useParams } from "react-router-dom";

function Profile() {
  const [profileData, setProfileData] = React.useState({});
  const [traitsData, setTraitsData] = React.useState({});

  const params = useParams();

  React.useEffect(() => {
    const url = `http://localhost:4000/users/${params.id}`;
    getProfile(url).then((data) => {
      setProfileData(data);
    });
  }, []);
  React.useEffect(() => {
    const url = `http://localhost:4000/traits/${params.id}`;
    getProfile(url).then((data) => {
      setTraitsData(data);
    });
  }, []);
  if (!profileData) {
    return <h3>...Loading</h3>;
  }

  //   console.log(profileData);
  const profileUser = (
    <div>
      <li>
        <img src={profileData.pic} />
        <h3>username: {profileData.username}</h3>
        <h5>age: {profileData.age}</h5>
        <div>gender: {profileData.gender}</div>
        <div>current location: {profileData.currentloc}</div>
        <div>move to: {profileData.moveto}</div>
        <div>university: {profileData.university}</div>
        <div>studying: {profileData.studying}</div>
        <div>roommates number: {profileData.roommatesnum}</div>
        <div>price for room: {profileData.price}</div>
        <div>
          Traits: {traitsData ? traitsData.trait : <div>Not Found</div>}
        </div>
      </li>
    </div>
  );
  return (
    <ul className="grid">
      {Object.keys(profileUser).length ? (
        profileUser
      ) : (
        <li>No results found</li>
      )}
    </ul>
  );
}
export default Profile;
