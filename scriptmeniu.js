const menu = document.getElementById('menu');
        window.onload = () => {
          menu.classList.add('slide-down');
        };
        const backButton = document.getElementById('backButton');
        backButton.addEventListener('click', (e) => {
          e.preventDefault(); 
          menu.classList.remove('slide-down'); 
          menu.classList.add('slide-up'); 
          backButton.classList.add('hidden');
          
          setTimeout(() => {
            window.location.href = 'homepage.html';
          }, 500);

          hamburger.addEventListener('click', () => {
            menu.classList.add('slide-down');
            menu.classList.remove('slide-up');
            backButton.classList.remove('hidden');
          });
        });