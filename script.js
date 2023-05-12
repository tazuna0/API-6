fetch('./kronEllerMynt.json')
    .then((response) => response.json())
    .then((json) => {
        var pointsum = document.querySelector(".pointsum")
        var heads = document.querySelector("#heads")
        var tails = document.querySelector("#tails")
        var resultimage = document.querySelector(".result")
        var resulttext = document.querySelector(".winorlose")
        var resetbutton = document.querySelector(".resetbutton")
        var points = 0
        var randomcoin = [heads, tails]
        var winner = randomcoin[Math.floor(Math.random() * randomcoin.length)]
        heads.src = json[0].images.mynt
        tails.src = json[0].images.kron
        var img = null

        heads.addEventListener('click', function () {
            if (img == null) {
                img = document.createElement("img")
                resultimage.appendChild(img)
            }
            if (heads == winner) {
                points++
                img.src = json[0].images.mynt
                resulttext.innerHTML = "YOU WON!"
                pointsum.innerHTML = points
                winner = randomcoin[Math.floor(Math.random() * randomcoin.length)]
            }
            else {
                points--
                img.src = json[0].images.kron
                resulttext.innerHTML = "YOU LOST!"
                pointsum.innerHTML = points
                winner = randomcoin[Math.floor(Math.random() * randomcoin.length)]
            }
        }
        )

        tails.addEventListener('click', function () {
            if (img == null) {
                img = document.createElement("img")
                resultimage.appendChild(img)
            }
            if (tails == winner) {
                points++
                img.src = json[0].images.kron
                resulttext.innerHTML = "YOU WON!"
                pointsum.innerHTML = points
                winner = randomcoin[Math.floor(Math.random() * randomcoin.length)]
            }
            else {
                points--
                img.src = json[0].images.kron
                resulttext.innerHTML = "YOU LOST!"
                pointsum.innerHTML = points
                winner = randomcoin[Math.floor(Math.random() * randomcoin.length)]
            }
        }
        )

        resetbutton.addEventListener('click', function () {
            window.location.reload()
        })

    })