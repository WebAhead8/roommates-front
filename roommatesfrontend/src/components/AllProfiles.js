import React from "react";
import getAllProfiles from "../fetches/fetchAllProfiles";
// import Profile from "./Profile";

// import Profile from "./Profile";

function AllProfiles({ allProfilesData }) {
  // const [allProfilesData, setAllProfilesData] = React.useState([]);

  // React.useEffect(() => {
  //   const url = `http://localhost:4000/users`;
  //   getAllProfiles(url).then((data) => {
  //     setAllProfilesData(data);
  //   });
  // }, []);
  // if (!allProfilesData) {
  //   return <h3>...Loading</h3>;
  // }

  const allProfiles = allProfilesData.map((profile) => (
    <div>
      <li key={profile.id} style={{ margin: "0 10px" }}>
        <img
          style={{ width: "100px", height: "100px" }}
          src={profile.pic}
          onClick={() => {
            window.location.href = `/profile/${profile.id}`;
          }}
        />
        <h3>{profile.username}</h3>
        <div>{profile.gender}</div>
        <div>Move to {profile.moveto}</div>

        <button
          onClick={() => {
            window.location.href = `/profile/${profile.id}`;
          }}
        >
          see more
        </button>
      </li>
    </div>
  ));
  return (
    <ul className="grid" style={{ display: "flex", flexWrap: "wrap" }}>
      {allProfiles.length ? allProfiles : <li>No results found</li>}
    </ul>
  );
}
export default AllProfiles;
