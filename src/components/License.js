import React, { useEffect, useState } from "react";

const License = (props) => {
  let [licenseData, setLicenseData] = useState([]);

  useEffect(()=>{
    setLicenseData([props.licenseDetails])
    //   async function LicenseType() {
    //       const Data = await fetch("http://localhost:8000/accounts/license/get_choice_fields/");
    //       const res = await Data.json();
    //       setData(res);
    //     }

    //     LicenseType();
  },[props.licenseDetails])

//   function DeleteLicense(licenseNumber) {
//     props.licenseRemoved(licenseNumber);

//     fetch(
//       "http://127.0.0.1:8000/accounts/license/d43bb21d-2e50-4715-8d0b-7db31842dd2c/delete-user-license/",
//       {
//         method: "DELETE",
//         header: [
//           {
//             key: "Authorization",
//             value:
//               "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjg0MjM1NDM3LCJpYXQiOjE2ODQxNDkwMzcsImp0aSI6Ijc5YzAyYmU5MzBlMjRlMWZiMjVmOGQ3MGJhYmIyOWRjIiwidXNlcl9pZCI6Ijc5MGFlNTMxLTc4NjItNDU3Mi05ZWIwLWVlYjgyYTdkZWNmMSJ9.mbGWFCq3ge2LXxBvvtkjrtDrFIBJdoP672JTV4zioiY",
//             type: "text",
//           },
//         ],
//       }
//     )
//       .then((response) => response.json())
//       .then((response) => console.log(response))
//       .catch((error) => console.log(error));
//   }

  return (
    <div className="AllLicense">
      {props.licenseDetails.map((ele) => {
        return (
          <div className="SingleLicense">
            <p id="license_number">{ele.licenseNumber}</p>
            <div className="license_details">
              <div>
                <p>User ID: {ele.user}</p>
                <p>License Type: {ele.type}</p>
              </div>
              <div style={{ marginLeft: "3%", color: "black" }}>
                <p>Issued By</p>
                <p style={{ fontWeight: "600", color: "yellow" }}>
                  {ele.country}
                </p>
              </div>
            </div>
            <div className="license_details">
              <p>{ele.from}</p>
              <p>To</p>
              <p>{ele.to}</p>
            </div>
            <button onClick={()=>props.licenseRemoved(ele.licenseNumber)} style={{ background: "red" }}>
              Delete
            </button>
          </div>
        );
      })}

      {/* <div className='SingleLicense'>
            <p id='license_number'>13091996</p>
            <div className='license_details'>
                <div>
                    <p>User ID: 1309</p>
                    <p>License Type: Learning</p>
                </div>
                <div style={{marginLeft:"3%", color:"black"}}>
                    <p >Issued By</p>
                    <p style={{fontWeight:"600", color:"yellow"}}>INDIA</p>
                </div>
            </div>
            <div className='license_details'>
                <p>01 Jan 2022</p>
                <p>To</p>
                <p>01 Jan 2032</p>
            </div>
            <button onClick={DeleteLicense} style={{background:"red"}}>Delete</button>
        </div> */}
    </div>
  );
};

export default License;
