class PokemonsController < ApplicationController

    def destroy
        pokemon = Pokemon.find(params[:id])
        bob = pokemon
        pokemon.destroy()
        #render :json bob.to_json()
    end
end
