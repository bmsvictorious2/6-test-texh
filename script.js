function checkAnswers() {
    let totalMarks = 0;

    // Get Student's Name
    const studentName = document.getElementById("studentName").value;

    // Display Student's Name
    document.getElementById("displayName").innerText = studentName
        ? `Student Name: ${studentName}`
        : "Student Name: Not Provided";

    // Question 1: Regression (Predicting the price of a car)
    const q1_price = document.querySelectorAll('input[type="checkbox"]')[0].checked;
    const q1_spam = document.querySelectorAll('input[type="checkbox"]')[1].checked;
    if (q1_spam && !q1_price) totalMarks += 5;

    // Question 2: Classification (Dog or not)
    if (document.getElementById("question2").value === "Medical") totalMarks += 5;

    // Question 3: Image resolution
    const q3 = document.querySelector('input[name="workloadAI"]:checked');
    if (q3 && q3.value === "Machine Learning") totalMarks += 5;

    // Question 4: RGB
    const q4 = document.querySelector('input[name="train"]:checked');
    if (q4 && q4.value === "feature") totalMarks += 5;

    // Question 5: Color range
    if (document.getElementById("question5").value === "Both a,b & c") totalMarks += 5;

    // Question 6: Supervised learning types
    if (document.getElementById("typeRegression").checked) totalMarks += 0;
    if (document.getElementById("typesupervisedlearning").checked) totalMarks += 5;

    // Question 7: Computer Vision task
    if (document.getElementById("question7").value === "labl") totalMarks += 5;

    // Question 8: Image segmentation
    if (document.getElementById("question8").value === "lael") totalMarks += 5;

    // Question 9: Clustering
    const q9 = document.querySelector('input[name="AI"]:checked');
    if (q9 && q9.value === "huan") totalMarks += 5;

    // Question 10: Accuracy from image
 

    // Question 11: Feature and label detection
    const q11 = document.querySelector('input[name="image"]:checked');
    if (q11 && q11.value === "Elvenlab") totalMarks += 5;

    // Redirect to results page
    const resultURL = `result.html?name=${encodeURIComponent(studentName)}&marks=${totalMarks}`;
    window.location.href = resultURL;
}
