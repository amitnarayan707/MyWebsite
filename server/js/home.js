import { ajax } from "./ajax.js";
// let xhr = new XMLHttpRequest();
// document.getElementById("profileImg").addEventListener("onchange", () => {
//     document.getElementById("profilePreview").scr=this.value
// })

// //profile Image Post request
let sendProfile = document.getElementById("profile")
sendProfile.addEventListener("submit", (e) => {
    e.preventDefault();
        let data=document.forms.namedItem("profile")
        let formData = new FormData();
        let image = document.getElementById("profileImg").files[0];
        formData.append("profileImg",image,image.name)
    //     xhr.open("POST", "/profile", true);
    //     // xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    //     xhr.onprogress = () => {
    //         document.getElementById("msg").innerText = `uploading`;
    //         console.log("uploading");
    //     }
    //     xhr.onload = ()=>{
    //         if (xhr.status == 200)
    //         {
    //             let data = JSON.parse(xhr.responseText)
    //             console.log(data);
    //             document.getElementById("profilePreview").src = `/image/${data.url}`
    //             document.getElementById("msg").innerText = data.msg;
    //         }
    //     }
    //     xhr.send(formData);
    //     console.log("working");
    // })

    let http = new ajax();
    let a = http.post("/profile", formData, "application/x-www-form-urlencoded");
    console.log(a);
})