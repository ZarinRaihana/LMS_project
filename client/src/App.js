  
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Profile from "./components/dashboard/Profile";
// import StudentDash from "./components/dashboard/Student/StudentDash";
// import TeacherDash from "./components/dashboard/Teacher/TeacherDash";
import home from "./components/home/Home";
import AddQues from './components/question/addQues/AddQues';
import AnsQues from "./components/question/ansQues/AnsQues";
import Result from './components/result/Result';
import LoginScreen from "./components/screens/LoginScreen";
import PrivateScreen from "./components/screens/PrivateScreen";
import RegisterScreen from "./components/screens/RegisterScreen";



const App = () => {
  return (
    <Router>
        <div className="app">

          <Switch>
            <Route exact path="/" component={PrivateScreen} />
            <Route exact path="/home" component={home} />
            <Route exact path="/login" component={LoginScreen} />
            <Route exact path="/register" component={RegisterScreen} />
            {/* <Route exact path="/teacherDash" component={TeacherDash} /> */}
            <Route exact path="/teacherDash/:id" component={AddQues} />
            {/* <Route exact path="/studentDash" component={StudentDash} /> */}
            <Route exact path="/studentDash/:id" component={AnsQues} />
            <Route exact path="/result/:id" component={Result} />
            {/* <Route exact path="/profile" component={Profile} /> */}

          </Switch>
        </div>
    </Router>
  );
}

export default App;
