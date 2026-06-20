let currentLevel = 1;
let student = JSON.parse(localStorage.getItem("student") || "{}");
let progress = JSON.parse(localStorage.getItem("progress") || '{"1":false,"2":false,"3":false}');
let latestResult = null;

function saveStudent() {
  const name = document.getElementById("studentName").value.trim();
  const reg = document.getElementById("regNo").value.trim();
  if (!name || !reg) {
    alert("Please enter student name and register number.");
    return;
  }
  student = { name, reg };
  localStorage.setItem("student", JSON.stringify(student));
  alert("Student details saved. Start Level 1.");
}

function updateLocks() {
  document.getElementById("level2Card").classList.toggle("locked", !progress["1"]);
  document.getElementById("level3Card").classList.toggle("locked", !progress["2"]);
}
updateLocks();

function startLevel(level) {
  if (!student.name) {
    alert("Please enter student details first.");
    return;
  }
  if (level === 2 && !progress["1"]) return alert("Pass Level 1 first.");
  if (level === 3 && !progress["2"]) return alert("Pass Level 2 first.");

  currentLevel = level;
  const data = assessments[level];
  document.getElementById("quizTitle").innerText = data.title;
  const qDiv = document.getElementById("questions");
  qDiv.innerHTML = "";

  data.questions.forEach((item, i) => {
    const div = document.createElement("div");
    div.className = "question";
    div.innerHTML = `<h3>Q${i + 1}. ${item.q}</h3>`;
    item.options.forEach((opt, j) => {
      div.innerHTML += `
        <label class="option">
          <input type="radio" name="q${i}" value="${j}"> ${opt}
        </label>`;
    });
    qDiv.appendChild(div);
  });

  document.getElementById("quizBox").classList.remove("hidden");
  document.getElementById("resultBox").classList.add("hidden");
  window.scrollTo(0, document.getElementById("quizBox").offsetTop);
}

function submitLevel() {
  const data = assessments[currentLevel];
  let correct = 0;
  data.questions.forEach((item, i) => {
    const selected = document.querySelector(`input[name="q${i}"]:checked`);
    if (selected && Number(selected.value) === item.answer) correct++;
  });

  const score = Math.round((correct / data.questions.length) * 100);
  const passed = score >= data.pass;
  if (passed) {
    progress[String(currentLevel)] = true;
    localStorage.setItem("progress", JSON.stringify(progress));
  }

  latestResult = {
    name: student.name,
    reg: student.reg,
    level: currentLevel,
    score,
    passed,
    date: new Date().toLocaleString()
  };

  updateLocks();

  document.getElementById("resultText").innerHTML = `
    <p><b>Name:</b> ${student.name}</p>
    <p><b>Register No.:</b> ${student.reg}</p>
    <p><b>Level:</b> ${currentLevel}</p>
    <p><b>Score:</b> ${score}%</p>
    <p class="${passed ? 'pass' : 'fail'}">${passed ? 'PASSED' : 'NOT PASSED'}</p>
    <p>${passed && currentLevel < 3 ? 'Next level unlocked.' : ''}</p>
  `;
  document.getElementById("resultBox").classList.remove("hidden");
  window.scrollTo(0, document.getElementById("resultBox").offsetTop);
}

function downloadCertificate() {
  if (!latestResult) return;
  const text = `
INDUSTRY READY CYBERSECURITY ASSESSMENT RESULT

Name: ${latestResult.name}
Register No.: ${latestResult.reg}
Level: ${latestResult.level}
Score: ${latestResult.score}%
Status: ${latestResult.passed ? "PASSED" : "NOT PASSED"}
Date: ${latestResult.date}

Note: This assessment is designed for interview readiness and practical cybersecurity thinking.
`;
  const blob = new Blob([text], { type: "text/plain" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = `Cyber_Assessment_Level_${latestResult.level}_Result.txt`;
  link.click();
}
