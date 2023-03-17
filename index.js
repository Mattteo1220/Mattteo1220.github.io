

let setExperienceYears = () => {
    let sqaStartYear = 2015;
    let seStartYear = 2021;
    let sqaElement = document.getElementById("sqa").getElementsByTagName("h2")[0];
    let sqaYearsOfExperience = new Date().getFullYear() - sqaStartYear;
    sqaElement.innerHTML = `${sqaYearsOfExperience}+ Years`;
    console.log("Set the experience for sqa");

    let seElement = document.getElementById("se").getElementsByTagName("h2")[0];
    let seYearsOfExperience = new Date().getFullYear() - seStartYear;
    seElement.innerHTML = `${seYearsOfExperience}+ Years`;
    console.log("Set the experience for se");
}

setExperienceYears();


