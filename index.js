old_subject_names = {
    "ОБЗР": "ОБЖ",
    "Старые названия предметов": "<b>Старые названия предметов</b>"
}

function replacenames() {
    const urlParams = new URLSearchParams(window.location.search);
    const targetID = urlParams.get('oldnames');
    if (targetID == "1") {
        const replace = document.querySelectorAll('.replace_on_old_names');
        for (i = 0; i < replace.length; i++) {
            replace[i].innerHTML = old_subject_names[replace[i].innerHTML]
            
            oldnamelink = document.querySelector('.oldnamelink');
            oldnamelink.href = "index.html"
        }
        return
    }
}

window.onload = replacenames;