$("#productForm").on("submit", function (e) {
    e.preventDefault();

    var titleData = $("#title").val().trim();
    var imageData = $("#image").val().trim();
    var priceData = $("#price").val().trim();
    var descData = $("#desc").val().trim();

    if (!titleData || !priceData) {
        alert("Please enter title and price!");
        return;
    }

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
