<div class="calculator">
    <div id="add-item" class="entry-holder">
        <div class="loot-input">
            <label for="loot">Loot:</label>
            <input type="text" name="loot" id="loot" placeholder="Ex. 1350">
        </div>
        <div class="entry-item">
            <label for="member">Member:</label>
            <input type="text" name="member" id="member" placeholder="Ex. ShadowAngle">
            <label for="contribution">Contribution</label>
            <input type="text" name="contribution" id="contribution" placeholder="Ex. Looter">
            <label for="share">Share:</label>
            <input type="number" name="share" id="share" placeholder="Ex. 20" min="1" max="70" oninput="validateShare(this)">
        </div>
    </div>
    <div class="addmore-entry" onclick="addMoreEntry()">
        <i class="fa-solid fa-plus fa-xl" style="color: #DF8D0F;"></i>
        <h3>Add more</h3>
    </div>
    <div class="calcu-button">
        <h3 onclick="calculateEntry()">Calculate</h3>
    </div>
</div>

<script src="/assets/js/addmore-entry.js"></script>
<script src="/assets/js/calculate-button.js"></script>