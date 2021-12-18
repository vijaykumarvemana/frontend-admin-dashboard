import './UsefullInfo.css'
import { ArrowDownward, PaymentRounded, PeopleRounded } from '@material-ui/icons';

import {InsertChart , CategoryRounded} from '@material-ui/icons';
import { useSelector } from 'react-redux';
const UsefullInfo = () => {
    const products = useSelector(state => state.product.products);
    const customers = useSelector(state => state.customer.customers);
    const transactions = useSelector(state => state.transaction.transactions);
    
    return (
        <div className="d-flex text-white usefull-info">
        
          <div className="usefull-Item Item1">
            <span className="usefull-Info-Title">Total Products</span>
            
            <div className="usefull-Info-Value-Container">
                <span className="usefull-Info-Value">
                     <CategoryRounded />
                     </span>
                <span className="usefull-Info-Value-Unit">
                {products.length}
                  
                </span>
            </div>
            
            </div>
            <div className="usefull-Item Item2">
            <span className="usefull-Info-Title"> Total Users</span>
            <div className="usefull-Info-Value-Container"> 
                <span className="usefull-Info-Value">
                    <PeopleRounded />
                </span>
                <span className="usefull-Info-Value-Unit">
                {customers.length}
                     
                </span>
            </div>
            
            </div>
            <div className="usefull-Item Item3">
            <span className="usefull-Info-Title"> Transactions</span>
            <div className="usefull-Info-Value-Container">
                <span className="usefull-Info-Value">
                     <PaymentRounded />
                </span>
                <span className="usefull-Info-Value-Unit">
                  {transactions.length} 
                    
                </span>
            </div>
              
            </div>
     
</div>





    )
}

export default UsefullInfo