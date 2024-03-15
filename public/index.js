const toggleCheckbox = document.querySelector('.toggle-checkbox');
const body = document.body;
const containerLabels = document.querySelectorAll('.container label');

// Event listener for the toggle checkbox
toggleCheckbox.addEventListener('change', function () {
  if (this.checked) {
    body.style.backgroundColor = '#242526';
    containerLabels.forEach(function (label) {
      const span = label.querySelector('span');
      if (span) {
        span.style.color = 'white';
      }
    });
  } else {
    body.style.backgroundColor = '#ffffff';
    containerLabels.forEach(function (label) {
      const span = label.querySelector('span');
      if (span) {
        span.style.color = 'black';
      }
    });
  }
});

// Event listener for each checkbox
containerLabels.forEach(function (label) {
  const checkbox = label.querySelector('input[type="checkbox"]');
  const span = label.querySelector('span');

  checkbox.addEventListener('change', function () {
    if (toggleCheckbox.checked) {
      if (this.checked) {
        span.style.color = 'black';
      } else {
        span.style.color = 'white';
      }
    } else {
      // Dark mode is disabled, set label text color to black when unchecked
      if (!this.checked) {
        span.style.color = 'black';
      }
    }
    });
});


//radio button dropdown
// const toggleRadios = document.querySelectorAll('.toggleRadio');

// toggleRadios.forEach(function (toggleRadio) {
//   toggleRadio.addEventListener('change', function () {
//     const targetId = toggleRadio.getAttribute('data-target');
//     const targetDropdown = document.getElementById(targetId);

//     if (toggleRadio.checked) {
//       targetDropdown.style.display = 'block';
//     } else {
//       targetDropdown.style.display = 'none';
//     }
//   });
// });

document.addEventListener('DOMContentLoaded', function() {
  const cityDropdown = document.getElementById('cityDropdown');

  fetch('cities.json') // Change 'cities.json' to the path of your external JSON file
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      return response.json();
    })
    .then(data => {
      data.forEach(city => {
        const option = document.createElement('option');
        option.textContent = city; 
        cityDropdown.appendChild(option);
      });
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
});