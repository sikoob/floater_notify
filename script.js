const btn = document.getElementById("btn");
const container = document.getElementById("container");

btn.addEventListener("click", () => {
    createNotification();
});

function createNotification () {
    const notif =document.createElement ("div");
    notif.classList.add("notifyer");

    notif.innerText = "This is a crazy notification!";

    container.appendChild(notif);
    
    setTimeout(() => {
        notif.remove();
    }, 3000);
}