document.addEventListener("DOMContentLoaded", () => {
    const generateButton = document.getElementById('generate');
    const tableContainer = document.getElementById('table-container');
    
    generateButton.addEventListener('click', () => {
        const num1 = parseInt(document.getElementById('num1').value);
        const num2 = parseInt(document.getElementById('num2').value);
        const limit = 50;
        
        if (isNaN(num1) || isNaN(num2) || num1 <= 0 || num2 <= 0) {
            alert('Please enter valid positive numbers.');
            return;
        }
        
        let html = '<table class="table">';
        html += '<tr><th>Multiplier</th><th>Result</th></tr>';
        
        for (let i = 1; i <= limit; i++) {
            const result = num1 * num2 * i;
            html += `<tr><td>${num1} x ${num2} x ${i}</td><td>${result}</td></tr>`;
        }
        
        html += '</table>';
        tableContainer.innerHTML = html;
    });
});

