Rails.application.routes.draw do
  root to: 'static_pages#root'
  namespace :api, defaults: {format: :json}  do
    resources :suppliers
    resources :products
    resources :reviews
    resources :stories
  end
  resources :users, only: [:new, :create, :destroy]
  resources :sessions, only: [:new, :create, :destroy]
end
