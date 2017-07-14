Rails.application.routes.draw do
  resources :animals
  root 'animals#index'
  get 'search' => 'sightings#index'
  resources :sightings do
    get :get_cal, on: :collection
  end
end
