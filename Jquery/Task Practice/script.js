// ===== Que 1. ==== // 

const que1 = document.getElementById("que1");

if (typeof jQuery !== 'undefined') {
    que1.innerText = "jQuery is loaded!";
} else {
    que1.innerText = "jQuery is NOT loaded.";
}

// ===== Que 2. ==== //

$("#topBtn").click(function () {
    $(window).scrollTop(0);
})

// ===== Que 3. ==== //
$("#animateBtn").click(function () {
    $(this).animate({ width: "250px", height: "100px" }, 600);
});

// ===== Que 4. ==== //
$("#fadeBtn").click(function () {
    $(".fadebox").fadeIn("800");
});

// ===== Que 5. ==== //
$("#agreecheck").on("change", function () {
    $("#continueBtn").prop("disabled", !this.checked);
    alert("Check Box Chechked....! ")
});

// ===== Que 6. ==== //
$("#printBtn").click(function () {
    window.print();
});

// ===== Que 7. ==== //
$("#username").on("input",function () {
    const max = 10;
    if ($(this).val().length > max) {
        $(this).val($(this).val().slice(0, max));
    }
});

// ===== Que 8. ==== //
$("#note").click(function(){
    $(".forgetBold").css("font-weight", "normal")
})

// ===== Que 9. ==== //
$("#container").append("<div>New division</div>");

// ===== Que 10. ==== //
const student = { name: "yug", age: 18, city: "Surat" };

$("#list10").empty();

$.each(student, function(key, value) {
    $("#list10").append("<li>" + key + ": " + value + "</li>");
});

// ===== Que 11. ==== //
$("#list11").append("<li>item-2</li>");
$("#list11").append("<li>item-3</li>");

// ===== Que 12. ==== //
$("#textbox").on("input", function() {
  $("#typed").text("You Typed: " + $(this).val());
});

// ===== Que 13. ==== //
$("#field").val("new value");
