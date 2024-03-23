import React,{useState , useEffect} from "react";

const Profile = ({id}) => {
    const[user , setUser] = useState(null);

    useEffect(()=>{
        fetch(`https://dummyjson.com/users/${id}`)
        .then((res) => res.json())
        .then((data) => { 
            console.log(data);
            setUser(data);
        })
        .catch((error)=> console.log("Error fetching user"));
    },[id])

    return(
        <div>
            <h1>Profile</h1>
            {user ? (
                  <p>user detaile</p>
            ) : <p>Loading...</p>
        }
        </div>
    )
}

export default Profile;