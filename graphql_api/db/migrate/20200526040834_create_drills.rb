class CreateDrills < ActiveRecord::Migration[5.2]
  def change
    create_table :drills do |t|
      t.belongs_to :workout, foreign_key: true
      t.string :name

      t.timestamps
    end
  end
end
