class CreateSightings < ActiveRecord::Migration[5.1]
  def change
    create_table :sightings do |t|
      t.date :date
      t.string :region
      t.references :animal, foreign_key: true

      t.timestamps
    end
  end
end
