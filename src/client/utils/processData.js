import "lodash";

const getSearchCriteria = productList => {
    const reducer = (acc, cur) => {
        const {Categorie, Couleur, Format, Millesime, Nouveautetype, Pays, Prixbande, Region} = acc;
        const {raw: {tpcategorie: newtpcategorie, tpcouleur: newtpcouleur, tpformat: newtpformat, tpmillesime: newtpmillesime, tpnouveautetype: newtpnouveautetype, tppays: newtppays, tpprixbande: newtpprixbande, tpregion: newtpregion}} = cur;
        return {Categorie: _.uniq([...Categorie, newtpcategorie]), Couleur: _.uniq([...Couleur, newtpcouleur]), Format: _.uniq([...Format, newtpformat]), Millesime: _.uniq([...Millesime, newtpmillesime]), Nouveautetype: newtpnouveautetype? _.uniq([...Nouveautetype, newtpnouveautetype]): Nouveautetype, Pays: _.uniq([...Pays, newtppays]), Prixbande: _.uniq([...Prixbande, newtpprixbande]), Region: _.uniq([...Region, newtpregion])}
        
    };
    const values = productList.reduce(reducer, {Categorie: [], Couleur:[], Format:[], Millesime:[], Nouveautetype:[], Pays:[], Prixbande:[], Region:[]});
    return values;
}

export {
    getSearchCriteria
}