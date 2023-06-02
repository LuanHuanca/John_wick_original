
export const getPelis = async(title) => {
    const movieKey = import.meta.env.VITE_MOVIE_KEY2
    // debugger
    const formatTitle = titlePlus(title)
    const apiURL = 'https://api.themoviedb.org/'
    const apiTitle = `${apiURL}3/movie/${formatTitle}?&api_key=${movieKey}`
    // console.log(apiTitle)
    const response =  await fetch(apiTitle)
    const data = await response.json()

    return data;
    
}

const titlePlus = (title = "") => {
    const resultado = title.replace(' ','_')
    
    return resultado
} 