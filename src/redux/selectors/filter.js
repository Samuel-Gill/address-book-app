import { createSelector } from "reselect";

export const filterSelector = createSelector(
    (state) => state.user,
    (_, filtered) => filtered,
    (data, filtered) =>
        data.users.filter((item) => `${item.name.title} ${item.name.first} ${item.name.last}`.toLowerCase().includes(filtered))
)