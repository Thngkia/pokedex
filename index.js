const express = require('express');
const pokemonController = require('./controllers/PokemonController');
const app = express();
var methodOverride = require('method-override')

const port = 3000

app.set('views', './views')
app.set('view engine', 'ejs')


app.use(methodOverride('_method'))
app.use(express.urlencoded({
    extended: true
}))
  

// INDEX
app.get('/pokedex', pokemonController.listPokemon)

// NEW
app.get('/pokedex/new', pokemonController.newPokemon)

// SHOW
app.get('/pokedex/:id', pokemonController.showPokemon)

// EDIT
app.get('/pokedex/:id/edit', pokemonController.editPokemon)

// CREATE
app.post('/pokedex', pokemonController.createPokemon)

// UPDATE
app.patch('/pokedex/:id',pokemonController.updatePokemon)

//DELETE
app.delete('/pokedex/:id', pokemonController.deletePokemon)

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})