// Operations: Object Access, Invocation
console.log("What's your name?");

// Operations: Object Access, Object Access, Invocation
process.stdin.on('data', function(data) {

    // Operations: Assignment, Object Access, Invocation, Object Access, Invocation
    const name = data.toString().trim();
    
    // Operations: Object Access, Invocation
    console.log(`Hello, ${name}!`);

});