class CreateWorkouts < ActiveRecord::Migration[5.2]
  def change
    create_table :workouts do |t|
      t.datetime :date
      t.string :category
      t.string :location

      t.timestamps
    end
  end
end
