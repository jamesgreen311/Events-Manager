/**
 * Generates a unique alphanumeric string.
 *
 * @return {string} A randomly generated hexadecimal string.
 * @customfunction
 */
function GENERATEID() {
    let cell = SpreadsheetApp.getActiveSheet().getActiveCell().getDisplayValue();

    if (cell !== "") {
        return makeAnId();
    }
}
