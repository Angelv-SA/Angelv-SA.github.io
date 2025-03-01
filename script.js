<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portfolio - Sawadogo Ange Elvis</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        .hidden { display: none; }
        .border-dotted { border: 2px dotted blue; }
        .hover-animate:hover { transform: scale(1.05); transition: 0.3s; }
        .button-animated { border: 2px solid blue; position: relative; overflow: hidden; }
        .button-animated::before { content: ""; position: absolute; top: 0; left: -100%; width: 100%; height: 100%; background: rgba(255, 255, 255, 0.2); transition: left 0.5s; }
        .button-animated:hover::before { left: 100%; }
    </style>
</head>
<body class="bg-gray-900 text-white">
    <!-- Sidebar -->
    <div class="fixed left-0 top-0 h-full w-16 flex flex-col bg-gray-800 shadow-lg">
        <a href="#about" class="p-4 text-blue-400 text-xl hover:text-white" onclick="showSection('about')">ℹ️</a>
        <a href="#skills" class="p-4 text-blue-400 text-xl hover:text-white" onclick="showSection('skills')">🛠️</a>
        <a href="#education" class="p-4 text-blue-400 text-xl hover:text-white" onclick="showSection('education')">🎓</a>
        <a href="#projects" class="p-4 text-blue-400 text-xl hover:text-white" onclick="showSection('projects')">📁</a>
        <a href="#experience" class="p-4 text-blue-400 text-xl hover:text-white" onclick="showSection('experience')">💼</a>
    </div>

    <!-- Main Content -->
    <div class="ml-20 p-10">
        <h1 class="text-5xl font-bold">Hi !!! 👋, I am <span class="text-blue-400">SAWADOGO Ange Elvis</span></h1>
        <p class="mt-4 text-lg font-bold">Energy Systems Design Engineer, passionate about technological innovation.</p>
        
        <!-- Sections -->
        <div id="about" class="section">
            <h2 class="text-3xl font-bold mt-6">About Me</h2>
            <p>Specialist in digital technology integration for optimizing energy systems...</p>
        </div>

        <div id="skills" class="section hidden">
            <h2 class="text-3xl font-bold mt-6">Skills</h2>
            <ul>
                <li>Object-Oriented Programming: 80%</li>
                <li>Embedded Electronics: 85%</li>
                <li>Internet of Things: 80%</li>
                <li>Renewable Energy: 90%</li>
            </ul>
        </div>

        <div id="education" class="section hidden">
            <h2 class="text-3xl font-bold mt-6">Education</h2>
            <p>Master’s Degree in Energy – Applied Solar Technologies (2024)</p>
            <p>Engineering Degree in Electrical Engineering (2021)</p>
        </div>

        <div id="projects" class="section hidden">
            <h2 class="text-3xl font-bold mt-6">Projects</h2>
            <p>Design of an AI-Integrated IoT System for Positive Cold Room Regulation...</p>
        </div>

        <div id="experience" class="section hidden">
            <h2 class="text-3xl font-bold mt-6">Professional Experience</h2>
            <p>Research Internship - CITADEL (2024)</p>
            <p>Intern Engineer - TRIMER-GROUPE (2022)</p>
        </div>
    </div>

    <script>
        function showSection(sectionId) {
            document.querySelectorAll('.section').forEach(section => {
                section.classList.add('hidden');
            });
            document.getElementById(sectionId).classList.remove('hidden');
        }
    </script>
</body>
</html>
