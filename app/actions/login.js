// creates a login action (ES6 style)
const createLoginAction = (user, pass) =>
({ type: ‘LOGIN’, user, pass })


// calling example
const loginAction = createLoginAction('pako', 'pwd')