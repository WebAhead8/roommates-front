import React from "react";
import myProfileFetch from "../fetches/fetchMyProfile";
import "../style/myprofile.css";

function MyProfile() {
  const [myProfileData, setMyProfileData] = React.useState({});
  const [traitsData, setTraitsData] = React.useState({});
  console.log("tttt");

  React.useEffect(() => {
    // const token = window.localStorage.getItem("access_token");
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjo1LCJpYXQiOjE2MTY4NzA0OTMsImV4cCI6MTYxNjg3NDA5M30.coNinA6dbUUk5hpFc0087z4z8pBt6CttLm4NiMK2LHc";
    const url = `http://localhost:4000/myprofile`;
    myProfileFetch.getMyProfile(url, token).then((data) => {
      setMyProfileData(data);
    });
  }, []);
  React.useEffect(() => {
    const url = `http://localhost:4000/traits/${myProfileData.id}`;
    myProfileFetch.getMyProfile(url).then((data) => {
      setTraitsData(data);
    });
  }, []);
  if (!myProfileData) {
    return <h3>...Loading</h3>;
  }
  //   console.log(profileData);
  const myProfileUser = (
    <div className="myprofile">
      <li>
        <img src={myProfileData.pic} />
        <h3>username: {myProfileData.username}</h3>
        <h3>email: {myProfileData.email}</h3>
        <h5>age: {myProfileData.age}</h5>
        <div>gender: {myProfileData.gender}</div>
        <div>current location: {myProfileData.currentloc}</div>
        <div>move to: {myProfileData.moveto}</div>
        <div>university: {myProfileData.university}</div>
        <div>studying: {myProfileData.studying}</div>
        <div>roommates number: {myProfileData.roommatesnum}</div>
        <div>price for room: {myProfileData.price}</div>
        <div>
          Traits: {traitsData ? traitsData.trait : <div>Not Found</div>}
        </div>
        <button
          onClick={() => {
            window.location.href = `/mynewprofile`;
          }}
        >
          Update My Profile
        </button>
      </li>
    </div>
  );
  return (
    <ul className="grid">
      {Object.keys(myProfileUser).length ? (
        myProfileUser
      ) : (
        <li>No results found</li>
      )}
    </ul>
  );
}

export default MyProfile;
