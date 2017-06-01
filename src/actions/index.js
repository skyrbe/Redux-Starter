//An action creator, selectBook , just returns an action
export function selectBook(book) {
  return {
    type: "SELECTED_BOOK",
    payload:book
  }
};
