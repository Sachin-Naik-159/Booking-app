function validate(email) {
    var res = false;
    var re = /\S+@\S+\.\S+/;
    res = re.test(email)
    return res;
}
export { validate }  