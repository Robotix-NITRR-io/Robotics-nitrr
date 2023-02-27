export default (query) => {
    if(query){
        const queryString = query.split("/")[2];
      
        return queryString;
    }

    return {};
}