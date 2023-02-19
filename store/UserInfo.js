export default Setuser=async(data)=>{
    await localstorage.setItem("user",JSON.stringify(data));
}
export default GetUser=async()=>{
   const user= await localstorage.getItem("user");
   return user;
}