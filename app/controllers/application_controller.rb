class ApplicationController < ActionController::Base
  protect_from_forgery

  helper_method :current_user, :require_login!, :input_auth_token, :logged_in?
  
  def current_user
    session_token = session[:session_token]
    return nil if session_token.nil?
    
    User.find_by_session_token(session_token)
  end
  
  def require_login!
    redirect_to new_session_url unless current_user
  end
  
  def input_auth_token
    "<input 
        type=\"hidden\" 
        name=\"authenticity_token\" 
        value=\"#{form_authenticity_token}\" >".html_safe
  end
  
  def logged_in?
    !!current_user
  end

end
