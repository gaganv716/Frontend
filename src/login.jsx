import axios from "axios";
export default function Login(props) {
    // export default async function Login(setAuth) {
    async function handleClick(){
        const response =  await axios.post("https://backend-on2l.onrender.com/") ; 
        if(response){
            props.setAuth(response.data.success);
        }
        else{
            props.setAuth(false);
        }
    }

  return (
    <>
    <h1>This is Login</h1>
    <button onClick={handleClick}>Login</button>
    </>
  )
}