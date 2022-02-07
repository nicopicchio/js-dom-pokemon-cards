for (let i = 0; i < data.length; i++) {
    const ulCardElement = document.querySelector('ul')
    const liElement = document.createElement('li')
    liElement.setAttribute('class', 'card')
    const h2Element = document.createElement('h2')
    h2Element.setAttribute('class', 'card--title')
    h2Element.innerText = data[i].name.charAt(0).toUpperCase() + data[i].name.substring(1)
    const imgElement = document.createElement('img')
    imgElement.setAttribute('class', 'card--img')
    imgElement.setAttribute('width', '256')
    imgElement.setAttribute('src', data[i].sprites.other['official-artwork']['front_default'])
    const ulPokemonStats = document.createElement('ul')
    ulPokemonStats.setAttribute('class', 'card--text')
    ulCardElement.append(liElement)
    liElement.append(h2Element, imgElement, ulPokemonStats)
    const liStatHP = document.createElement('li')
    const liStatAttack = document.createElement('li')
    const liStatDefense = document.createElement('li')
    const liStatSpecAtt = document.createElement('li')
    const liStatSpecDef = document.createElement('li')
    const liStatSpeed = document.createElement('li')
    let pokeStats = data[i].stats
    for (let j = 0; j < pokeStats.length; j++) {
        if (pokeStats[j].stat.name === 'hp') liStatHP.innerText = `${pokeStats[j].stat.name.toUpperCase()}: ${pokeStats[j]['base_stat']}`
        if (pokeStats[j].stat.name === 'attack') liStatAttack.innerText = `${pokeStats[j].stat.name.toUpperCase()}: ${pokeStats[j]['base_stat']}`
        if (pokeStats[j].stat.name === 'defense') liStatDefense.innerText = `${pokeStats[j].stat.name.toUpperCase()}: ${pokeStats[j]['base_stat']}`
        if (pokeStats[j].stat.name === 'special-attack') liStatSpecAtt.innerText = `${pokeStats[j].stat.name.toUpperCase()}: ${pokeStats[j]['base_stat']}`
        if (pokeStats[j].stat.name === 'special-defense') liStatSpecDef.innerText = `${pokeStats[j].stat.name.toUpperCase()}: ${pokeStats[j]['base_stat']}`
        if (pokeStats[j].stat.name === 'speed') liStatSpeed.innerText = `${pokeStats[j].stat.name.toUpperCase()}: ${pokeStats[j]['base_stat']}`
    }
    ulPokemonStats.append(liStatHP, liStatAttack, liStatDefense, liStatSpecAtt, liStatSpecDef, liStatSpeed)
}
