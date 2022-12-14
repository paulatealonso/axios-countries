const getCountyInfo = countryName => {
    axios
        .get(`https://restcountries.com/v3.1/name/${countryName}`)
        .then(response => {

            const countryDetails = response.data

            coun.innerHTML = ``

            countryDetails.forEach(united => {

                const coun = document.getElementById("coun")

                coun.innerHTML += `
                <h2>${united.name.common}</h2> 
                <img src="${united.flags.png}" alt="">
                `
                
                if (united.borders) {

                    let ulLi = document.createElement("ul")
                    coun.appendChild(ulLi)


                    for (let i = 0; i < united.borders.length; i++) {
                        let listBorder = document.createElement("li")
                        listBorder.innerText = `${united.borders[i]}`
                        ulLi.appendChild(listBorder)
                    }

                }


            })


            // const nameBox = document.getElementById('country-name')
            // const flagBox = document.getElementById('country-flag')

            // nameBox.innerText = countryDetails[0].name.common
            // flagBox.setAttribute('src', countryDetails[0].flags.png)


            // flagBox.addEventListener('click', () => {
            //     getCountyInfo('morocco')
            // })


        })

        .catch(err => console.error(err))

}


const countryBtn = document.querySelector('#get-country-btn')

countryBtn.addEventListener('click', () => {

    const userInput = document.querySelector('#country-name-input').value

    getCountyInfo(userInput)

})