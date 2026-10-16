/*
 * Function: showGradeEquivalent()
 * Purpose : Builds a table showing each student’s grade, equivalent,
 *           remark, and academic leader classification.
 * Technique: Uses arrays + a for loop instead of repeating code 5 times.
 */
function showGradeEquivalent() {

    // ===== 1. Store student data in arrays =====
    let students = [
        "Anna Reyes",
        "Ben Santos",
        "Carla Cruz",
        "David Lim",
        "Ella Ramos"
    ];

    let grades = [92, 85, 78, 97, 74];

    // ===== 2. Start building the output table =====
    let output = "<h2>Grade Equivalents</h2>";
    output += "<table>";
    output += "<tr>";
    output += "<th>Student Name</th>";
    output += "<th>Grade</th>";
    output += "<th>Equivalent</th>";
    output += "<th>Remark</th>";
    output += "<th>Academic Leader</th>";
    output += "</tr>";

    // ===== 3. Loop through every student =====
    for (let i = 0; i < students.length; i++) {

        // Get the values for the current student
        let name       = students[i];
        let grade      = grades[i];
        let equivalent = getEquivalent(grade);          // call existing function
        let remark     = getRemark(grade);              // call existing function
        let leader     = getAcademicLeader(equivalent); // call existing function

        // Add one table row
        output += "<tr>";
        output += "<td>" + name + "</td>";
        output += "<td>" + grade + "</td>";
        output += "<td>" + equivalent + "</td>";
        output += "<td>" + remark + "</td>";
        output += "<td>" + leader + "</td>";
        output += "</tr>";
    }

    output += "</table>";

    // ===== 4. Display the result =====
    document.getElementById("result").innerHTML = output;
}

/*
 * Function: getRemark(grade)
 * Purpose : Returns "Passed" if grade >= 75, otherwise "Failed".
 * Uses a ternary operator.
 */
function getRemark(grade) {
    let remark = (grade >= 75) ? "Passed" : "Failed";
    return remark;
}

/*
 * Function: getEquivalent(grade)
 * Purpose : Converts a numerical grade into its grade equivalent
 *           using if...else if statements.
 */
function getEquivalent(grade) {
    let equivalent = "";

    if (grade >= 97) {
        equivalent = "1.0";
    } else if (grade >= 94) {
        equivalent = "1.25";
    } else if (grade >= 91) {
        equivalent = "1.5";
    } else if (grade >= 88) {
        equivalent = "1.75";
    } else if (grade >= 85) {
        equivalent = "2.0";
    } else if (grade >= 82) {
        equivalent = "2.25";
    } else if (grade >= 79) {
        equivalent = "2.5";
    } else if (grade >= 76) {
        equivalent = "2.75";
    } else if (grade >= 75) {
        equivalent = "3.0";
    } else {
        equivalent = "Failed";
    }

    return equivalent;
}

/*
 * Function: getAcademicLeader(equivalent)
 * Purpose : Determines Academic Leader classification using a switch statement.
 * 1.0 and 1.25 → 1st Class
 * 1.5          → 2nd Class
 * 1.75         → 3rd Class
 * Everything else → "-"
 */
function getAcademicLeader(equivalent) {
    let leader = "";

    switch (equivalent) {
        case "1.0":
        case "1.25":
            leader = "1st Class Academic Leader";
            break;
        case "1.5":
            leader = "2nd Class Academic Leader";
            break;
        case "1.75":
            leader = "3rd Class Academic Leader";
            break;
        default:
            leader = "-";
    }

    return leader;
}
