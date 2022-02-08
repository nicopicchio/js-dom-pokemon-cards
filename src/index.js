console.log(data[0])

for (const element of data) {
    const ulCardElement = document.querySelector('ul')
    const liElement = document.createElement('li')
    liElement.setAttribute('class', 'card')
    ulCardElement.append(liElement)
    const h2Element = document.createElement('h2')
    h2Element.setAttribute('class', 'card--title')
    h2Element.innerText = element.name.charAt(0).toUpperCase() + element.name.substring(1)
    const imgElement = document.createElement('img')
    imgElement.setAttribute('class', 'card--img')
    imgElement.setAttribute('width', '256')
    imgElement.setAttribute('src', element.sprites.other['official-artwork']['front_default'])
    const ulPokemonStats = document.createElement('ul')
    ulPokemonStats.setAttribute('class', 'card--text')
    liElement.append(h2Element, imgElement, ulPokemonStats)
    const liStatHP = document.createElement('li')
    const liStatAttack = document.createElement('li')
    const liStatDefense = document.createElement('li')
    const liStatSpecAtt = document.createElement('li')
    const liStatSpecDef = document.createElement('li')
    const liStatSpeed = document.createElement('li')
    const liGameVrs = document.createElement('li')
    liGameVrs.innerText = element.game_indices[data.indexOf(element)].version.name
    let pokeStats = element.stats
    for (pokeStat of pokeStats) {
        if (pokeStat.stat.name === 'hp') liStatHP.innerText = `${pokeStat.stat.name.toUpperCase()}: ${pokeStat['base_stat']}`
        if (pokeStat.stat.name === 'attack') liStatAttack.innerText = `${pokeStat.stat.name.toUpperCase()}: ${pokeStat['base_stat']}`
        if (pokeStat.stat.name === 'defense') liStatDefense.innerText = `${pokeStat.stat.name.toUpperCase()}: ${pokeStat['base_stat']}`
        if (pokeStat.stat.name === 'special-attack') liStatSpecAtt.innerText = `${pokeStat.stat.name.toUpperCase()}: ${pokeStat['base_stat']}`
        if (pokeStat.stat.name === 'special-defense') liStatSpecDef.innerText = `${pokeStat.stat.name.toUpperCase()}: ${pokeStat['base_stat']}`
        if (pokeStat.stat.name === 'speed') liStatSpeed.innerText = `${pokeStat.stat.name.toUpperCase()}: ${pokeStat['base_stat']}`
    }
    ulPokemonStats.append(liStatHP, liStatAttack, liStatDefense, liStatSpecAtt, liStatSpecDef, liStatSpeed, liGameVrs)
}