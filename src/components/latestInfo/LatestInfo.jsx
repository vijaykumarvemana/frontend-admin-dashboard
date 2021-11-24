import "./LatestInfo.css"
const LatestInfo = () => {
   const Button = ({type}) => {
    return <button className={'latest-info-button' + type}>{type}</button> 
   }
    return(
        <div className="latest-info">
         <h3 className="latest-info-title">Latest Info</h3>
         <table className="latest-info-table">
             <tr className="latest-info-table-row">
                 <th className="latest-info-table-header">Customer</th>
                    <th className="latest-info-table-header">Date</th>
                    <th className="latest-info-table-header">Amount</th>
                    <th className="latest-info-table-header">Status</th>
                </tr>
                <tr className="latest-info-table-row">
                    <td className="latest-info-table-user">
                        <img className="latest-info-table-user-img" src="https://www.w3schools.com/howto/img_avatar.png" alt="user-img"/>
                        <span className="latest-info-table-user-name">John Doe</span>
                    </td>
                    <td className="latest-info-table-date">2 Jun 2021</td>
                    <td className="latest-info-table-amount">$100</td>
                    <td className="latest-info-table-status"><Button type="Pending" /></td>
                </tr>
                <tr className="latest-info-table-row">
                    <td className="latest-info-table-user">
                        <img className="latest-info-table-user-img" src="https://www.w3schools.com/howto/img_avatar.png" alt="user-img"/>
                        <span className="latest-info-table-user-name">John Doe</span>
                    </td>
                    <td className="latest-info-table-date">2 Jun 2021</td>
                    <td className="latest-info-table-amount">$100</td>
                    <td className="latest-info-table-status"><Button type="Pending" /></td>
                </tr>
                <tr className="latest-info-table-row">
                    <td className="latest-info-table-user">
                        <img className="latest-info-table-user-img" src="https://www.w3schools.com/howto/img_avatar.png" alt="user-img"/>
                        <span className="latest-info-table-user-name">John Doe</span>
                    </td>
                    <td className="latest-info-table-date">2 Jun 2021</td>
                    <td className="latest-info-table-amount">$100</td>
                    <td className="latest-info-table-status"><Button type="Pending" /></td>
                </tr>
                <tr className="latest-info-table-row">
                    <td className="latest-info-table-user">
                        <img className="latest-info-table-user-img" src="https://www.w3schools.com/howto/img_avatar.png" alt="user-img"/>
                        <span className="latest-info-table-user-name">John Doe</span>
                    </td>
                    <td className="latest-info-table-date">2 Jun 2021</td>
                    <td className="latest-info-table-amount">$100</td>
                    <td className="latest-info-table-status"><Button type="Pending" /></td>
                </tr>
                </table>
        </div>

    
    )
}


export default LatestInfo;