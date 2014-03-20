Reedly::Application.routes.draw do
  devise_for :users
  root to: "static_pages#home"
  resources :feeds do
    resources :entries
  end
end
