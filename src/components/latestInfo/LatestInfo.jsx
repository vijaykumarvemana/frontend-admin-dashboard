import "./LatestInfo.css"
import { useState, useEffect } from "react"
import { format, parseISO } from 'date-fns'
const LatestInfo = () => {
    const BASE_URL = process.env.REACT_APP_API_URL;
  const [latestInfo, setLatestInfo] = useState([])
    useEffect(() => {
        fetchLatestInfo()
    }, [])

    const fetchLatestInfo = async () => {
        try {
            const response = await fetch(`${BASE_URL}/transactions`)
            const data = await response.json()
            console.log(data)
            setLatestInfo(data)
        }
        catch (error) {
            console.log(error)
        }
    }

    latestInfo.map(info => {
        console.log(info.customer)
        console.log(info.product)
        console.log(info.Date)
        // const Button = ({info}) => {
        //     return <button className={'latest-info-button' + type}>{info.status}</button> 
        //    }
    })




  
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
                {
                    latestInfo.map(transaction => <tr className="latest-info-table-row">
                    <td className="latest-info-table-user">
                        <img className="latest-info-table-user-img" src={((transaction.customer) ||{}).avatar} alt="user-img"/>
                        <span className="latest-info-table-user-name">{((transaction.customer) ||{}).name}</span>
                    </td>
                    <td className="latest-info-table-date">{  format( 
                                                parseISO(transaction.Date) , "yyyy MMM dd")}</td>
                    <td className="latest-info-table-amount">{transaction.Amount}</td>
                    {
                        transaction.Status === "Pending" ? <td className="latest-info-table-status"><span className="latest-info-table-status-pending">{transaction.Status}</span></td> :
                        transaction.Status === "Accepted" ? <td className="latest-info-table-status"><span className="latest-info-table-status-approved">{transaction.Status}</span></td> :
           
                        <td className="latest-info-table-status"><span className="latest-info-table-status-rejected">{transaction.Status}</span></td> 
                    }
                    
                </tr>

                )
                }
                
                {/* <tr className="latest-info-table-row">
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
                </tr> */}
                </table>
        </div>

    
    )
}


export default LatestInfo;