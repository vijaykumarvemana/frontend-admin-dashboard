import '../profile/Profile.css';

const Profile = ({user}) => {
    console.log(user[0].name);

    return (
        <div class="card">
        <img src="https://previews.123rf.com/images/panyamail/panyamail1809/panyamail180900343/109879063-user-avatar-icon-sign-profile-symbol.jpg" alt="John"  />
        <h1>John Doe</h1>
        <p class="title">CEO & Founder, Example</p>
        <p className="profile-info">Harvard University</p>
        
        <p className="profile-edit"><button className="bnt">Contact</button></p>
      </div>
    );
}

export default Profile;
