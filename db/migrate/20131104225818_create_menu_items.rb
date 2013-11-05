class CreateMenuItems < ActiveRecord::Migration
  def up
   create_table :menu_items do |t|
      t.string :name
      t.integer :price
      t.belongs_to :menu
      t.timestamps
    end
  end

  def down
    drop_table :menu_items
  end
end
