import axios from "axios";
import { useEffect, useState } from "react";
import StudentDash from "../dashboard/Student/StudentDash";
import TeacherDash from "../dashboard/Teacher/TeacherDash";


const PrivateScreen = ({history}) => {
  const [error, setError] = useState("");
  const [privateData, setPrivateData] = useState("");

  useEffect(() => {

    if(!localStorage.getItem("authToken")){
      history.push("/home")
    }

    const fetchPrivateDate = async () => {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      };

      try {
        const {data} = await axios.get("/api/private", config);
        // console.log(data.user);
        setPrivateData(data.user);
      } catch (error) {
        localStorage.removeItem("authToken");
        setError("You are not authorized please login");
      }
    };

    fetchPrivateDate();
    // if(privateData.role==="teacher")
    // history.push("./teacherDash");
    // else if(privateData.role==="student")
    // history.push("./studentDash");
  }, [history,privateData]);

  // const logoutHandler = () => {
  //   localStorage.removeItem("authToken");
  //   history.push("./login");
  // };

  return error ? (
    <span className="error-message">{error}</span>
  ) : (
    <>
    {/* {/* <div style = {{background: "green", color: "white"}}>Welcome {privateData.username}</div> */}
    {/* <button onClick = {logoutHandler}>Logout</button>  */}
  
    
    { privateData.role==="teacher" && <TeacherDash user = {privateData}/> }
    
     { privateData.role==="student" && < StudentDash username={privateData.username} />    }
    </>
  );
};

export default PrivateScreen;
