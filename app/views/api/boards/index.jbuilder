json.array!(@boards) do |board|
	json.partial!("api/boards/board", :board => board, :lists => board.lists)
end