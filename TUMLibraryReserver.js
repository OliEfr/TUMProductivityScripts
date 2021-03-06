// ==UserScript==
// @name         TumLibraryReserver
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  automatically fills in your personal data on the library reservation website
// @author       Oliver Hausdörfer
// @match        https://www.ub.tum.de/reserve/*
// @include      https://www.ub.tum.de/en/reserve/*
// @icon         https://www.google.com/s2/favicons?domain=tum.de
// @grant        none
// ==/UserScript==


const name = "Name Surname";
const mail = "your@tummail.de";
const tum_id = "your_tum_ID";


(function() {
    'use strict';
    
    document.querySelectorAll("input[name='field_tn_name[und][0][value]'")[0].value = name
    document.querySelectorAll("input[name='anon_mail'")[0].value = mail
    document.querySelectorAll("label[for='edit-field-stud-ma-und-stud'")[0].click()
    document.querySelectorAll("input[name='field_tum_kennung[und][0][value]'")[0].value = tum_id
    document.querySelectorAll("label[for='edit-field-datenschutzerklaerung-und'")[0].click()
    document.querySelectorAll("label[for='edit-field-benutzungsrichtlinien-und'")[0].click()
})();



