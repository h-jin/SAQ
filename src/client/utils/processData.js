import "lodash";

const getSearchCriteria = productList => {
    const reducer = (acc, cur) => {
        const {Categorie, Couleur, Format, Millesime, Nouveautetype, Pays, Prixbande, Region} = acc;
        const {raw: {tpcategorie: newtpcategorie, tpcouleur: newtpcouleur, tpformat: newtpformat, tpmillesime: newtpmillesime, tpnouveautetype: newtpnouveautetype, tppays: newtppays, tpprixbande: newtpprixbande, tpregion: newtpregion}} = cur;
        // filter out not exsit and repeated value
        return {
            Categorie: newtpcategorie? _.uniq([...Categorie, newtpcategorie]): Categorie, 
            Couleur: newtpcouleur? _.uniq([...Couleur, newtpcouleur]):Couleur, 
            Format: newtpformat? _.uniq([...Format, newtpformat]):Format, 
            Millesime: newtpmillesime? _.uniq([...Millesime, newtpmillesime]): Millesime, 
            Nouveautetype: newtpnouveautetype? _.uniq([...Nouveautetype, newtpnouveautetype]): Nouveautetype, 
            Pays: newtppays?_.uniq([...Pays, newtppays]): Pays, 
            Prixbande: newtpprixbande?_.uniq([...Prixbande, newtpprixbande]): Prixbande, 
            Region: newtpregion? _.uniq([...Region, newtpregion]): Region
        }
        
    };
    const values = productList.reduce(reducer, {Categorie: [], Couleur:[], Format:[], Millesime:[], Nouveautetype:[], Pays:[], Prixbande:[], Region:[]});
    return values;
}

const constructQueries = criteria =>{
    const queries = Object.entries(criteria).map(val=>{
        const fieldName = val[0];
        const query = val[1].reduce((acc, cur)=>(`${acc}${acc==""?"":" OR "}@${fieldName}==${cur}`), "");
        return query;
    }).reduce((acc, cur)=>(`${acc} ${cur}`));
    return queries;
}
export {
    getSearchCriteria,
    constructQueries
}