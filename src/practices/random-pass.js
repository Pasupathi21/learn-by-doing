/* 
Constructor 'Function'
Generate 4-6 digits number using Math module random function 
Validate the if already exists or not
*/

function GeneratePassword() {
    const passwordArray = [];

    this.getPassword = () => {
        const password = Number(String(Math.random())
            .substring(2)
            .substring(0, 6));

        if (!passwordArray.includes(password)) {
            passwordArray.push(password)
            console.log(passwordArray)
            return password
        } else {
            this.getPassword();
        }
    }

}

const genPass = new GeneratePassword()
console.log(genPass.getPassword())

