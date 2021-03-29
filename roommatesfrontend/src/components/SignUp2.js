import React from "react";
// import "../style/Form.css";
import postUsers from "../fetches/fetchSignUp.js";
import SignUp from "../components/SignUp.js";

function SignUp2() {
  const [signup2, setSignup2] = React.useState({
    gender: "",
    age: "",
    currentloc: "",
    moveto: " ",
    university: "",
    price: " ",
    roommatesnum: "",
    studying: " ",
    pic: " ",
  });

  const signupp = window.localStorage.getItem("signup");
  console.log(JSON.parse(signupp));
  const signup1 = JSON.parse(signupp);
  const signup3 = {
    ...signup2,
    ...signup1,
  };

  console.log(signup3);
  function handelClick(e) {
    e.preventDefault();

    postUsers(signup3);
    window.location.href = "/login";
  }

  function handelChange(event) {
    const { name, value } = event.target;
    setSignup2((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  return (
    <form onSubmit={handelClick}>
      <label>Gender</label>
      <select name="Gender" id="Gender">
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>
      <div>
        <input
          type="age"
          placeholder="Age"
          onChange={handelChange}
          name="age"
          required
        />
      </div>
      <label>Current Location</label>
      <select name="Current Location" id="Current Location">
        <option value="All">All</option>
        <option value="Ramat-HaGolan District">Ramat-HaGolan District</option>
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
      <label>Move To</label>
      <select name="Move To" id="Move To">
        <option value="All">All</option>
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
      <label>University</label>
      <select name="University">
        <option value="All">All</option>
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
        <option value="Ben-Gurion University ">Ben-Gurion University </option>
        <option value="Ariel University ">Ariel University </option>
      </select>

      <label>Roomates</label>
      <select name="Roomates" id="Roomates">
        <option value="0">0</option>
        <option value="1">1</option>
      </select>

      <div>
        <input
          type="price"
          placeholder="Price"
          onChange={handelChange}
          name="price"
          required
        />
      </div>
      <label>Studying Field</label>
      <select name="Studying Field" id="Studying Field">
        <option value="All">All</option>

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

      <h1>Traits</h1>

      <div>
        <input type="checkbox" name="Quit" />
        <label>Quit</label>
        <input type="checkbox" name="Studying loudly" />
        <label>Studying loudly</label>
        <input type="checkbox" name="Organized" />
        <label>Organized</label>
        <input type="checkbox" name="Staying up late" />
        <label>Staying up late</label>
        <input type="checkbox" name="Smokes" />

        <label>Smokes</label>
        <input type="checkbox" name="Social person" />

        <label>Social person</label>
        <input type="checkbox" name="Have pets" />
        <label>Have pets</label>
        <input type="checkbox" name="Cooks" />
        <label>Cooks</label>
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}

export default SignUp2;
