import './UsefullInfo.css'
import { ArrowDownward } from '@material-ui/icons';

const UsefullInfo = () => {
    return (
        <div className="usefull-info">
          <div className="usefull-Item Item1">
            <span className="usefull-Info-Title"> Revanue</span>
            <div className="usefull-Info-Value-Container">
                <span className="usefull-Info-Value">$1,000,000</span>
                <span className="usefull-Info-Value-Unit">
                    -14.5%
                    <ArrowDownward className="usefullIcon negative"/>
                </span>
            </div>
            <span className="usefull-Info-Value-Sub">compared to last Month</span>
            </div>
            <div className="usefull-Item Item2">
            <span className="usefull-Info-Title"> Sales</span>
            <div className="usefull-Info-Value-Container"> 
                <span className="usefull-Info-Value">$1,000,000</span>
                <span className="usefull-Info-Value-Unit">
                    -14.5%
                    <ArrowDownward className="usefull-Icon negative"/>   
                </span>
            </div>
            <span className="usefull-Info-Value-Sub">compared to last Month</span>
            </div>
            <div className="usefull-Item Item3">
            <span className="usefull-Info-Title"> Cost</span>
            <div className="usefull-Info-Value-Container">
                <span className="usefull-Info-Value">$1,000,000</span>
                <span className="usefull-Info-Value-Unit">
                    -14.5%
                    <ArrowDownward className="usefullIcon negative"/>
                </span>
            </div>
            <span className="usefull-Info-Value-Sub">compared to last Month</span>  
            </div>
        </div>






    )
}

export default UsefullInfo