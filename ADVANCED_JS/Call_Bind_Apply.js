//call,apply,bind
function showDetails(course, duration) {
    console.log(
        `${this.name} is learning ${course} for ${duration}`
    );
}

const student = {
    name: "Kittu"
};

showDetails.call(student, "JavaScript", "3 months");

showDetails.apply(student, ["Python", "2 months"]);

const result = showDetails.bind(
    student,
    "React",
    "1 month"
);

result();
