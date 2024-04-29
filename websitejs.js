function showFakeData() {
    var searchInput = document.getElementById('searchInput').value.trim();
    var resultsDiv = document.getElementById('results');

    if (searchInput) {
        // Split the search input into an array of names by commas
        var playerNames = searchInput.split(',').map(name => name.trim());

        // Start building the results table with headers
        var resultsHTML = `
            <p>Results for: ${searchInput}</p>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Team</th>
                    <th>Home Runs</th>
                    <th>AVG</th>
                    <th>OPS</th>
                    <th>SLG</th>
                    <th>wRC+</th>
                    <th>SwStr%</th>
                    <th>xwOBA</th>
                </tr>`;

        // Loop through each player name and create a row in the results table
        playerNames.forEach(playerName => {
            resultsHTML += `
                <tr>
                    <td>${playerName}</td> <!-- Player name from search input -->
                    <td>Yankees</td>
                    <td>20</td>
                    <td>.300</td>
                    <td>.900</td> <!-- Example OPS -->
                    <td>.500</td> <!-- Example SLG -->
                    <td>120</td> <!-- Example wRC+ -->
                    <td>11.5%</td> <!-- Example SwStr% -->
                    <td>.340</td> <!-- Example xwOBA -->
                </tr>`;
        });

        // Close the table tag
        resultsHTML += `</table>`;

        // Set the innerHTML of the results div to the resultsHTML string
        resultsDiv.innerHTML = resultsHTML;
    } else {
        resultsDiv.innerHTML = "<p>Please enter a player name to search.</p>";
    }
}
document.addEventListener('DOMContentLoaded', function () {
    const tableBody = document.querySelector("table tbody");
    let html = '';
    for (let i = 1; i <= 30; i++) {
        html += `
            <tr>
                <td>Player Name ${i}</td>
                <td>Team ${i}</td>
                <td>${20 + i % 5}</td>
                <td>.${250 + i % 50}</td>
                <td>.${800 + i % 100}</td>
                <td>.${400 + i % 100}</td>
                <td>${100 + i % 20}</td>
                <td>${10 + i % 5}%</td>
                <td>.${300 + i % 40}</td>
            </tr>
        `;
    }
    tableBody.innerHTML = html;
});


