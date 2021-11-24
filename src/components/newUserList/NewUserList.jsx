import { Visibility } from "@material-ui/icons"

const NewUserList = () => {
  return(
    <div className="new-user-list">
        <sapn className="new-user-list-title">New Join Users</sapn>
        <ul className="new-user-list-ul">
            <li className="new-user-list-li">
                <img src="https://avatars1.githubusercontent.com/u/12098981?s=460&v=4" alt="" className="user-image"/>
                <div className="user-info">
                    <span className="user-name">vijay kumar</span>
                    <span className="user-tilte">developer</span>
                </div>
                <button className="user-button">
                    <Visibility className="user-button-icon"/>
                    Display 
                </button>
            </li>
            <li className="new-user-list-li">
                <img src="https://avatars1.githubusercontent.com/u/12098981?s=460&v=4" alt="" className="user-image"/>
                <div className="user-info">
                    <span className="user-name">vijay kumar</span>
                    <span className="user-tilte">developer</span>
                </div>
                <button className="user-button">
                    <Visibility className="user-button-icon"/>
                    Display 
                </button>
            </li>
            <li className="new-user-list-li">
                <img src="https://avatars1.githubusercontent.com/u/12098981?s=460&v=4" alt="" className="user-image"/>
                <div className="user-info">
                    <span className="user-name">vijay kumar</span>
                    <span className="user-tilte">developer</span>
                </div>
                <button className="user-button">
                    <Visibility className="user-button-icon"/>
                    Display 
                </button>
            </li>
            <li className="new-user-list-li">
                <img src="https://avatars1.githubusercontent.com/u/12098981?s=460&v=4" alt="" className="user-image"/>
                <div className="user-info">
                    <span className="user-name">vijay kumar</span>
                    <span className="user-tilte">developer</span>
                </div>
                <button className="user-button">
                    <Visibility className="user-button-icon"/>
                    Display 
                </button>
            </li>
            </ul>
    </div>
    


  )
}
export default NewUserList;