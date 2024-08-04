function loadContent(page) {
    fetch(`pages/${page}_page/${page}.php`)
        .then(response => response.text())
        .then(data => {
            document.querySelector('.main-container').innerHTML = data;
            if (page === 'result' && typeof resultData !== 'undefined') {
                updateResultData(resultData);
            }
        })
        .catch(error => console.error('Error loading content:', error));
}

function menuSelector(item) {
    // Select all elements with the class 'menu-item'
    var itemSelector = document.getElementsByClassName("menu-item");

    // Remove specific classes from all items
    for (var i = 0; i < itemSelector.length; i++) {
        itemSelector[i].classList.remove("translateCalculate", "translateAbout");
    }

    if (item === "Calculate") {
        itemSelector[0].classList.add("translateCalculate");
        loadContent('calculate');
    } else if (item === "About") {
        itemSelector[0].classList.add("translateAbout");
        loadContent('about');
    }
}


function updateResultData(resultData) {
    // Update the Loot
    document.querySelector('.result-item .title .div2 h2').textContent = `Loot: ${resultData.data[0].loot} dias`;

    // Update the table content
    const tableContent = document.querySelector('.table-loot-content');
    tableContent.innerHTML = ''; // Clear existing rows

    resultData.data.slice(1, -1).forEach(entry => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td class="trancute">${entry.member || 'N/A'}</td>
            <td class="trancute">${entry.contribution || 'N/A'}</td>
            <td class="trancute">${entry.share ? `+${entry.share}%` : 'Normal'}</td>
            <td class="trancute">${entry.salary || '0'}</td>
        `;
        tableContent.appendChild(row);
    });

    // Update the total distributed
    document.querySelector('.total-dis .highlight-text').textContent = `${resultData.data[resultData.data.length - 1].distributed} dias`;
}

function toggleMenu() {
    // Select the menu item headers
    const menuItemHeaders = document.querySelectorAll('.menu-item h3');

    // Toggle the hide class for each header
    menuItemHeaders.forEach(header => {
        header.classList.toggle('hide');
    });

    // Add an event listener to hide the menu when clicking outside
    document.addEventListener('click', hideMenuOnClickOutside);
}

// Function to hide the menu
function hideMenu() {
    const menuItemHeaders = document.querySelectorAll('.menu-item h3');
    menuItemHeaders.forEach(header => {
        if (!header.classList.contains('hide')) {
            header.classList.add('hide');
        }
    });

    // Remove the event listener after hiding the menu
    document.removeEventListener('click', hideMenuOnClickOutside);
}

// Function to hide the menu when clicking outside of it
function hideMenuOnClickOutside(event) {
    const menuContainer = document.querySelector('.menu-item');
    const isClickInsideMenu = menuContainer.contains(event.target);
    const isLogoClicked = event.target.classList.contains('my-logo');

    // If the click is outside the menu container and not on the logo, hide the menu
    if (!isClickInsideMenu && !isLogoClicked) {
        hideMenu();
    }
}

// Event listener to hide the menu when any menu item is clicked
document.querySelectorAll('.menu-item h3').forEach(header => {
    header.addEventListener('click', hideMenu);
});

// Attach the toggleMenu function to the logo click event
document.querySelector('.my-logo').addEventListener('click', function(event) {
    // Prevent the click from propagating to the document
    event.stopPropagation();
    toggleMenu();
});