let box = document.getElementById("UserCards");
let apidata = async () => {
    let response = await fetch("https://reqres.in/api/users?page=1");
    let file = await response.json();
    let data = file.data
        .map((element) => {
            return `<div class="cards">
        <div class="profile-image">
            <img src="${element.avatar}" align="center" >
        </div>
        <div class="cardinfo">
        ID : ${element.id}<br>
        Full Name:   ${element.first_name} ${element.last_name}<br>
        Email:    ${element.email}<br>
            
        </div>
    </div>`;
        })
        .join("");
    userCards.innerHTML = data;
}; let navBtn = document.getElementById("button");
navBtn.addEventListener("click", () => {
   
    setTimeout(() => {
        apidata();
    }, );
});

 