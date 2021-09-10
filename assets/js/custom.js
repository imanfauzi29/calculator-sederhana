let result = $("#result")
let regex = new RegExp(/^\s*([-+]?)(\d+)(?:\s*([-+*\/])\s*((?:\s[-+])?\d+)\s*)+$/)

function insertNumber(number) {
    let existingNumber = result.val()
    result.val(existingNumber + number)
    livePreview()
}

function livePreview() {
    let value = result.val()
    if (value.match(regex)) {
        $("#preview").val(eval(result.val()))
    }
}

$(() => {
    $(".btn-calc").on("click", (e) => {
        const { value } = e.target
        insertNumber(value)
    })

    $("#calculate").on("click", () => {
        let results = eval(result.val())
        result.val(results)
        $("#preview").val("")
    })

    // Delete number
    $("#deleteNumber").on("click", () => {
        let value = result.val()

        if (value !== "") {
            result.val(result.val().slice(0, -1))
        }
    })

    // Clear Number
    $("#clear").on("click", () => {
        result.val("")
    })
})
