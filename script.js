  // Navbar scroll effect
        window.addEventListener('scroll', function() {
            const navbar = document.getElementById('navbar');
            if (window.scrollY > 100) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });

        // Animate stats on scroll
        const observerOptions = {
            threshold: 0.5,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const statNumbers = entry.target.querySelectorAll('.stat-number');
                    statNumbers.forEach(stat => {
                        const finalNumber = stat.textContent;
                        let currentNumber = 0;
                        const increment = parseFloat(finalNumber.replace(/[^\d.]/g, '')) / 50;
                        const suffix = finalNumber.replace(/[\d.]/g, '');
                        
                        const timer = setInterval(() => {
                            currentNumber += increment;
                            if (currentNumber >= parseFloat(finalNumber.replace(/[^\d.]/g, ''))) {
                                stat.textContent = finalNumber;
                                clearInterval(timer);
                            } else {
                                if (suffix === 'M') {
                                    stat.textContent = (currentNumber / 1000000).toFixed(1) + 'M';
                                } else if (suffix === 'K') {
                                    stat.textContent = (currentNumber / 1000).toFixed(0) + 'K';
                                } else if (suffix === '%') {
                                    stat.textContent = Math.round(currentNumber) + '%';
                                } else {
                                    stat.textContent = Math.round(currentNumber);
                                }
                            }
                        }, 50);
                    });
                }
            });
        }, observerOptions);

        const impactSection = document.getElementById('impact');
        if (impactSection) {
            observer.observe(impactSection);
        }

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });


        //login register
          function openAuthModal(type) {
            document.getElementById('authModal').style.display = 'flex';
            if (type === 'login') {
              showLogin();
            } else {
              showRegister();
            }
          }


      function closeAuthModal() {
        document.getElementById('authModal').style.display = 'none';
      }

      function showLogin() {
        document.getElementById('loginForm').style.display = 'block';
        document.getElementById('registerForm').style.display = 'none';
      }

      function showRegister() {
        document.getElementById('loginForm').style.display = 'none';
        document.getElementById('registerForm').style.display = 'block';
      }

      function submitLogin() {
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;

        if (!email || !password) {
          alert('Please enter both email and password.');
          return;
        }

        alert(`Logging in as ${email}`);
        // Add real login logic here
      }

      function submitRegister() {
        const email = document.getElementById('registerEmail').value;
        const password = document.getElementById('registerPassword').value;
        const confirm = document.getElementById('confirmPassword').value;

        if (!email || !password || !confirm) {
          alert('Please fill all fields.');
          return;
        }

        if (password !== confirm) {
          alert('Passwords do not match!');
          return;
        }

        alert(`Registered successfully as ${email}`);
        // Add real register logic here
      }
