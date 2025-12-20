document.querySelector("#full").classList.add("project-btn");

function Dev(cl) {
    // remove highlight from all same items
    document.querySelectorAll('.same').forEach(el => {
        el.classList.remove("project-btn");
    });

    // hide all project sections
    document.querySelectorAll('.projects').forEach(section => {
        section.classList.remove("d-block");
        section.classList.add("d-none");
    });

    if (cl) {
        const btn = document.querySelector("#" + cl);
       

        // guard: make sure they exist
        if (btn) btn.classList.add("project-btn");
        if(cl=="full"){
            document.querySelectorAll('.projects').forEach(section=> {
                section.classList.remove("d-none");
                section.classList.add("d-block");
            });
        }
        
        document.querySelectorAll("." + cl).forEach(item=>{
            item.classList.remove("d-none");
            item.classList.add("d-block");
        })
      
    }
}
