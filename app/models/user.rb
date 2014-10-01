# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  name            :string(255)
#  email           :string(255)
#  password_digest :string(255)
#  session_token   :string(255)
#  created_at      :datetime
#  updated_at      :datetime
#

class User < ActiveRecord::Base
  validate :email, :name, :password_digest, :session_token
  before_save { self.session_token ||= SecureRandom.base64 }

  def password= pword
    self.password_digest = BCrypt::Password.create pword
  end

  def is_password? pword
    BCrypt::Password.new(self.password_digest).is_password?(pword)
  end

  def reset_session_token!
    self.session_token = SecureRandom.base64
    self.save!
    self.session_token
  end


end
