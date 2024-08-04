<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>NC Salary System</title>
    <link rel="stylesheet" href="/assets/css/style.css">
    <script src="https://kit.fontawesome.com/2e52580f0a.js" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js"></script>

</head>

<body>
    <div class="nav">
        <?php
        include "pages/template/navigation-menu.php";
        ?>
    </div>
    <div class="mobile-nav">
        <?php
        include "pages/template/navigation-menu.php";
        ?>
    </div>
    <div class="main-container">
        <?php
        // include "pages/result_page/result.php";
        include "pages/calculate_page/calculate.php";
        // include "pages/about_page/about.php";
        ?>
    </div>
</body>

<script>
    function saveElementAsImage(selector) {
        html2canvas(document.querySelector(selector)).then(canvas => {
            // Create a link element
            let link = document.createElement('a');
            link.download = 'result-item.png';
            link.href = canvas.toDataURL('image/png');

            // Append the link to the body (required for Firefox)
            document.body.appendChild(link);

            // Trigger the download
            link.click();

            // Remove the link from the document
            document.body.removeChild(link);
        }).catch(error => {
            console.error('Error capturing the element:', error);
        });
    }
</script>

</html>