import React from "react";
import myProfileFetch from "../fetches/fetchMyProfile";
import "../style/myprofile.css";

function MyProfile() {
  const [myProfileData, setMyProfileData] = React.useState({});
  const [myTraitsData, setMyTraitsData] = React.useState({});
  const [disabled, setdisabled] = React.useState(true);

  // const token = window.localStorage.getItem("access_token");
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoxNiwiaWF0IjoxNjE3MjE1OTgyLCJleHAiOjE2MTcyMTk1ODJ9.y6ZQX5iVANWb1ylLEvBXE18SLL0eKHeWIQ4z6-TTK4k";

  async function updateMyProfile() {
    // console.log("nonono");
    console.log(myProfileData);
    const url = `http://localhost:4000/mynewprofile`;
    await myProfileFetch.updateMyProfile(url, myProfileData, token);
  }

  React.useEffect(() => {
    const url = `http://localhost:4000/myprofile`;
    // const urlTraits = `http://localhost:4000/traits/${myProfileData.id}`;
    myProfileFetch.getMyProfile(url, token).then((data) => {
      setMyProfileData(data);
    });
    // myProfileFetch.getMyTraits(url).then((data) => {
    //   setMyTraitsData(data);
    // });
  }, []);

  // React.useEffect(() => {
  //   const urlTraits = `http://localhost:4000/traits/${myProfileData.id}`;
  //   myProfileFetch.getMyTraits(url).then((data) => {
  //     setMyTraitsData(data);
  //   });
  // }, []);
  console.log("myyy:", myTraitsData);
  if (!myProfileData) {
    return <h3>...Loading</h3>;
  }
  //   console.log(profileData);
  const myProfileUser = (
    <div className="myprofile">
      <li>
        <img src={myProfileData.pic} />
        <h3>
          username: {}
          <input
            value={myProfileData.username}
            onChange={(e) =>
              setMyProfileData({
                ...myProfileData,
                username: e.target.value,
              })
            }
            disabled={disabled}
            name="username"
            id="username"
          ></input>
        </h3>
        <h3>email: {myProfileData.email}</h3>
        <h5>
          age: {}
          <input
            value={myProfileData.age}
            onChange={(e) =>
              setMyProfileData({
                ...myProfileData,
                age: e.target.value,
              })
            }
            disabled={disabled}
            name="age"
            id="age"
          ></input>
        </h5>

        <div>
          gender:{}
          <select
            value={myProfileData.gender}
            onChange={(e) =>
              setMyProfileData({
                ...myProfileData,
                gender: e.target.value,
              })
            }
            disabled={disabled}
            name="Gender"
            id="Gender"
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>{" "}
          </select>
        </div>
        {/* <div>current location: {myProfileData.currentloc}</div> */}
        <div>
          current location: {}
          <select
            value={myProfileData.currentloc}
            onChange={(e) =>
              setMyProfileData({
                ...myProfileData,
                currentloc: e.target.value,
              })
            }
            disabled={disabled}
            name="Current Location"
            id="Current Location"
          >
            <option value="Ramat-HaGolan District">
              Ramat-HaGolan District
            </option>
            <option value="Haifa District ">Haifa District </option>
            <option value="Hadera District">Hadera District</option>
            <option value="HaSharon District">HaSharon District</option>
            <option value="Tel Aviv District">Tel Aviv District</option>
            <option value="Jerusalem District">Jerusalem District</option>
            <option value="Yehuda HaShomron District">
              Yehuda HaShomron District
            </option>
            <option value="Beer-Sheva District">Beer-Sheva District</option>
            <option value="Eilat District">Eilat District</option>
          </select>
        </div>

        {/* <div>move to: {myProfileData.moveto}</div> */}
        <div>
          move to: {}
          <select
            value={myProfileData.moveto}
            onChange={(e) =>
              setMyProfileData({
                ...myProfileData,
                moveto: e.target.value,
              })
            }
            disabled={disabled}
            name="Move To"
            id="Move To"
          >
            <option value="Female">Ramat-HaGolan District</option>
            <option value="Haifa District ">Haifa District </option>
            <option value="Hadera District">Hadera District</option>
            <option value="HaSharon District">HaSharon District</option>
            <option value="Tel Aviv District">Tel Aviv District</option>
            <option value="Jerusalem District">Jerusalem District</option>
            <option value="Yehuda HaShomron District">
              Yehuda HaShomron District
            </option>
            <option value="Beer-Sheva District">Beer-Sheva District</option>
            <option value="Eilat District">Eilat District</option>
          </select>
        </div>

        {/* <div>university: {myProfileData.university}</div> */}
        <div>
          university: {}
          <select
            value={myProfileData.university}
            onChange={(e) =>
              setMyProfileData({
                ...myProfileData,
                university: e.target.value,
              })
            }
            disabled={disabled}
            name="University"
          >
            <option value="Technion ">Technion</option>
            <option value="Hebrew University of Jerusalem ">
              Hebrew University of Jerusalem{" "}
            </option>
            <option value="Weizmann Institute of Science  ">
              Weizmann Institute of Science{" "}
            </option>
            <option value="Bar-Ilan University  ">Bar-Ilan University </option>
            <option value="Tel Aviv University  ">Tel Aviv University </option>
            <option value="University of Haifa ">University of Haifa </option>
            <option value="Open University of Israel ">
              Open University of Israel{" "}
            </option>
            <option value="Ben-Gurion University ">
              Ben-Gurion University{" "}
            </option>
            <option value="Ariel University ">Ariel University </option>
          </select>
        </div>

        <select
          value={myProfileData.studying}
          onChange={(e) =>
            setMyProfileData({
              ...myProfileData,
              studying: e.target.value,
            })
          }
          disabled={disabled}
          name="studying"
          id="studying"
        >
          <option value="Humanities and social science">
            Humanities and social science
          </option>
          <option value="Natural sciences">Natural sciences</option>
          <option value="Mathematics">Mathematics</option>
          <option value="Computer sciences">Computer sciences</option>
          <option value="Systems science">Systems science</option>
          <option value="Business">Business</option>
          <option value="Engineering">Engineering</option>
          <option value="Law">Law</option>
          <option value="Medicine">Medicine</option>
          <option value="Art">Art</option>
          <option value="Social Work">Social Work</option>
        </select>
        <div>
          roommates number: {}
          <select
            value={myProfileData.roommatesnum}
            onChange={(e) =>
              setMyProfileData({
                ...myProfileData,
                roommatesnum: e.target.value,
              })
            }
            disabled={disabled}
            name="Roomates"
            id="Roomates"
          >
            <option value="0">0</option>
            <option value="1">1</option>{" "}
          </select>
        </div>

        <div>
          price for room: {}
          <input
            value={myProfileData.price}
            onChange={(e) =>
              setMyProfileData({
                ...myProfileData,
                price: e.target.value,
              })
            }
            disabled={disabled}
            name="price"
            id="price"
          ></input>
        </div>
        {/* <div>
          password: {}
          <input
            value={myProfileData.pass}
            onChange={(e) =>
              setMyProfileData({
                ...myProfileData,
                pass: e.target.value,
              })
            }
            disabled={disabled}
            name="pass"
            id="pass"
          ></input>
        </div> */}

        <div>
          Traits:{" "}
          {myProfileData.trait ? myProfileData.trait : <div>Not Found</div>}
        </div>
        <button
          onClick={() => {
            if (!disabled) {
              updateMyProfile();
            }
            setdisabled(!disabled);
          }}
        >
          {disabled ? "Update My Profile" : "save"}
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
