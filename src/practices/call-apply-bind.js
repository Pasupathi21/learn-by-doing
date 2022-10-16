const candidate = {
    firstName: 'Arun',
    lastName: 'Kumar',
    phoneNo: 4785238676,
    getExperience: function(skills = 'Java Script', usingMethod='No'){
        console.log(`
        '${usingMethod}' Methods used :-
        <------------------------------------------------->
        Experience of: ${candidate.firstName} ${candidate.lastName}
        Role         : ${this.role}
        Skills       :  ${skills}
        <------------------------------------------------->`);
    }
}

const candidateExperience = {
    role: 'Software Engineer',
    companies: [{
        name: 'Red coder',
        yearsOfExp: 2,
        salary: '3.5 lak PA'
    },
    {
        name: 'AQT Tech',
        yearsOfExp: 1,
        salary: '5 lak PA'
    },
    {
        name: 'GOLD Brain',
        yearsOfExp: 2.5,
        salary: '7 lak PA'
    }
]
}
// Without using bind, apply and call 
// candidate.getExperience();

console.log('======================= BIND ========================')
/* 
Bind using to change the 'this' key word reference in the execution context area 
Bind return the 'Function'
*/
candidate.getExperience.bind(candidateExperience)('Java Script, HTML, CSS', 'bind');
console.log('======================= BIND-END ========================')

console.log('======================= CALL ========================')
/* 
'Call' method same as 'Bind' But not return 'Function'  this execute directly
*/
candidate.getExperience.call(candidateExperience,'Angular, HTML, CSS', 'call')
console.log('======================= CALL-END ========================')

console.log('======================= APPLY ========================')
/* 
'Apply' method same as 'Bind' and 'call' But not return 'Function'  this execute directly
You want to pass the parameter using array
*/
candidate.getExperience.apply(candidateExperience,['Node, MySQL, Express js', 'apply'])
console.log('======================= APPLY-END ========================')


