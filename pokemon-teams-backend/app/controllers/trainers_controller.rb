require "faker"

class TrainersController < ApplicationController
    
    def index
        trainers = Trainer.all
        render json: trainers.to_json({include: :pokemons})
    end

    def show
        trainer = Trainer.find(params[:id])
        pokemons = trainer.pokemons
        render json: pokemons.to_json()
    end

    def catch_pokemon

        name = Faker::Name.first_name
        species = Faker::Games::Pokemon.name
        pocket_monster = Pokemon.create(nickname: name, species: species, trainer_id: params[:id])
        render json: pocket_monster.to_json() 

    end

end
