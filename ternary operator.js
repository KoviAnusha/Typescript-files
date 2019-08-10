function operator1(e) {
    var value = (e > 0) ? true : false;
    if (value)
        console.log(e + " is positive number");
    else
        console.log(e + " is negative number");
}
operator1(9);
