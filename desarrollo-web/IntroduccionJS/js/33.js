function miembrosDelClub() {
    const resultado = await fetch("js/maticraft.json")
    const datos = await resultado.json()
    console.log(datos)
}
miembrosDelClub();