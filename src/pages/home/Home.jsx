import Navbar from "../../components/navbar/Navbar"
import Sidebar from "../../components/sidebar/Sidebar"
import "./home.scss"
import Widget from "../../components/widget/Widget";
import List from "../../components/table/Table";


const Home = () => {
    return (
        <div className="home">
            <Sidebar/>
            <div className="homecontainer">
                <Navbar/>
                <div className="widgets">
                    <Widget type="user" />
                    <Widget type="order" />
                </div>
            <div className="listContainer">
                <div className="listTitle">Ultimos Reclamantes</div>
                <List/>
            </div>
            </div>
        </div>
    )
}

export default Home