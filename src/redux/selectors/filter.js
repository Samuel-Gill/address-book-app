import { createSelector } from "reselect";

export const filterSelector = createSelector(
    (state) => state.user,
    (_, filtered) => filtered,
    (_, fil, show) => show,
    (data, filtered, show) =>
        data.users.filter((item) => `${item.name.title} ${item.name.first} ${item.name.last}`.toLowerCase().includes(filtered)).slice(0, show)
)