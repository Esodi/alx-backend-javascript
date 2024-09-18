console.log('Welcome to Holberton School, what is your name?');

process.stdin.on('data', (data) => {
    const name = data.toString().trim();  // Trim to remove any extra new lines
    console.log(`Your name is: ${name}`);
    
    // To end the process after the input
    process.stdin.end();
});

// When the process ends, display the closing message
process.on('exit', () => {
    console.log('This important software is now closing');
});

