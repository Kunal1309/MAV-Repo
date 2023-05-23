import React, { useEffect } from "react";
import { useState } from "react";
import License from "./License";
import { Link } from "react-router-dom";
import { TextField, Button, InputLabel, Select, MenuItem, FormControl } from "@mui/material";

const LicenseForm = () => {
  let [licenseNumber, setLicenseNumber] = useState("");
  let [startDtate, setStartDate] = useState("");
  let [endDate, setEndDate] = useState("");
  let [country, setCountry] = useState("");
  let [doc, setDoc] = useState("");
  let [userId, setUserId] = useState("");
  let [category, setCategory] = useState("");
  let [licenseType, setLicenseType] = useState("");
  let [licenseDetails, setLicenseDetails] = useState([
    {
      licenseNumber: "13091996",
      user: "1309",
      type: "Learning",
      country: "INDIA",
      from: "01/01/2022",
      to: "01/01/2032",
    },
    {
      licenseNumber: "20121995",
      user: "1309",
      type: "Learning",
      country: "INDIA",
      from: "01/01/2022",
      to: "01/01/2032",
    },
  ]);
  let [data, setData] = useState([]);

  useEffect(()=>{
    async function LicenseType() {
      const Data = await fetch("http://localhost:8000/accounts/license/get_choice_fields/");
      const res = await Data.json();
      setData(res);
    }
    
    LicenseType();
  },[])

  function licenseRemoved(licenseNumber){
    const result = licenseDetails.filter((ele)=> ele.licenseNumber != licenseNumber)
    setLicenseDetails(result);
    
    fetch(
      "http://127.0.0.1:8000/accounts/license/d43bb21d-2e50-4715-8d0b-7db31842dd2c/delete-user-license/",
      {
        method: "DELETE",
        header: [
          {
            key: "Authorization",
            value:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjg0MjM1NDM3LCJpYXQiOjE2ODQxNDkwMzcsImp0aSI6Ijc5YzAyYmU5MzBlMjRlMWZiMjVmOGQ3MGJhYmIyOWRjIiwidXNlcl9pZCI6Ijc5MGFlNTMxLTc4NjItNDU3Mi05ZWIwLWVlYjgyYTdkZWNmMSJ9.mbGWFCq3ge2LXxBvvtkjrtDrFIBJdoP672JTV4zioiY",
            type: "text",
          },
        ],
      }
    )
      .then((response) => response.json())
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  }

  function LicenseAdded(e){
    e.preventDefault();
    let detail = { licenseNumber, startDtate, endDate, country, doc, userId, category, licenseType };
    setLicenseDetails([...licenseDetails, {detail}]);
    console.log(licenseDetails)

    setLicenseNumber("");
    setStartDate("");
    setEndDate("");
    setCountry("");
    setDoc("");
    setUserId("");
    setCategory("");
    setLicenseDetails("");

    fetch("https://dev.api.mavaerosafety.com/accounts/license/add-user-license/", {
      method: "POST",
      header: [
					{
						"key": "Authorization",
						"value": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjgzODcxMDU3LCJpYXQiOjE2ODM3ODQ2NTcsImp0aSI6ImZkOTgxYzE2YzgzYjQzZmZiNTBlYmU3OWI5M2VkOGYwIiwidXNlcl9pZCI6Ijc5MGFlNTMxLTc4NjItNDU3Mi05ZWIwLWVlYjgyYTdkZWNmMSJ9.VnVh18uMStjg1gdhJsgG2BlytgQ51wNcwME9H5z3fxM",
						"type": "text"
					}
				],
      body: JSON.stringify(licenseDetails),
    })
      .then((response) => response.json())
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  }

  return (
    <div style={{margin: "5%", display: "flex", justifyContent: "space-between"}}>
      <form
        method="post"
        action="#"
        onSubmit={LicenseAdded}
        style={{ marginTop: "8%", display: "flex", flexDirection: "column" }}
      >
        <p className="content" style={{fontSize: "1.5rem", color:"green", position:"sticky", top:"3%", marginTop:"7%"}}>ADD LICENSE here!</p>
        <TextField
          value={licenseNumber}
          onChange={(e) => {
            setLicenseNumber(e.target.value);
          }}
          style={{ margin: "2% auto 2% 5%", width: "300px" }}
          id="outlined-LicenseNumber"
          label="License Number"
          variant="outlined"
          autoComplete="License Number"
          required
        />

        <TextField
          value={startDtate}
          onChange={(e) => {
            setStartDate(e.target.value);
          }}
          style={{ marginLeft: "5%", width: "300px" }}
          id="valid-from"
          label="Valid-From"
          variant="outlined"
          type="date"
          autoComplete="Valid From"
          required
        />

        <TextField
          value={endDate}
          onChange={(e) => {
            setEndDate(e.target.value);
          }}
          style={{ margin: "2% auto 2% 5%", width: "300px" }}
          id="valid-till"
          label="Valid-Till"
          variant="outlined"
          type="date"
          autoComplete="valid till"
          required
        />

        <TextField
          value={country}
          onChange={(e) => {
            setCountry(e.target.value);
          }}
          style={{ marginLeft: "5%", width: "300px" }}
          id="issue-country"
          label="Issue-Country"
          variant="outlined"
          autoComplete="issue-country"
        />

        <TextField
          value={doc}
          onChange={(e) => {
            setDoc(e.target.value);
          }}
          style={{ margin: "2% auto 2% 5%", width: "300px" }}
          id="documents"
          label="document"
          variant="outlined"
          type="file"
          autoComplete="document"
        />

        <TextField
          value={userId}
          onChange={(e) => {
            setUserId(e.target.value);
          }}
          style={{ margin: "0% auto 2% 5%", width: "300px" }}
          id="user-id"
          label="User-ID"
          variant="outlined"
          autoComplete="user-id"
          required
        />

        <FormControl style={{ marginLeft: "5%", width: "300px" }}>
        <InputLabel id="demo-simple-select-label">License Type</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          
          value={licenseType}
          variant="outlined"
          label="License-Type"
          onChange={(e) => {
            setLicenseType(e.target.value);
          }}
        >{
          data.map((ele)=>{
            return(
              <MenuItem value={ele}>{ele}</MenuItem>
            )
          })
        }
        </Select>
        </FormControl>

        <TextField
          value={category}
          onChange={(e) => {
            setCategory(e.target.value);
          }}
          style={{ margin: "2% auto 2% 5%", width: "300px" }}
          id="category"
          label="category"
          variant="outlined"
          autoComplete="category"
        />

        <Button
          type="submit"
          style={{
            margin: "3% 5% 5% 4.8%",
            height: "55px",
            width: "300px",
            border: "1px solid red",
          }}
          variant="contained"
        >
          Add License
        </Button>
        <Link to="/" className="back">
            Back to logIn
        </Link>
      </form>
      <License licenseDetails={licenseDetails} licenseRemoved={licenseRemoved}/>
    </div>
  );
};

export default LicenseForm;
