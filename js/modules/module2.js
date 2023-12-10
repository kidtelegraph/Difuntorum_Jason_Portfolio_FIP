// modules/module2.js
export function displaySkills(skills) {
    console.log("My Skills:");
    skills.forEach(skill => {
        console.log(`- ${skill}`);
    });
}