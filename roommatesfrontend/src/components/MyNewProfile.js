import React from "react";
import fetchMyProfile from "../fetches/fetchMyProfile";

function MyNewProfile() {
  const [myNewProfileData, setMyNewProfileData] = React.useState([]); //object in array
  const [traitsData, setTraitsData] = React.useState({});

  //   React.useEffect(() => {
  //     // const token = window.localStorage.getItem("access_token");
  //     const token =
  //       "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjozLCJpYXQiOjE2MTY4NjkxMjQsImV4cCI6MTYxNjg3MjcyNH0.1Kq2bjO7q3xF7BTHs-S0QRfSz2hZHs9zg_I4QPufUMA";
  //     const url = `http://localhost:4000/mynewprofile`;
  //     myProfileFetch
  //       .updateMyProfile(url, token, myNewProfileData)
  //       .then((data) => {
  //         setMyNewProfileData(data);
  //       });
  //   }, []);

  //   const myProfileUser = (
  //     <div>
  //       <li>
  //         <img src={myProfileData.pic} />
  //         <h3>username: {myProfileData.username}</h3>
  //         <h3>email: {myProfileData.email}</h3>
  //         <h5>age: {myProfileData.age}</h5>
  //         <div>gender: {myProfileData.gender}</div>
  //         <div>current location: {myProfileData.currentloc}</div>
  //         <div>move to: {myProfileData.moveto}</div>
  //         <div>university: {myProfileData.university}</div>
  //         <div>studying: {myProfileData.studying}</div>
  //         <div>roommates number: {myProfileData.roommatesnum}</div>
  //         <div>price for room: {myProfileData.price}</div>
  //         <div>
  //           Traits: {traitsData ? traitsData.trait : <div>Not Found</div>}
  //         </div>
  //         <button
  //           onClick={() => {
  //             window.location.href = `/mynewprofile`;
  //           }}
  //         >
  //           Update My Profile
  //         </button>
  //       </li>
  //     </div>
  //   );
  //   return (
  //     <ul className="grid">
  //       {Object.keys(myNewProfileUser).length ? (
  //         myNewProfileUser
  //       ) : (
  //         <li>No results found</li>
  //       )}
  //     </ul>
  //   );

  return "Not Now";
}

export default MyNewProfile;
