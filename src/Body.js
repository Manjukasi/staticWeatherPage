import SideBar from "./Sidebar";
import Header from "./Header";
import GraphContent from "./GraphContent";
import Analysis from './Analysis'


const Body = () =>{
    return  (
        <div className="main-container">
            <SideBar />
            <div className="main-page">
                <Header />
                <GraphContent />
                <Analysis />
            </div>
        </div>
    )
}
export default Body;