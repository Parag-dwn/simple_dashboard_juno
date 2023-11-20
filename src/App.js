import React from "react";
import Dashboard  from "./dashboard";
import { Menu , Avatar} from "antd";
import "./App.css";

import { Route,Routes, useNavigate } from "react-router-dom";
function App() {
  
  return (<div style={{display: "flex", flexDirection: "row",width:'100%', height: "100%"}}>
    
     <Sidemenu/>
      <Content/>
      </div>
  );
}


function Sidemenu(){
  const navigate=useNavigate();
  return <div className="Sidemenu">

  <div className="nav">
  
  <div>
  <img style={{width: '85%', height: '100%'}} src="https://s3-alpha-sig.figma.com/img/496a/3b4f/57402a5b816f67732f59a121ef0ef24f?Expires=1701648000&Signature=KroB6kNaQYMkEep-zd7T~L2znS7YZeutdfKvy3lCsQIvZk3Tu0AnW~HyGzpt6O0xLvDzZkr3vrh9v3bbOINb-r~bN7e2ongXk1agRhsXkdaK3Yqa0Y0r3LGTnjAWVLFSbDAArhnlIAFG9Hj4yFHiXXZMqha4ftJkoZc0B9aOQ4IwawsiBFyhU2fPLeGkE89ulzI~F0zx4lAQU29sMiTLdxzaeGdiKovHrPC3c~utcwuD1dG~kqUNFmcY6AUg97wXIqyB9YG-kdnYUN5J4yPCWg7uekp6cAihn4tUOEoFhbxwWcp61yMTf6j1ASV5vOrDzYt42lueCRd4eCGF8R~4Gg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
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
  return <div style={{'padding-left': '45px','width':'100%','paddingRight':'45px'}}>
  <h1>Monitoring</h1>
  <Routes>
  <Route path="/" element={<div></div>}></Route>
  <Route path="/onboarding" element={<div></div>}></Route>
  <Route path="/Monitoring" element={<div></div>}></Route>
  <Route path="/Flagging" element={<div></div>}></Route>
  <Route path="/Source" element={<div></div>}></Route>
  <Route path="/UAR" element={<div></div>}></Route>

  </Routes>
  <Dashboard/>
  </div>
  
  
}
export default App;
