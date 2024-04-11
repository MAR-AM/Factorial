var n = parseInt(prompt("Enter a positive number: "));
        var factorial = 1;
        for (let i = 1; i <= n; i++) {
            factorial *= i;
        }
        document.write("The factorial of " + n + " is: " + factorial + "<br>");
