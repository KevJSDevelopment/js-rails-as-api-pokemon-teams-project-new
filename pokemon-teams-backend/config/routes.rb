Rails.application.routes.draw do
  resources :pokemons
  resources :trainers

  # get "/trainers/:id/pokemon" , to: "trainers#trainer_pokemon"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
