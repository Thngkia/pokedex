const { indexOf } = require('../models/pokemon.js')
const PokemonModel = require('../models/pokemon.js')

const pokemonController = {
    listPokemon: (req,res) => {
        res.render('index', {
            pokemons: PokemonModel
        })
    },

    newPokemon: (req,res) => {
        res.render('new')
    },

    showPokemon: (req,res) => {
        let pokemon = PokemonModel.find(obj => {
            return obj.id == req.params.id
        })

        res.render('show', {
            pokemon: pokemon
        })
    },

    editPokemon: (req,res) => {
        let pokemon = PokemonModel.find(obj => {
            return obj.id == req.params.id
        })

        res.render('edit', {
            pokemon: pokemon
        })
    },

    createPokemon: (req,res) => {
        res.send('created')
    },

    updatePokemon: (req,res) => {
        let pokemon = PokemonModel.find(obj => {
            return obj.id == req.params.id
        })

        pokemon.name = req.body.name
        pokemon.type[0] = req.body.type
        pokemon.img = req.body['image-link']

        res.render('show', {
            pokemon: pokemon
        })
    },

    deletePokemon: (req,res) => {
        console.log('delete')
        let pokemonIndex = PokemonModel.findIndex(obj => {
            return obj.id == req.params.id
        })

        PokemonModel.splice(pokemonIndex, 1)
        res.redirect('/pokedex')
    }
}

module.exports = pokemonController