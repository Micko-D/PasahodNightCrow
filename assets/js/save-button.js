function saveElementAsImage(selector) {
    html2canvas(document.querySelector(selector)).then(canvas => {
        // Create a new canvas to add the watermark
        let newCanvas = document.createElement('canvas');
        newCanvas.width = canvas.width;
        newCanvas.height = canvas.height;
        let ctx = newCanvas.getContext('2d');

        // Draw the original canvas onto the new canvas
        ctx.drawImage(canvas, 0, 0);

        // Load the watermark image
        let watermark = new Image();
        watermark.src = '/assets/images/my-logo.png'; // Replace with the path to your watermark image
        watermark.onload = function() {
            // Calculate the position to place the watermark (bottom right)
            let watermarkWidth = 100; // Set the desired width of the watermark
            let watermarkHeight = watermark.height / (watermark.width / watermarkWidth); // Maintain aspect ratio
            let x = newCanvas.width - watermarkWidth - 10; // 10px padding from the right
            let y = newCanvas.height - watermarkHeight - 10; // 10px padding from the bottom

            // Draw the watermark on the new canvas
            ctx.drawImage(watermark, x, y, watermarkWidth, watermarkHeight);

            // Create a link element
            let link = document.createElement('a');
            link.download = 'result-item.png';
            link.href = newCanvas.toDataURL('image/png');

            // Append the link to the body (required for Firefox)
            document.body.appendChild(link);

            // Trigger the download
            link.click();

            // Remove the link from the document
            document.body.removeChild(link);
        };
    }).catch(error => {
        console.error('Error capturing the element:', error);
    });
}
