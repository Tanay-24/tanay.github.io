document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll('section');

    const options = {
        root: null,
        threshold: 0.1, // Trigger when 10% of the section is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Stop observing after it's visible
            }
        });
    }, options);

    sections.forEach(section => {
        section.classList.add('animated'); // Add the initial class
        observer.observe(section); // Start observing the section
    });

    // Modal functionality
    const modal = document.getElementById("projectModal");
    const modalContent = document.getElementById("modalContent");
    const closeModal = document.querySelector(".close");

    document.querySelectorAll('.project').forEach(project => {
        project.querySelector('.btn').addEventListener('click', function (e) {
            e.preventDefault();
            const projectName = project.querySelector('h3').innerText;

            let content = '';
            // Define project content
            if (projectName === "OurNews") {
                content = `
                    <h2>Our News / Asa No Nettowaku</h2>
                    <p><strong>Duration:</strong> Aug 2022 - Nov 2022</p>
                    <p><strong>Associated with:</strong> University of Mumbai</p>
                    <p>This advanced mobile application, developed in Java and XML with Firebase for data storage, helps users stay informed about news, articles, and interesting events around the world. Users can customize the app's theme and switch between multiple languages, including Marathi, English, Japanese, Hindi, Gujarati, and Malayalam.</p>
                    <div id="modalImages">
                        <img src="./images/Welcome Page.jpg" alt="Welcome Page">
                        <img src="./images/Registration.jpg" alt="Registration">
                        <img src="./images/News Interface.jpg" alt="News Interface">
                        <img src="./images/Marathi Language Interface.jpg" alt="Marathi Language Interface">
                        <img src="./images/Light Theme Interface.jpg" alt="Light Theme Interface">
                    </div>
                `;
            } else if (projectName === "FleetFusion") {
                content = `
                    <h2>FleetFusion</h2>
                    <p><strong>Duration:</strong> Jan 2023 - May 2023</p>
                    <p><strong>Associated with:</strong> Savitribai Phule Pune University</p>
                    <p>This web application, built using HTML, CSS, and JavaScript with MySQL for data storage, aims to improve operational efficiency, reduce costs, and enhance customer satisfaction for businesses and logistics providers. By automating vehicle management, order processing, and notifications, it addresses the inefficiencies of manual documentation and record-keeping.</p>
                    <div id="modalImages">
                        <img src="./images/1 imp.jpg">
                        <img src="./images/2.jpg">
                        <img src="./images/Provider Login imp.jpg">
                        <img src="./images/4.jpg">
                        <img src="./images/4A.jpg">
                        <img src="./images/6B imp.jpg">
                        <img src="./images/User Login imp.jpg">
                        <img src="./images/8.jpg">
                        <img src="./images/8A.jpg">
                        <img src="./images/8B.jpg">
                        <img src="./images/8C.jpg">
                        <img src="./images/8D.jpg">
                    </div>
                `;
            } else if (projectName === "Smart City Hub - Nashik") {
                content = `
                    <h2>Smart City Hub - Nashik</h2>
                    <p><strong>Duration:</strong> July 2024 - Present</p>
                    <p>This research-based mobile app is developed using Java and XML with Firebase for data storage. It aims to enhance urban living by providing real-time information, optimizing city services, and promoting citizen engagement through a user-friendly interface accessible on smartphones and tablets.</p>
                    <div id="modalImages">
                        <img src="./images/Welcome page 3.jpg">
                        <img src="./images/Main City Selection page.jpg">
                        <img src="./images/Places.jpg" >
                        <img src="./images/Place Information.jpg" >
                        <img src="./images/Sort places.jpg" >
                        <img src="./images/Mapping.jpg" >
                    </div>
                `;
            } else if (projectName === "One Platform Transport Services") {
                content = `
                    <h2>One Platform Transport Services</h2>
                    <p><strong>Duration:</strong> Jan 2023 - Apr 2023</p>
                    <p>Developed as a Windows application, this efficient ticket booking system allows users to view train, bus, and flight timetables and book tickets easily. It features a user-friendly interface that simplifies the booking process, while travel and transport company admins can register their companies with ease.</p>
                    <div id="modalImages">
                        <img src="./images/Welcome page (2).jpg" >
                        <img src="./images/Choose Login.jpg" >
                        <img src="./images/Admin Register.jpg" >
                        <img src="./images/Company Register and Login2.jpg" >
                        <img src="./images/User Book Ticket Booking.jpg" >
                        <img src="./images/User Book Ticket Booking2.jpg" >
                        <img src="./images/Admin Login.jpg" >
                        <img src="./images/Add Buses, Edit and Show Buses.jpg" >  
                    </div>
                `;
            }            

            modalContent.innerHTML = content;
            modal.style.display = "block"; // Show the modal
        });
    });

    // Close modal
    closeModal.addEventListener('click', function () {
        modal.style.display = "none"; // Hide the modal
    });

    // Close modal when clicking outside of the modal content
    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.style.display = "none"; // Hide the modal
        }
    });

    // Smooth scroll and focus effect
    const leadershipSection = document.getElementById("leadership");
    const contactSection = document.getElementById("contact");

    const scrollOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    };

    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("focused");
                window.scrollTo({
                    top: entry.target.offsetTop,
                    behavior: 'smooth'
                });
            } else {
                entry.target.classList.remove("focused");
            }
        });
    }, scrollOptions);

    // Observe the sections for smooth scroll
    scrollObserver.observe(leadershipSection);
    scrollObserver.observe(contactSection);
});
