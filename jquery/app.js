const onload = () => {
    const $firstDiv = $('div').first();

    for (let i = 0; i < 16; i++) {
        let randomColor = '#'+ ('000000' + Math.floor(Math.random()*16777215).toString(16)).slice(-6);
        const $newDiv = $('<div></div>').css("background-color",randomColor);
        $('section').append($newDiv)
    }

    $('div').each(function(index) {
        setInterval(() => {
            // const $newDiv = $('<div></div>').text("Ma new div");
            // $('section').append($newDiv);
            $(this).fadeOut();
        }, (500 * index));
    })
    

    $firstDiv.css("background-color", "red");

    // $allDivs.each(function() {
        // $(this).click(function() {
        //     $(this).addClass('green');
        // })
    // })

    $allDivs.click(function() {
        $(this).addClass('green');
        $(this).text($(this).index());
    })

}

$(onload);

