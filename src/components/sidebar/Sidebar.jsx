import './Sidebar.css'
import { AttachMoney, BarChart, DynamicFeed, LineStyle, MailOutline, PermIdentity, Storefront, Timeline, TrendingUp } from "@material-ui/icons"
import { Link } from 'react-router-dom';


const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar-Wrapper">
                <div className="sidebar-Menu">
                    <h3 className="sidebar-Title">Menu</h3>
                    <ul className="sidebar-List">
                        <Link to="/" className="link">
                        <li className="sidebar-Item active">
                            <LineStyle className="sidebar-Icon" />
                            Home
                        </li>
                        </Link>
                        <Link to="/users" className="link">
                        <li className="sidebar-Item">
                            <PermIdentity className="sidebar-Icon" />
                            Users 
                        </li>
                        </Link>
                        <Link to="/products" className="link">
                        <li className="sidebar-Item ">
                            <Storefront className="sidebar-Icon" />
                            Products
                        </li>
                        </Link>
                    <li className="sidebar-Item">
                        <AttachMoney className="sidebar-Icon" />
                        Transactions 
                    </li>
                    <li className="sidebar-Item">
                        <TrendingUp className="sidebar-Icon" />
                        Sales
                    </li>
                    

                    {/* <li className="sidebar-Item">
                        <BarChart className="sidebar-Icon" />
                        Reports
                    </li> */}
                    </ul>
                </div>
                <div className="sidebar-Menu">
                    <h3 className="sidebar-Title">Notifications</h3>
                    <ul className="sidebar-List">
                        <li className="sidebar-Item">
                            <MailOutline className="sidebar-Icon" />
                            Mail 
                        </li>
                        {/* <li className="sidebar-Item">
                            <DynamicFeed className="sidebar-Icon" />
                            Feedback 
                        </li> */}
                        <li className="sidebar-Item">
                            <Timeline className="sidebar-Icon" />
                            Analytics 
                        </li>
                    </ul>
                </div>
                </div>
            </div>


    )
}

export default Sidebar;