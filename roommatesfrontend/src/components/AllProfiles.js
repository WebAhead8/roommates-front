import React from "react";
import getAllProfiles from "../fetches/fetchAllProfiles";
import Profile from "./Profile";

function AllProfiles() {
  const [allProfilesData, setAllProfilesData] = React.useState([]);

  React.useEffect(() => {
    const url = `http://localhost:4000/users`;
    getAllProfiles(url).then((data) => {
      setAllProfilesData(data);
    });
  }, []);
  if (!allProfilesData) {
    return <h3>...Loading</h3>;
  }

  const allProfiles = allProfilesData.map((profile) => (
    <div>
      <li key={profile.id}>
        <img src={profile.pic} />
        <h3>{profile.username}</h3>
        <h5>{profile.age}</h5>
        <div>{profile.gender}</div>
        <div>{profile.currentloc}</div>
        <div>{profile.moveto}</div>
        <div>{profile.university}</div>
        <div>{profile.studying}</div>

        <button
          onClick={() => {
            // <Profile></Profile>;
          }}
        >
          see more
        </button>

        {/* <button
          onClick={() => {
            window.location.href = `/customerreview/${sketchy.id}`;
          }}
        >
          Customres reviews
        </button> */}
      </li>
    </div>
  ));
  return (
    <ul className="grid">
      {allProfiles.length ? allProfiles : <li>No results found</li>}
    </ul>
  );
}
export default AllProfiles;
