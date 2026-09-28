$(".card").hide();

$("#add").click(function (e) {
    e.perventDefault();

    var titleData = $("#title").val();
    var imageData = $("#image").val();
    var priceData = $("#price").val();
    var descData = $("#desc").val();

    let card = `
        <div class="card">
            <img src="${imageData}" alt="${titleData}">
            <h3>${titleData}</h3>
            <span>₹ ${priceData}</span>
            <p>${descData}</p>
        </div>
    `;

    $("#output").append(card);

    $("#title").val("");
    $("#image").val("");
    $("#price").val("");
    $("#desc").val("");
});

