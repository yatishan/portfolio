document.querySelector("#full").classList.add("project-btn");
function Dev(cl) {
    document.querySelectorAll('.same').forEach(el => {
        el.classList.remove("project-btn");
    });

    if (cl) {
        document.querySelector("#" + cl).classList.add("project-btn");
    }
}
