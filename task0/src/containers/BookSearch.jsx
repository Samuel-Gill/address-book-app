import { useEffect, useState } from 'react'
import axios, { Axios } from 'axios'

export default function useBookSearch(query, pageNumber) {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [books, setBooks] = useState([])
    const [hasMore, setHasMore] = useState(false)

    useEffect(() => {
        setBooks([])
    }, [query])

    useEffect(() => {
          axios.get(
              "https://picsum.photos/200/100"
          ).then((res) => {
              console.log("Images API" + res);
          })
    }, []);

    const getUserData = async () => {
        try {
            const res = await fetch('https://randomuser.me/api/');
            const actualData = await res.json();
            console.log("Data from fetch random users")
            console.log(actualData.results[0].email);
            console.log(" " + actualData.results[0].name.last);
            console.log("    ");
        } catch (error) {
            console.log(error);
        } 
    }

    useEffect(() => {
        getUserData();
    },[]);

    useEffect(() => {
        setLoading(true)
        setError(false)
        let cancel
        axios({
            method: 'GET',
            url: 'https://randomuser.me/api/',//https://randomuser.me/api/ //http://openlibrary.org/search.json
            params: { q: query, page: pageNumber },
            cancelToken: new axios.CancelToken(c => cancel = c)
        }).then(res => {
            console.log(res.data.results[0].name.first); //[0].name.first
            //   setBooks(prevBooks => {
            //     return [...new Set([...prevBooks, ...res.data.name.map(b => b.first)])]
            //   })
            setHasMore(res.data.docs.length > 0)
            setLoading(false)
        }).catch(e => {
            if (axios.isCancel(e)) return
            setError(true)
        })
        return () => cancel()
    }, [query, pageNumber])

    return { loading, error, books, hasMore }
}