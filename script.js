let checkTheme = document.getElementById("dark-light");
const Up = document.querySelector(".up");
if (localStorage.getItem("theme") === "dark") {
    setDarkTheme();
    document.getElementById("label").innerHTML =  "<i class='fa-solid fa-moon'></i>";
} else {
    setLightTheme();
    document.getElementById("label").innerHTML =  "<i class='fa-solid fa-sun'></i>";
}
checkTheme.addEventListener("click", function toggleTheme() {
    document.body.style.transition = "0.7s ease";
    const isDark = checkTheme.classList.toggle("dark");
    document.getElementById("label").innerHTML = isDark
        ? "<i class='fa-solid fa-moon'></i>"
        : "<i class='fa-solid fa-sun'></i>";
    
    if (isDark) {
        setDarkTheme();
        localStorage.setItem("theme","dark");
    } else {
        setLightTheme();
        localStorage.removeItem("theme","dark");
    }
});

function setDarkTheme() {
    console.log("Applying dark theme");

    document.body.classList.add("dark_body");
    document.querySelector("header").classList.add("dark_header");
    document.querySelector("footer").style.backgroundColor = "#1a1a1a";
    document.querySelector(".thank").style.backgroundColor = "#2e2e2e";
    document.querySelector(".thank").querySelector('h2').style.Color = "#fff";
    const sections = [".Works", ".contact", ".skills", ".About-Us"];
    sections.forEach((section) => {
        const h2 = document.querySelector(`${section} h2`);
        if (h2) {
            h2.style.color = "#e0e0e0";
            h2.style.borderColor = "#e0e0e0";
        }
    });

    document.querySelectorAll(".skill").forEach(skill => {
        skill.style.borderColor = "#fff";
        skill.querySelectorAll("p, label, h3").forEach(element => {
            element.style.color = "#d0d0d0";
        });
    });

    document.querySelector(".contact-l").style.cssText = `
        background-color: #2a2a2a;
        border-color: #444;
        box-shadow: 4px 4px 4px #0005;
    `;

    document.querySelector(".contact-l input[type='submit']").style.cssText = `
        background-color: #555;
        color: #fff;
    `;

    document.querySelectorAll(".card").forEach(card => {
        card.style.backgroundColor = "#232323";
        card.style.backgroundImage = "none";
        card.style.borderColor = "#444";
        card.querySelector("p").style.color = "#c0c0c0";
        card.querySelector("h3").style.color = "#c0c0c0";
    });

    document.querySelectorAll(".background a").forEach(link => {
        link.style.backgroundColor = "#3a3a3a";
        link.style.borderColor = "#444";
    });

    document.querySelector(".background h2").style.color = "#d0d0d0";
    document.querySelector(".background h3").style.color = "#e0e0e0";
    Up.style.backgroundColor = "#555";
    document.querySelector(".About-Us p").style.color = "#fff";
    document.querySelectorAll(".skill").forEach(skill => 
    {
        skill.style.backgroundColor = "none";
    }
    );
}

function setLightTheme() {
    console.log("Applying light theme");

    document.body.classList.remove("dark_body");
    document.querySelector("header").classList.remove("dark_header");
    document.querySelector("footer").style.backgroundColor = "#480cab";
    document.querySelector(".thank").style.backgroundColor = "#1439DB";
    document.querySelector(".thank").querySelector('h2').style.Color = "#0D305E";
    const sections = [".Works", ".contact", ".skills", ".About-Us"];
    sections.forEach((section) => {
        const h2 = document.querySelector(`${section} h2`);
        if (h2) {
            h2.style.color = "#7209b7";
            h2.style.borderColor = "#7209b7";
        }
    });
    document.querySelectorAll(".skill").forEach(skill => {
        skill.style.borderColor = "none";
        skill.style.backgroundColor = "#fff";
        skill.querySelectorAll("p, label, h3").forEach(element => {
            element.style.color = element.tagName === "P" ? "#480cab" : (element.tagName === "LABEL" ? "#480CAB" : "#480CAB");
        });
    });

    document.querySelector(".contact-l").style.cssText = `
        background-color: #fff;
        border-color: #480cab;
        box-shadow: 4px 4px 4px #00000066;
    `;

    document.querySelector(".contact-l input[type='submit']").style.cssText = `
        background-color: #fff;
        color: #fff;
    `;

    document.querySelectorAll(".card").forEach(card => {
        card.style.backgroundColor = "#fff";
        card.style.borderColor = "#4895ef";
        card.querySelector("p").style.color = "#480CAB";
        card.querySelector("h3").style.color = "#480CAB";
    });

    document.querySelectorAll(".background a").forEach(link => {
        link.style.backgroundColor = "#480cab";
        link.style.borderColor = "none";
    });

    document.querySelector(".background h2").style.color = "#4895ef";
    document.querySelector(".background h3").style.color = "#4cc9f0";
    Up.style.backgroundColor = "#3a0ca3";
    document.querySelector(".About-Us p").style.color = "#3a0ca3";
    document.querySelector(".Part-1 p").style.color = "#3a0ca3";
}

window.onscroll = function() {
    if (scrollY >= 1200) {
        Up.style.visibility = "visible";
    } else {
        Up.style.visibility = "hidden";
    }
};

Up.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

const menuBars = document.querySelector(".menuBars");
const inputMenuBars = document.querySelector("#menuBars");

menuBars.addEventListener("click", function () {
    inputMenuBars.classList.toggle("exitBars");
    menuBars.innerHTML = inputMenuBars.classList.contains("exitBars")
        ? "<i class='fa-solid fa-x'></i>"
        : "<i class='fa-solid fa-bars'></i>";
    menuBars.style.color = inputMenuBars.classList.contains("exitBars") ? "#fff" : "#fff";
    menuBars.style.transition = "0.7s ease";
});
window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    if (window.scrollY > 10) {
        header.classList.add("scrolled");
        if (localStorage.getItem("theme","dark")) {
            document.querySelector(".dark_header").style.backgroundColor = "#111111";
        }else if (document.querySelector("header").className == "scrolled") {
            document.querySelector(".scrolled").style.backgroundColor = "rgba(11, 70, 137, 0.99)";
            document.querySelector("header").style.marginTop = "0px";
        }
    } else {
        header.classList.remove("scrolled");
        document.querySelector("header").style.backgroundColor = "transparent";
        document.querySelector("header").style.marginTop = "5px";
    }
});
let debounceTimer;
window.addEventListener("scroll", () => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
        if (scrollY >= 1200) {
            Up.style.visibility = "visible";
        } else {
            Up.style.visibility = "hidden";
        }
    }, 200);
});