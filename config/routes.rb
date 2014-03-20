Reedly::Application.routes.draw do
  devise_for :users
  root to: "feeds#index"
  resources :feeds do
    resources :entries
  end
end
