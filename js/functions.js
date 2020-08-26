let mainContent = document.getElementsByClassName('content1')[0];

function nextPage () {
    console.log("You clicked the button!");

    let progressDiv = document.createElement("div");
    progressDiv.classList.add("progressBar");
    let progressBar = document.createElement("div");
    progressBar.classList.add("loadingBar");

    progressDiv.append(progressBar);
    mainContent.append(progressDiv);

    let width = 1;
    let idn = setInterval(simulateLoading, 25);
    
    function simulateLoading()
    {
        if (width >= 100) 
        {
            clearInterval(idn);
            openInfo();
        } 
        else 
        {
            width++;
            progressBar.style.width = width + "%";
        }
    }
}

function clearID(idObject) {
    let container = document.getElementById(idObject);
	container.textContent='';
    for (child of container.childNodes) {
        child.remove();
    }
}

function clearClass(classObject) {
    let container = document.getElementsByClassName(classObject)[0];
	container.textContent='';
    for (child of container.childNodes) {
        child.remove();
    }
}

function openInfo() {
    window.open("pages/about.html", "_self")
}