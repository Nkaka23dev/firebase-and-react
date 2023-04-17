const patterns = {
    telephone: /^\d{11}$/,
    username: /^[a-z\d\s+]{5,10}$/i,
    password: /^[\w@-]{8,15}$/i,
    profile: /^[a-z0-9-]{8,20}$/,
    email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/
}
const inputs = document.querySelectorAll('input');

const validate = (field, regex) => {
    if (regex.test(field.value)) {
        field.classList.add("border-green-500")
        field.classList.remove("border-red-500")
    } else {
        field.classList.add("border-red-500")
        field.classList.remove("border-green-500")
    }
}

inputs.forEach(input => {
    input.addEventListener('keyup', (e) => {
        validate(e.target, patterns[e.target.attributes.name.value])
    })
})