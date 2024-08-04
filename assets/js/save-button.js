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