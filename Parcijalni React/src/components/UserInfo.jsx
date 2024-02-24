const UserInfo = ({ user }) => {
  return (
    <div className="user_info">
      <div className="info_top">
        <img src={user.avatar_url} alt="Avatar usera" />
        <p>{user.name}</p>
      </div>
      <div className="info_bottom">
        <p>
          <span>bio: </span> {user.bio}
        </p>
        <p>
          <span>location: </span>
          {user.location}
        </p>
      </div>
    </div>
  );
};

export default UserInfo;
