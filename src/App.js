import React from "react";
import Dashboard  from "./dashboard";
import { Menu , Avatar} from "antd";
import "./App.css";

import { Route,Routes, useNavigate } from "react-router-dom";
function App() {
  
  return (<div style={{display: "flex", flexDirection: "row",width: "1440px", height: "812px"}}>
    
     <Sidemenu/>
      <Content/>
      </div>
  );
}


function Sidemenu(){
  const navigate=useNavigate();
  return <div className="Sidemenu">

  <div className="nav">
  <h3>Logo Here</h3>
  <div>
  </div>
  <Menu
  onClick={({key})=>{
    if (key==="signout"){
      //TODO , Signout Features here
    }
    else{
      navigate(key);
    }
  }}
  items={[
    { label: "OverView" ,key:"/"},
    { label: "Onboarding",key:"/onboarding" },
    { label: "Monitoring",key:"/Monitoring" },
    { label: "Flagging" ,key:"/Flagging"},
    { label: "Source of Income",key:"/Source" },
    { label: "UAR" ,key:"/UAR"},
  ]}
></Menu>
</div>
<div style={{display: "flex", flexDirection: "row" }}>
<div style={{alignSelf:"center"}}>
<Avatar src="https://cdn.vox-cdn.com/thumbor/WYZNb2sx7XuDb9ALk49LQtjF_IQ=/0x0:4000x2781/1400x1400/filters:focal(2000x1391:2001x1392)/cdn.vox-cdn.com/uploads/chorus_asset/file/22520460/1229901686.jpg"/>

</div>
<div><div>Elon Musk</div>
<div>elon@tweeter.com</div></div>
</div>
</div>
}




function Content() {
  return <div>
  <h1>Monitoring</h1>
  <Routes>
  <Route path="/" element={<div>OverView</div>}></Route>
  <Route path="/onboarding" element={<div>onboarding</div>}></Route>
  <Route path="/Monitoring" element={<div>Monitoring Dashboard</div>}></Route>
  <Route path="/Flagging" element={<div>Flagging</div>}></Route>
  <Route path="/Source" element={<div>Source</div>}></Route>
  <Route path="/UAR" element={<div>UAR</div>}></Route>

  </Routes>
  <Dashboard/>
  </div>
  
  
}
export default App;
