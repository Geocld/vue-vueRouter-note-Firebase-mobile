export function filterBytitle (value, title) {
	return filternotes(value, 'title', title);
}

export function filterByCategory (value, category) {
  if (!category) return value
  return filternotes(value, 'category', category)
}


//helper
function filternotes (notes, filterBy, filterValue) {
	var filteredNotes = {};
	for (var note in notes) {
		if (notes[note][filterBy].indexOf(filterValue) > -1) {
			filteredNotes[note] = notes[note];
		}
	}
	return filteredNotes;
}