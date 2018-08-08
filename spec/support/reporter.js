// const JasmineConsoleReporter = require('jasmine-console-reporter');

// let reporter = new JasmineConsoleReporter({
//     colors: 1,           // (0|false)|(1|true)|2
//     cleanStack: 1,       // (0|false)|(1|true)|2|3
//     verbosity: 4,        // (0|false)|1|2|(3|true)|4
//     listStyle: 'indent', // "flat"|"indent"
//     activity: true,
//     emoji: true,         // boolean or emoji-map object
//     beep: true
// })


// module.exports = reporter;


const JasmineConsoleReporter = require('jasmine-console-reporter');
const reporter = new JasmineConsoleReporter({
    colors: 1,           // (0|false)|(1|true)|2
    cleanStack: 1,       // (0|false)|(1|true)|2|3
    verbosity: 4,        // (0|false)|1|2|(3|true)|4
    listStyle: 'indent', // "flat"|"indent"
    activity: false,     // boolean or string ("dots"|"star"|"flip"|"bouncingBar"|...)
    emoji: true,
    beep: true
});

jasmine.getEnv().addReporter(reporter);
