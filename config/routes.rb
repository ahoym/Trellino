Trellino::Application.routes.draw do
  root to: 'static_pages#root'
  
  namespace :api, :defaults => { :format => :json} do
    resources :boards, only: [:index, :show, :create, :update, :destroy] do
      resources :lists, only: [:index, :show, :create, :update, :destroy]
    end
    
    resources :cards, only: [:create, :update, :destroy] do
        resources :todo_items, only: [:create, :update, :destroy]
    end
    
    resources :card_assignments, only: :destroy
  end  
  
  resource :session, only: [:new, :create, :destroy], :defaults => { :format => :html }
  resources :users, only: [:new, :create, :destroy]
end