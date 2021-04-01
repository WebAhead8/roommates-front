import React from "react";
import FilterData from "./FilterData";
import getAllProfiles from "../fetches/fetchAllProfiles";
import "../App.css";

import "../style/find.css";
import deepEqual from "deep-equal";

// import AllPosts from "./Allposts";

function FindRoomate() {
  const [filters, setFilters] = React.useState({
    Gender: "All",
    MinAge: 17,
    MaxAge: 50,
    CurrentLocation: "All",
    MoveTo: "All",
    University: "All",
    Roomates: "All",
    MinPrice: 0,
    MaxPrice: 5000,
    StudyingField: "All",
    Traits: [],
  });
  const [allProfilesData, setAllProfilesData] = React.useState([]);
  const [allProfilesDataClone, setAllProfilesDataClone] = React.useState([]);

  React.useEffect(() => {
    const url = `http://localhost:4000/users`;
    getAllProfiles(url).then((data) => {
      setAllProfilesData(data);
      setAllProfilesDataClone(data);
    });
  }, []);

  React.useEffect(() => {
    setAllProfilesData(
      allProfilesDataClone
        .filter((profile) => {
          const { gender, currentloc, age, moveto, price, roommatesnum, studying, university, trait } = profile;

          return (
            (filters.Gender.toLowerCase() === "all" ? true : gender.toLowerCase() === filters.Gender.toLowerCase()) &&
            (filters.MoveTo.toLowerCase() === "all" ? true : moveto.toLowerCase() === filters.MoveTo.toLowerCase()) &&
            (filters.University.toLowerCase() === "all" ? true : university.toLowerCase() === filters.University.toLowerCase()) &&
            (filters.StudyingField.toLowerCase() === "all" ? true : studying.toLowerCase() === filters.StudyingField.toLowerCase()) &&
            (filters.CurrentLocation.toLowerCase() === "all" ? true : currentloc.toLowerCase() === filters.CurrentLocation.toLowerCase()) &&
            (filters.Roomates.toLowerCase() === "all" ? true : roommatesnum == filters.Roomates) &&
            price <= filters.MaxPrice &&
            price >= filters.MinPrice &&
            age <= filters.MaxAge &&
            age >= filters.MinAge
          );
        })
        .filter((profile) => (filters.Traits.length ? deepEqual(profile.trait, filters.Traits) : true))
    );
  }, [filters]);

  function handleFilterChange(e) {
    const { name, value, type, checked } = e.target;
    if (!checked && type === "checkbox") {
      setFilters({
        ...filters,
        // [name]: undefined,
        Traits: filters.Traits.filter((trait) => trait !== name.toLowerCase()),
      });
      return;
    }

    setFilters((prev) => {
      return {
        ...prev,
        [name]: value,
        ...(type === "checkbox" && { Traits: [...prev.Traits, name.toLowerCase()] }),
      };
    });
  }

  return (
    <div>
      <div className="form">
        <label>Gender</label>
        <select onChange={handleFilterChange} name="Gender" id="Gender">
          <option value="all">All</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <div>
          <label for="minAge">min Age</label>
          <input onChange={handleFilterChange} type="range" name="MinAge" step="3" min="17" max="32" value={filters.MinAge} />
          <br />
          <label for="maxAge">max Age</label>
          <input onChange={handleFilterChange} type="range" name="MaxAge" value={filters.MaxAge} step="3" min="32" max="50" />
        </div>
        <label>Current Location</label>
        <select onChange={handleFilterChange} name="CurrentLocation">
          <option value="All">All</option>
          <option value="Ramat-HaGolan District">Ramat-HaGolan District</option>
          <option value="Haifa District">Haifa District </option>
          <option value="Hadera District">Hadera District</option>
          <option value="HaSharon District">HaSharon District</option>
          <option value="Tel Aviv District">Tel Aviv District</option>
          <option value="Jerusalem District">Jerusalem District</option>
          <option value="Yehuda HaShomron District">Yehuda HaShomron District</option>
          <option value="Beer-Sheva District">Beer-Sheva District</option>
          <option value="Eilat District">Eilat District</option>
        </select>
        <label>Move To</label>
        <select onChange={handleFilterChange} name="MoveTo" id="Move To">
          <option value="All">All</option>
          <option value="Female">Ramat-HaGolan District</option>
          <option value="Haifa District">Haifa District </option>
          <option value="Hadera District">Hadera District</option>
          <option value="HaSharon District">HaSharon District</option>
          <option value="Tel Aviv District">Tel Aviv District</option>
          <option value="Jerusalem District">Jerusalem District</option>
          <option value="Yehuda HaShomron District">Yehuda HaShomron District</option>
          <option value="Beer-Sheva District">Beer-Sheva District</option>
          <option value="Eilat District">Eilat District</option>
        </select>
        <label>University</label>
        <select onChange={handleFilterChange} name="University">
          <option value="All">All</option>
          <option value="Technion ">Technion</option>
          <option value="Hebrew University of Jerusalem">Hebrew University of Jerusalem </option>
          <option value="Weizmann Institute of Science">Weizmann Institute of Science </option>
          <option value="Bar-Ilan University">Bar-Ilan University </option>
          <option value="Tel Aviv University">Tel Aviv University </option>
          <option value="University of Haifa">University of Haifa </option>
          <option value="Open University of Israel">Open University of Israel </option>
          <option value="Ben-Gurion University">Ben-Gurion University </option>
          <option value="Ariel University ">Ariel University </option>
        </select>

        <label>Roomates</label>
        <select onChange={handleFilterChange} name="Roomates" id="Roomates">
          <option value="all">All</option>
          <option value="0">0</option>
          <option value="1">1</option>
        </select>

        <div>
          <label for="minPrice">Min price</label>
          <input
            className="filterinput"
            onChange={handleFilterChange}
            type="range"
            step="250"
            name="MinPrice"
            min="0"
            max="2500"
            value={filters.MinPrice}
          />
          <br />
          <label>Max price</label>
          <input onChange={handleFilterChange} type="range" step="250" name="MaxPrice" value={filters.MaxPrice} min="2500" max="5000" />
        </div>
        <label>Studying Field</label>
        <select onChange={handleFilterChange} name="StudyingField" id="Studying Field">
          <option value="All">All</option>

          <option value="Humanities and social science">Humanities and social science</option>
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

        <h1>Traits</h1>

        <div>
          <input onChange={handleFilterChange} type="checkbox" value="Quit" name="Quit" />
          <label>Quit</label>
          <input onChange={handleFilterChange} type="checkbox" name="Studying loudly" />
          <label>Studying loudly</label>
          <input onChange={handleFilterChange} type="checkbox" name="Organized" />
          <label>Organized</label>
          <input onChange={handleFilterChange} type="checkbox" name="Staying up late" />
          <label>Staying up late</label>
          <input onChange={handleFilterChange} type="checkbox" name="Smoke" />

          <label>Smoke</label>
          <input onChange={handleFilterChange} type="checkbox" name="Social person" />

          <label>Social person</label>
          <input onChange={handleFilterChange} type="checkbox" name="Have pets" />
          <label>Have pets</label>
          <input onChange={handleFilterChange} type="checkbox" name="Cooks" />
          <label>Cooks</label>
        </div>
      </div>

      {/* <AllPosts> */}
      <FilterData allProfilesData={allProfilesData} />
    </div>
  );
}

export default FindRoomate;
