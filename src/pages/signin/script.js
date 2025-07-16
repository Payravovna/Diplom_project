import axios from "axios"
import { setCookie } from "../../utils/cookie"
import { redirect } from "../../utils/helpers"

let form = document.forms.FormData
console.log(form);

form.onsubmit = async(e) => {
    e.preventDefault()
    let fn = new FormData(form)

    let email = fn.get("email")
    let password = fn.get("password")


    let user = {
       email: email,
       password: password,
       strategy: "local"
    }

    try{
        let res = await axios.post("https://blog-n7ue.onrender.com/authentication",
            user
         )
        console.log(res);
        setCookie("accessToken", res.data.accessToken , 1)
        redirect("/") 
        
    }catch(error){
        console.error(error)
    }
}
