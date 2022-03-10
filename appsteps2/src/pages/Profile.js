import React from "react";
import { useParams } from "react-router-dom";

function Profile() {
  const { userId } = useParams();

  return <h1>{userId}</h1>;
}

export default Profile;