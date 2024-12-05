import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const { user, isLogin } = useSelector((state) => state.users);
  const navigate = useNavigate()
  useEffect(()=>{
    if(!isLogin)navigate("/login")
  },[isLogin])
  return (
    <div>
      <h1>Profile Component</h1>
      <h3>{user?.name}</h3>
      <h4>{user?.email}</h4>
    </div>
  );
};

export default Profile;
