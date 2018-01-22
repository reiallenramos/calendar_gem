class Meeting < ApplicationRecord

  scope :today_only, -> { where("start_time like ?", "%#{Date.today}%") }
end
