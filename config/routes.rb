Reedly::Application.routes.draw do
  devise_for :users

  get "/welcome", to: "static_pages#home"

  root to: "feeds#index"

  resources :feeds do
    resources :entries
  end

  resources :feed_categories

  devise_scope :user do
    get "/guestsignin", to: "guests#login_guest"
  end

end
