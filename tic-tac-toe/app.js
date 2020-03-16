// const onload = () => {
//     let playercounter = 0;
//     const addingX = (box) => {
//         box.append("X");
//     }
//     const addingO = (box) => {
//         box.append("O");
//     }
//     let gameBoardX = [["","",""], 
//                       ["","",""], 
//                       ["","",""]];
//     let gameBoardO = [[], [], []];
//     const checkResult = () => {
//         gameBoardX.forEach(item => {
//             if ((item[0] + item[1] + item[2]) === 3) {
//                 $('.results').text("X Wins");
//             }
//         }) 
//     }
//     $('.row1 div').click(function () {
//         if ((playercounter % 2 === 0) && ($(this).text().length < 1)) {
//             addingX($(this));
//             playercounter++;
//             gameBoardX[0].splice($(this).index(),1,$(this).index());
//             console.log(gameBoardX);
//             checkResult();
//         } else if ((playercounter % 2 === 1) && ($(this).text().length < 1)) {
//             addingO($(this));
//             gameBoardO[0].splice($(this).index(),1,$(this).index());
//             playercounter++;
//             console.log(gameBoardO);
//                checkResult();
//         }
//     })
//     $('.row2 div').click(function () {
//         if ((playercounter % 2 === 0) && ($(this).text().length < 1)) {
//             addingX($(this));
//             playercounter++;
//             gameBoardX[1].splice($(this).index(),1,$(this).index());
//             console.log(gameBoardX);
//                checkResult();
//         } else if ((playercounter % 2 === 1) && ($(this).text().length < 1)) {
//             addingO($(this));
//             gameBoardO[1].splice($(this).index(),1,$(this).index());
//             playercounter++;
//             console.log(gameBoardO);
//                checkResult();
//         }
//     })
//     $('.row3 div').click(function () {
//         if ((playercounter % 2 === 0) && ($(this).text().length < 1)) {
//             addingX($(this));
//             playercounter++;
//             gameBoardX[2].splice($(this).index(),1,$(this).index());
//             console.log(gameBoardX);
//             //    checkResult();
//         } else if ((playercounter % 2 === 1) && ($(this).text().length < 1)) {
//             addingO($(this));
//             gameBoardO[2].splice($(this).index(),1,$(this).index());
//             playercounter++;
//             console.log(gameBoardO);
//             //    checkResult();
//         }
//     })
// }

const onload = () => {
    $('.box').click(function() {
        const index = $(this).index();
        $(this).text("X");
    })

    const boxes = document.querySelectorAll(".box");
    boxes.forEach((box) => {
        box.addEventListener("click", () => {
            box.innerHTML = "X";
            const index = boxes.indexOf(box);
        })
    })
}

$(onload); 