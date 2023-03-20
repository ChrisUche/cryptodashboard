const chart = document.querySelector("#chart").getContext('2d');

// create a new chart instance
new Chart(chart, {
    type: 'line',
    data: {
        labels:['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'],

        datasets:[
            {
                label: 'BTC',
                data: [12345, 09876, 26436, 36435, 63709, 54278, 57653, 74759, 57654, 86969, 89047],
                borderColor: 'red',
                borderWidth2: 2
            },
            {
                label: 'ETH',
                data: [23345, 53876, 43436, 63435, 56309, 94278, 67653, 42759, 97654, 65969, 92047],
                borderColor: 'blue',
                borderWidth2: 2
            }
        ]

    },
    options:{
        responsive: true
    }

})

// show or hide sidebar
const menuBtn = document.querySelector('#menu-btn');
const closeBtn = document.querySelector('#close-btn');
const sideBar = document.querySelector('aside');
const sideClick = document.querySelector('.sidebar');

menuBtn.addEventListener('click', () =>{
    sideBar.style.display = 'block';
})

closeBtn.addEventListener('click', () =>{
    sideBar.style.display = 'none';
})

// change theme
const themeBtn = document.querySelector('.theme-btn');

themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');

    themeBtn.querySelector('span:nth-child(1)').classList.toggle('active');
    themeBtn.querySelector('span:nth-child(2)').classList.toggle('active');
})



