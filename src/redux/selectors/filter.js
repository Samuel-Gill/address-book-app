export const filteredUsers = (data, searchInput) => {

    return (data.users.filter((item) => `${item.name.title} ${item.name.first} ${item.name.last}`.toLowerCase().includes(searchInput)));
}