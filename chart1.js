// Isi dari file chart1.js

// Script Chart.js untuk membuat chart
const ctx = document.getElementById('barchart').getContext('2d');
const barchart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Australia', 'United States', 'France', 'Canada', 'Germany', 'United Kingdom'],
        datasets: [{
            label: 'AOV',
            data: [2666, 1810, 429, 2272, 2018, 2203],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

const navbar = document.querySelector(".navbar-nav");
document.querySelector("#hamburger-menu").onclick = () => {
  navbar.classList.toggle("active");
};

const menu = document.querySelector("#hamburger-menu");
document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !navbar.contains(e.target)) {
    navbar.classList.remove("active");
  }
});

