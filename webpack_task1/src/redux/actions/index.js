export const setNationality = (nat) => {
    return {
        type: 'UPDATE',
        payload: nat
    }
}

export const getAPI = async (results,page,changeNationality) => {
    const res = await axios.get(`https://randomuser.me/api/?results=${results}&page=${page}&nat=${changeNationality}`);
    return {
        type: 'API',
        id: res
    }
}