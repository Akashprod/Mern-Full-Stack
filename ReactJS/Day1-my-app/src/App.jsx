
import './App.css';
import { Button } from './Button/Button';
import { Greetings } from './Greetings/Greetings';
import { List } from './Activity/list';
import data from './Activity/data';


function App() {
  const clickButton1 = ()=>{
    alert("Button1 clicked");
  }
  const clickButton2 = ()=>{
    alert("Button2 clicked");
  }
  const clickButton3 = ()=>{
    alert("Button3 clicked");
  }

  let isUserAuthenticated = false;
  return (
    <div className="App">

      <Greetings />

    {isUserAuthenticated ? (<h1>User Authenticated</h1>):(<h1>User Not Authenticated</h1>)}

      <Button
        buttonText = "SignIn"
        backGroundColor = "red"
        textColor = "black"
        click = {clickButton1}
      ></Button>
      <Button
        buttonText = "LogIn"
        backGroundColor = "brown"
        textColor = "aqua"
        click = {clickButton2}
      ></Button>
      <Button
        buttonText = "LogOut"
        backGroundColor = "blue"
        textColor = "white"
        click = {clickButton3}

      ></Button>

    <h3>{data.length} birthdays today</h3>
    <List people={data}/>
    </div>
  );
}

export default App;
