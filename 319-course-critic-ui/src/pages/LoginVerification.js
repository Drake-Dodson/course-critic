
export function LogInValidation() {
    var resultEmailCheck = emailCheck(document.forms["User Information"]["Email"].value);
    var labelNotifyEmail1 = getNotification(Boolean(resultEmailCheck), "Email");
    document.getElementById("errorReport1").appendChild(labelNotifyEmail1);

    var resultPwdCheck = alphaNumCheck(document.forms["User Information"]["Password"].value);
    var labelNotifyPwd = getNotification(Boolean(resultPwdCheck), "Password");
    document.getElementById("errorReport2").appendChild(labelNotifyPwd);

    if (resultEmailCheck == true && resultPwdCheck == true) {
        //TODO update
        window.location.href = "/";
    }
}

function getNotification(bool, ID) {
    var label = document.getElementById("labelNotify" + ID);
    if (label == null) {
        label = document.createElement("LABEL");
        label.id = "labelNotify" + ID;
        // label.className = "errorMessage";
        label.setAttribute('class', 'errorMessage');
    }


    if (ID == "Email") {
        label.innerHTML = bool ? "" : "Email should be in form xxx@xxx.xxx, which x should be alphanumeric!";

    } else if (ID == "Password") {

        label.innerHTML = bool ? "" : "Password should be alpha numeric!";

    }  else {

        label.innerHTML = bool ? "" : "Unknown ERROR";

    }
    return label;
}

function emailCheck(email) {
    var atESplit = email.split('@');
    if (atESplit.length == 2 && alphaNumCheck(atESplit[0])) {
       var periodSplit = atESplit[1].split('.')
        if (periodSplit.length == 2 && alphaNumCheck(periodSplit[0] + periodSplit[1])) {
            return true;
        }
    }
    return false;
}

function alphaNumCheck(entry) {
    let regex = /^[a-z0-9]+$/i;
    if (entry != null && entry.match(regex)) {
        return true;
    } else {
        return false;
    }
}

