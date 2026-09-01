const semSelect = document.getElementById('semSelect');
const syllabusArea = document.getElementById('syllabusArea');
const progressContainer = document.getElementById('progressContainer');
const progressBar = document.getElementById('progressBar');
const progressPercent = document.getElementById('progressPercent');

const rtuSyllabus = {
    sem1: [
        { code: "1FY2-01", name: "Engineering Mathematics-I", linkHindi: "https://youtube.com", linkEng: "https://youtube.com" },
        { code: "1FY2-02", name: "Engineering Physics", linkHindi: "https://youtube.com", linkEng: "https://youtube.com" },
        { code: "1FY1-04", name: "Communication Skills", linkHindi: "https://youtube.com", linkEng: "https://youtube.com" },
        { code: "1FY3-06", name: "Programming for Problem Solving", linkHindi: "https://youtube.com", linkEng: "https://youtube.com" },
        { code: "1FY3-08", name: "Basic Electrical Engineering", linkHindi: "https://youtube.com", linkEng: "https://youtube.com" }
    ],
    sem2: [
        { code: "2FY2-01", name: "Engineering Mathematics-II", linkHindi: "https://youtube.com", linkEng: "https://youtube.com" },
        { code: "2FY2-03", name: "Engineering Chemistry", linkHindi: "https://youtube.com", linkEng: "https://youtube.com" },
        { code: "2FY1-05", name: "Human Values", linkHindi: "https://youtube.com", linkEng: "https://youtube.com" },
        { code: "2FY3-07", name: "Basic Mechanical Engineering", linkHindi: "https://youtube.com", linkEng: "https://youtube.com" },
        { code: "2FY3-09", name: "Basic Civil Engineering", linkHindi: "https://youtube.com", linkEng: "https://youtube.com" }
    ],
    sem3: [
        { code: "3CS2-01", name: "Advanced Engineering Mathematics", linkHindi: "https://youtube.com", linkEng: "https://youtube.com" },
        { code: "3CS1-03", name: "Technical Communication", linkHindi: "https://youtube.com", linkEng: "https://youtube.com" },
        { code: "3CS3-04", name: "Digital Electronics", linkHindi: "https://youtube.com", linkEng: "https://youtube.com" },
        { code: "3CS4-05", name: "Data Structures and Algorithms", linkHindi: "https://youtube.com", linkEng: "https://youtube.com" },
        { code: "3CS4-06", name: "Object Oriented Programming", linkHindi: "https://youtube.com", linkEng: "https://youtube.com" }
    ],
    sem4: [
        { code: "4CS2-01", name: "Discrete Mathematics Structure", linkHindi: "https://youtube.com", linkEng: "https://youtube.com" },
        { code: "4CS1-03", name: "Managerial Economics & Financial Accounting", linkHindi: "https://youtube.com", linkEng: "https://youtube.com" },
        { code: "4CS3-04", name: "Microprocessor & Interfaces", linkHindi: "https://youtube.com", linkEng: "https://youtube.com" },
        { code: "4CS4-05", name: "Database Management Systems", linkHindi: "https://youtube.com", linkEng: "https://youtube.com" },
        { code: "4CS4-06", name: "Theory of Computation", linkHindi: "https://youtube.com", linkEng: "https://youtube.com" }
    ],
    sem5: [
        { code: "5CS3-01", name: "Information Theory & Coding", linkHindi: "https://youtube.com", linkEng: "https://youtube.com" },
        { code: "5CS4-02", name: "Compiler Design", linkHindi: "https://youtube.com", linkEng: "https://youtube.com" },
        { code: "5CS4-03", name: "Operating Systems", linkHindi: "https://youtube.com", linkEng: "https://youtube.com" },
        { code: "5CS4-04", name: "Computer Graphics & Multimedia", linkHindi: "https://youtube.com", linkEng: "https://youtube.com" },
        { code: "5CS4-05", name: "Analysis of Algorithms", linkHindi: "https://youtube.com", linkEng: "https://youtube.com" }
    ],
    sem6: [
        { code: "6CS3-01", name: "Digital Image Processing", linkHindi: "https://youtube.com", linkEng: "https://youtube.com" },
        { code: "6CS4-02", name: "Machine Learning", linkHindi: "https://youtube.com", linkEng: "https://youtube.com" },
        { code: "6CS4-03", name: "Information Security System", linkHindi: "https://youtube.com", linkEng: "https://youtube.com" },
        { code: "6CS4-04", name: "Computer Architecture and Organization", linkHindi: "https://youtube.com", linkEng: "https://youtube.com" },
        { code: "6CS4-05", name: "Artificial Intelligence", linkHindi: "https://youtube.com", linkEng: "https://youtube.com" }
    ],
    sem7: [
        { code: "7CS4-01", name: "Cloud Computing", linkHindi: "https://youtube.com", linkEng: "https://youtube.com" },
        { code: "7CS4-02", name: "Information Retrieval", linkHindi: "https://youtube.com", linkEng: "https://youtube.com" },
        { code: "7CS5-11", name: "Big Data Analytics", linkHindi: "https://youtube.com", linkEng: "https://youtube.com" },
        { code: "7CS5-12", name: "Machine Learning and NLP", linkHindi: "https://youtube.com", linkEng: "https://youtube.com" }
    ],
    sem8: [
        { code: "8CS4-01", name: "Internet of Things", linkHindi: "https://youtube.com", linkEng: "https://youtube.com" },
