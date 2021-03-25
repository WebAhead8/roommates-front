// import React from "react";
// import getProfile from "../fetches/fetchProfile";
// function Profile({ userId }) {
//   const [profileData, setProfileData] = React.useState([]);

//   React.useEffect(() => {
//     const url = `http://localhost:4000/users/${userId}`;
//     getProfile(url).then((data) => {
//       setProfileData(data);
//     });
//   }, []);
//   if (!profileData) {
//     return <h3>...Loading</h3>;
//   }

//   const profileUser = profileData.map((profile) => (
//     <div>
//       <li key={profile.id}>
//         <img src={profile.pic} />
//         <h3>{profile.username}</h3>
//         <h5>{profile.age}</h5>
//         <div>{profile.gender}</div>
//         <div>{profile.currentloc}</div>
//         <div>{profile.moveto}</div>
//         <div>{profile.university}</div>
//         <div>{profile.studying}</div>
//         <div>{profile.roommatesnum}</div>
//         <div>{profile.price}</div>

//         <button
//           onClick={() => {
//             //   <Profile>userId={profile.id}</Profile>;
//           }}
//         >
//           Back
//         </button>
//       </li>
//     </div>
//   ));
//   return (
//     <ul className="grid">
//       {profileUser.length ? profileUser : <li>No results found</li>}
//     </ul>
//   );
// }
// export default AllProfiles;
