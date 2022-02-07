for (const element of data) {
    const ulCardElement = document.querySelector('ul')
    const liElement = document.createElement('li')
    liElement.setAttribute('class', 'card')
    const h2Element = document.createElement('h2')
    h2Element.setAttribute('class', 'card--title')
    h2Element.innerText = element.name.charAt(0).toUpperCase() + element.name.substring(1)
    const imgElement = document.createElement('img')
    imgElement.setAttribute('class', 'card--img')
    imgElement.setAttribute('width', '256')
    imgElement.setAttribute('src', element.sprites.other['official-artwork']['front_default'])
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
    let pokeStats = element.stats
    for (stat of pokeStats) {
        if (stat.stat.name === 'hp') liStatHP.innerText = `${stat.stat.name.toUpperCase()}: ${stat['base_stat']}`
        if (stat.stat.name === 'attack') liStatAttack.innerText = `${stat.stat.name.toUpperCase()}: ${stat['base_stat']}`
        if (stat.stat.name === 'defense') liStatDefense.innerText = `${stat.stat.name.toUpperCase()}: ${stat['base_stat']}`
        if (stat.stat.name === 'special-attack') liStatSpecAtt.innerText = `${stat.stat.name.toUpperCase()}: ${stat['base_stat']}`
        if (stat.stat.name === 'special-defense') liStatSpecDef.innerText = `${stat.stat.name.toUpperCase()}: ${stat['base_stat']}`
        if (stat.stat.name === 'speed') liStatSpeed.innerText = `${stat.stat.name.toUpperCase()}: ${stat['base_stat']}`
    }
    ulPokemonStats.append(liStatHP, liStatAttack, liStatDefense, liStatSpecAtt, liStatSpecDef, liStatSpeed)
}
