function addMoreEntry() {
    var newEntryId = document.querySelectorAll('.entry-item').length + 1;
    var entryHolder = document.getElementById("add-item");
    var entryHtml = `
        <div class="entry-item">
            <label for="member${newEntryId}">Member:</label>
            <input type="text" name="member" id="member${newEntryId}" placeholder="Ex. ShadowAngle">
            <label for="contribution${newEntryId}">Contribution</label>
            <input type="text" name="contribution" id="contribution${newEntryId}" placeholder="Ex. Looter">
            <label for="share${newEntryId}">Share:</label>
            <input type="number" name="share" id="share${newEntryId}" placeholder="Ex. 20" min="1" max="70" oninput="validateShare(this)">
            <i onclick="deleteEntry(this)" class="delete-entry fa-solid fa-x fa-xl" style="color: #e94e4e;"></i>
        </div>`;
    // entryHolder.innerHTML += entryHtml;
    entryHolder.insertAdjacentHTML('beforeend', entryHtml);
}

function deleteEntry(element) {
    // Find the closest entry item to the clicked delete button and remove it
    var entryItem = element.closest('.entry-item');
    entryItem.remove();
}