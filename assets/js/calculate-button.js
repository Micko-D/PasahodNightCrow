function validateShare(input) {
    var value = parseInt(input.value);
    if (value < 1) {
        input.value = 1;
    } else if (value > 70) {
        input.value = 70;
    }
}

function validateLoot(input) {
    var value = parseInt(input.value);
    if (value < 1) {
        input.value = 1;
    }
}

var resultData;

function calculateEntry() {
    var loot = parseInt(document.getElementById('loot').value) || 0;
    var entryItems = document.querySelectorAll('.entry-item');
    var numMembers = parseInt(entryItems.length);

    var specialMember = 0;

    entryItems.forEach(function (entryItem) {
        var share = parseInt(entryItem.querySelector('input[name="share"]').value) || 0;
        if (share > 0) {
            specialMember += (share / 100)
        }
    });


    var baseSalary = parseInt(loot / (numMembers + specialMember));

    console.log(`basalary:${baseSalary}`)

    resultData = { "data": [{ loot: loot }] };

    var totalDistributed = 0;

    entryItems.forEach(function (entryItem) {
        var member = entryItem.querySelector('input[name="member"]').value || "N/A";
        var contribution = entryItem.querySelector('input[name="contribution"]').value || "N/A";
        var share = parseInt(entryItem.querySelector('input[name="share"]').value) || 0;
        var salary = 0;
        if (share > 0) {
            salary = parseInt((1 + (share / 100)) * baseSalary);
        } else {
            salary = baseSalary
        }

        totalDistributed += salary;

        resultData.data.push({
            member: member,
            contribution: contribution,
            share: share,
            salary: salary
        });
    });

    resultData.data.push({ distributed: totalDistributed });

    console.log(resultData);

    loadContent('result');
}