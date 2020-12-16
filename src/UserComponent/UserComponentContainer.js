import { useState, useEffect } from "react";
import axios from "axios";
import UserComponent from "./UserComponent";

const UserComponentContainer = (props) => {
  const [user, setUser] = useState(null);
  console.log(user);
  useEffect(() => {
    (async () => {
      const response = await axios.get(
        "https://reqres.in/api/users/" + props.match.params.id
      );
      setUser(response.data.data);
    })();
  }, [props.match.params.id]);

  return user ? <UserComponent user={user} /> : <p>Loading</p>;
};
export default UserComponentContainer;
