const semSelect = document.getElementById('semSelect');
const syllabusArea = document.getElementById('syllabusArea');
const progressContainer = document.getElementById('progressContainer');
const progressBar = document.getElementById('progressBar');
const progressPercent = document.getElementById('progressPercent');

// Complete RTU Kota Syllabus Database with Hindi & English Query Tags
const rtuSyllabus = {
    sem1: [
        { code: "1FY2-01", name: "Engineering Mathematics-I", ytHindi: "Engineering+Mathematics+1+Hindi", ytEng: "Engineering+Mathematics+1+English" },
        { code: "1FY2-02", name: "Engineering Physics", ytHindi: "Engineering+Physics+Hindi", ytEng: "Engineering+Physics+English" },
        { code: "1FY1-04", name: "Communication Skills", ytHindi: "Communication+Skills+Engineering+Hindi", ytEng: "Communication+Skills+Engineering+English" },
        { code: "1FY3-06", name: "Programming for Problem Solving", ytHindi: "Programming+for+Problem+Solving+C+Language+Hindi", ytEng: "Programming+for+Problem+Solving+C+Language+English" },
        { code: "1FY3-08", name: "Basic Electrical Engineering", ytHindi: "Basic+Electrical+Engineering+Hindi", ytEng: "Basic+Electrical+Engineering+English" }
    ],
    sem2: [
        { code: "2FY2-01", name: "Engineering Mathematics-II", ytHindi: "Engineering+Mathematics+2+Hindi", ytEng: "Engineering+Mathematics+2+English" },
        { code: "2FY2-03", name: "Engineering Chemistry", ytHindi: "Engineering+Chemistry+Hindi", ytEng: "Engineering+Chemistry+English" },
        { code: "2FY1-05", name: "Human Values", ytHindi: "Universal+Human+Values+Hindi", ytEng: "Universal+Human+Values+English" },
        { code: "2FY3-07", name: "Basic Mechanical Engineering", ytHindi: "Basic+Mechanical+Engineering+Hindi", ytEng: "Basic+Mechanical+Engineering+English" },
        { code: "2FY3-09", name: "Basic Civil Engineering", ytHindi: "Basic+Civil+Engineering+Hindi", ytEng: "Basic+Civil+Engineering+English" }
    ],
    sem3: [
        { code: "3CS2-01", name: "Advanced Engineering Mathematics", ytHindi: "Advanced+Engineering+Mathematics+Hindi", ytEng: "Advanced+Engineering+Mathematics+English" },
        { code: "3CS1-03", name: "Technical Communication", ytHindi: "Technical+Communication+Hindi", ytEng: "Technical+Communication+English" },
        { code: "3CS3-04", name: "Digital Electronics", ytHindi: "Digital+Electronics+BTech+Hindi", ytEng: "Digital+Electronics+BTech+English" },
        { code: "3CS4-05", name: "Data Structures and Algorithms", ytHindi: "Data+Structures+and+Algorithms+Hindi", ytEng: "Data+Structures+and+Algorithms+English" },
        { code: "3CS4-06", name: "Object Oriented Programming", ytHindi: "Object+Oriented+Programming+Java+C++Hindi", ytEng: "Object+Oriented+Programming+Java+C++English" }
    ],
    sem4: [
        { code: "4CS2-01", name: "Discrete Mathematics Structure", ytHindi: "Discrete+Mathematics+Hindi", ytEng: "Discrete+Mathematics+English" },
        { code: "4CS1-03", name: "Managerial Economics & Financial Accounting", ytHindi: "Managerial+Economics+Financial+Accounting+Hindi", ytEng: "Managerial+Economics+Financial+Accounting+English" },
        { code: "4CS3-04", name: "Microprocessor & Interfaces", ytHindi: "Microprocessor+and+Interfaces+8085+Hindi", ytEng: "Microprocessor+and+Interfaces+8085+English" },
        { code: "4CS4-05", name: "Database Management Systems", ytHindi: "DBMS+Full+Course+Hindi", ytEng: "DBMS+Full+Course+English" },
        { code: "4CS4-06", name: "Theory of Computation", ytHindi: "Theory+of+Computation+Automata+Hindi", ytEng: "Theory+of+Computation+Automata+English" }
    ],
    sem5: [
        { code: "5CS3-01", name: "Information Theory & Coding", ytHindi: "Information+Theory+and+Coding+Hindi", ytEng: "Information+Theory+and+Coding+English" },
        { code: "5CS4-02", name: "Compiler Design", ytHindi: "Compiler+Design+Hindi", ytEng: "Compiler+Design+English" },
        { code: "5CS4-03", name: "Operating Systems", ytHindi: "Operating+Systems+Full+Course+Hindi", ytEng: "Operating+Systems+Full+Course+English" },
        { code: "5CS4-04", name: "Computer Graphics & Multimedia", ytHindi: "Computer+Graphics+and+Multimedia+Hindi", ytEng: "Computer+Graphics+and+Multimedia+English" },
        { code: "5CS4-05", name: "Analysis of Algorithms", ytHindi: "Design+and+Analysis+of+Algorithms+Hindi", ytEng: "Design+and+Analysis+of+Algorithms+English" }
    ],
    sem6: [
        { code: "6CS3-01", name: "Digital Image Processing", ytHindi: "Digital+Image+Processing+Hindi", ytEng: "Digital+Image+Processing+English" },
        { code: "6CS4-02", name: "Machine Learning", ytHindi: "Machine+Learning+Full+Course+Hindi", ytEng: "Machine+Learning+Full+Course+English" },
        { code: "6CS4-03", name: "Information Security System", ytHindi: "Information+Security+System+Cryptography+Hindi", ytEng: "Information+Security+System+Cryptography+English" },
        { code: "6CS4-04", name: "Computer Architecture and Organization", ytHindi: "Computer+Organization+and+Architecture+Hindi", ytEng: "Computer+Organization+and+Architecture+English" },
        { code: "6CS4-05", name: "Artificial Intelligence", ytHindi: "Artificial+Intelligence+Full+Course+Hindi", ytEng: "Artificial+Intelligence+Full+Course+English" }
    ],
    sem7: [
        { code: "7CS4-01", name: "Cloud Computing", ytHindi: "Cloud+Computing+Hindi", ytEng: "Cloud+Computing+English" },
        { code: "7CS4-02", name: "Information Retrieval", ytHindi: "Information+Retrieval+System+Hindi", ytEng: "Information+Retrieval+System+English" },
        { code: "7CS5-11", name: "Big Data Analytics", ytHindi: "Big+Data+Analytics+Hindi", ytEng: "Big+Data+Analytics+English" },
        { code: "7CS5-12", name: "Machine Learning and NLP", ytHindi: "Natural+Language+Processing+NLP+Hindi", ytEng: "Natural+Language+Processing+NLP+English" }
    ],
    sem8: [
        { code: "8CS4-01", name: "Internet of Things", ytHindi: "Internet+of+Things+IoT+Hindi", ytEng: "Internet+of+Things+IoT+English" },
        { code: "8CS4-02", name: "Cyber Security", ytHindi: "Cyber+Security+Full+Course+Hindi", ytEng: "Cyber+Security+Full+Course+English" },
        { code: "8CS5-11", name: "Data Mining & Warehousing", ytHindi: "Data+Mining+and+Data+Warehousing+Hindi", ytEng: "Data+Mining+and+Data+Warehousing+English" }
    ]
};

semSelect.addEventListener('change', function() {
    const selectedSem = semSelect.value;

    if (selectedSem === "" || !rtuSyllabus[selectedSem]) {
        progressContainer.style.display = "none";
        syllabusArea.innerHTML = `<p class="placeholder-text">Please select a semester to unlock your RTU curriculum roadmap.</p>`;
        return;
    }

    progressContainer.style.display = "block";
    let htmlContent = `<h3>📚 Official Subjects List:</h3>`;
    
    rtuSyllabus[selectedSem].forEach(subject => {
        // FIXED: Added strict https:// security header for global browsers
        const youtubeHindiUrl = `https://youtube.com{subject.ytHindi}+playlist`;
        const youtubeEngUrl = `https://youtube.com{subject.ytEng}+playlist`;

        htmlContent += `
            <div class="subject-card">
                <div class="subject-header">
                    <input type="checkbox" class="task-check"> 
                    <span><strong>(${subject.code})</strong> ${subject.name}</span>
                </div>
                <div class="resource-buttons">
                    <a href="${youtubeHindiUrl}" target="_blank" class="btn btn-hindi">📺 Hindi Lectures 🇮🇳</a>
                    <a href="${youtubeEngUrl}" target="_blank" class="btn btn-english">📺 English Lectures 🇬🇧</a>
                    <a href="#" class="btn btn-notes">📄 Free Notes</a>
                </div>
            </div>
        `;
    });

    syllabusArea.innerHTML = htmlContent;
    setupProgressTracker();
});

function setupProgressTracker() {
    const checkboxes = document.querySelectorAll('.task-check');
    progressBar.style.width = '0%';
    progressPercent.innerText = '0%';

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', () => {
            const checkedCount = document.querySelectorAll('.task-check:checked').length;
            const totalCount = checkboxes.length;
            const percentage = Math.round((checkedCount / totalCount) * 100);
            
            progressBar.style.width = percentage + '%';
            progressPercent.innerText = percentage + '%';
        });
    });
}
