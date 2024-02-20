const Name = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const nextBtn = document.querySelectorAll(".next-btn");
const goBackBtn = document.querySelectorAll(".go-back-btn");
const form = document.getElementById("form1");
const cnum = document.querySelectorAll(".cnum");

const pages = document.querySelectorAll(".form-step");

const mArcade = document.getElementById("mArcade");

const mAdvanced = document.getElementById("mAdvanced");

const mPro = document.getElementById("mPro");
const free = document.querySelectorAll(".free");
const Yearly = document.getElementById("Yearly");
const Monthly = document.getElementById("Monthly");
const checkList = document.querySelectorAll(".check-list");
const list = document.querySelectorAll(".list");
const planBox = document.querySelectorAll(".cards");
const total = document.querySelector(".total");
const thankYou = document.querySelector(".thank-you");
const summary = document.querySelector(".summary");
let formNum = 0;
var arcadeVALUE = 0;
var advancedVALUE = 0;
var proVALUE = 0;
var arcadeT = false;
var advancedT = false;
var proT = false;
nextBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
        formNum++;
        updateForm();
        updateProgress();
    });
});

goBackBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
        formNum--;
        updateForm();
        updateProgress();
    });
});

function updateForm() {
    pages.forEach((e) => {
        e.classList.contains("active-step") && e.classList.remove("active-step");
    });
    pages[formNum].classList.add("active-step");
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    validateInputs();
});

const setError = (element, message) => {
    const inputcontrol = element.parentElement(".error");
    const errorDisplay = inputcontrol.querySelector(".error");
    errorDisplay.textContent = message;
    inputcontrol.classList.add("error");
};
const validateInputs = () => {
    const NameValue = Name.value.trim();
    const emailValue = email.value.trim();
    const phoneValue = phone.value.trim();
    if (NameValue === "") {
        setError(Name, "name is required");
        c;
    } else if (emailValue === "") {
        setError(email, "email is required");
    }
};

function updateProgress() {
    cnum.forEach((progressStep, indx) => {
        if (indx == formNum) {
            progressStep.classList.add("active-progress");
        } else {
            progressStep.classList.remove("active-progress");
        }
    });
}

planBox.forEach((e, index) => {
    console.log(e);
    var l = 1;
    e.addEventListener("click", () => {
        l = l + 1;
        e.classList.add("selected");
        console.log(index);
        var on = false;
        if (l % 2 == 0) {
            // e.style.border = "2px solid red";

            e.classList.add("select");
            on = true;
        } else {
            e.classList.remove("select");
            on = false;
        }
        if (index == 0 && on) {
            arcadeT = true;
            arcadeVALUE = 9;
            console.log(arcadeVALUE);
        } else if (index == 1 && on) {
            advancedT = true;
            advancedVALUE = 12;
        } else if (index == 2 && on) {
            proT = true;
            proVALUE = 15;
        }
    });
});

var k = false;
var SelectedYearly = false;

function ChangePlan() {
    if (k) {
        mArcade.innerText = "$9/mo";
        if (arcadeT) {
            arcadeVALUE = 9;
            console.log(arcadeVALUE);
        } else if (!arcadeT) {
            arcadeVALUE = 0;
            console.log(arcadeVALUE);
        }

        mAdvanced.innerText = "$12/mo";

        if (advancedT) {
            advancedVALUE = 12;
            console.log(advancedVALUE);
        } else if (!advancedT) {
            advancedVALUE = 0;
        }
        mPro.innerText = "$15/mo";
        if (proT) {
            proVALUE = 15;
            console.log(proVALUE);
        } else if (!proT) {
            proVALUE = 0;
            console.log(proVALUE);
        }

        Monthly.style.fontWeight = "bold";
        Yearly.style.fontWeight = "500";
        SelectedYearly = false;
        console.log(SelectedYearly + "monthly");
        free.forEach((e) => {
            e.style.display = "none";
        });
        k = false;
    } else {
        mArcade.innerText = "$90/yr";
        if (arcadeT) {
            arcadeVALUE = 90;
            total.innerHTML = "it works arcade";
            console.log(arcadeVALUE);
        } else if (!arcadeT) {
            arcadeVALUE = 0;
            total.innerHTML = "";
            console.log(arcadeVALUE);
        }
        mAdvanced.innerText = "$120/yr";
        if (advancedT) {
            advancedVALUE = 120;
            total.innerHTML = "it works ADVANCED";
            console.log(advancedVALUE);
        }
        mPro.innerText = "$150/yr";
        if (proT) {
            proVALUE = 150;
            total.innerHTML = "it works PRO";
            console.log(proVALUE);
        }

        Yearly.style.fontWeight = "bold";
        Monthly.style.fontWeight = "500";
        SelectedYearly = true;
        console.log(SelectedYearly + "yearly");
        free.forEach((e) => {
            e.style.display = "flex";
            e.innerHTML = "2 months free";
        });
        k = true;
    }
}

let click = 0;

console.log(list);
list.forEach((e) => {
    e.addEventListener("change", (e) => {
        console.log(e.target);
        e.target.style.backgroundColor = "hsl(228, 20%, 84%)";
    });
});

function tankyouPage() {
    console.log(thankYou);
    summary.classList.remove("active-step");
    thankYou.style.display = "flex";
    thankYou.classList.add("active-step");
}