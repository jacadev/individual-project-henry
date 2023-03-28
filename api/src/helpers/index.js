const { Temperament } = require("../db");

const arrayCleaner = (array) => {
  return array.map((elm) => {
    if (elm.created === undefined) {
      return {
        id: elm.id,
        name: elm.name,
        life_span: elm.life_span,
        temperament: elm.temperament,
        weight: elm.weight.metric,
        height: elm.height.metric,
        image: elm.image.url,
        created: false,
      };
    } else {
      return {
        id: elm.id,
        name: elm.name,
        life_span: elm.life_span,
        temperament: elm.temperaments
          .map((temp) => temp.name)
          .toString()
          .replace(/,/g, ", "),
        weight: elm.weight,
        height: elm.height,
        image: elm.image,
        created: elm.created,
      };
    }
  });
};

const objTemplate = {
  include: [{ model: Temperament, attributes: ["name"] }],
  attributes: [
    "id",
    "name",
    "life_span",
    "weight",
    "height",
    "image",
    "created",
  ],
};

const pagination = (limit, page, dbMerged) => {
  if (!limit && !page) return dbMerged;
  if (!limit && Number(page) === 0) return dbMerged;
  if (!limit && Number(page) !== 0) return [];
  if (limit && !page) return dbMerged.slice(0, Number(limit));
  if (limit && page) {
    if (isNaN(limit) || isNaN(page))
      throw new Error("Values sent by queries must be numeric values");
    if (Number(page) > Math.round(dbMerged.length / Number(limit))) return [];
    const start = Number(limit) * Number(page);
    const end = start + Number(limit);
    return dbMerged.slice(start, end);
  }
};

const orderByName = (filter, dbMerged) => {
  if (filter.toLowerCase() === "asc") {
    const orderByNameAsc = (a, b) => {
      if (a.name < b.name) return -1;
      else if (a.name > b.name) return 1;
      else return 0;
    };
    return dbMerged.sort(orderByNameAsc);
  }
  if (filter.toLowerCase() === "desc") {
    const orderByNameAsc = (a, b) => {
      if (a.name > b.name) return -1;
      else if (a.name < b.name) return 1;
      else return 0;
    };
    return dbMerged.sort(orderByNameAsc);
  }
};

const orderByWeight = (weight, dbMerged) => {
  if (weight.toLowerCase() === "lighter") {
    let weightConverted = dbMerged.map((elm) => {
      let aux = elm.weight.split(" - ");
      let aux2 = aux.reduce((a, b) => Math.round((Number(a) + Number(b)) / 2));
      if (!isNaN(aux2)) elm["weightAvg"] = Number(aux2);
      else elm["weightAvg"] = null;
      return elm;
    });

    const orderByWeightAsc = (a, b) => {
      return a.weightAvg - b.weightAvg;
    };

    return weightConverted
      .sort(orderByWeightAsc)
      .filter((elm) => elm.weightAvg !== null);
  }

  if (weight.toLowerCase() === "heavier") {
    let weightConverted = dbMerged.map((elm) => {
      let aux = elm.weight.split(" - ");
      let aux2 = aux.reduce((a, b) => Math.round((Number(a) + Number(b)) / 2));
      if (!isNaN(aux2)) elm["weightAvg"] = Number(aux2);
      else elm["weightAvg"] = null;
      return elm;
    });

    const orderByWeightDesc = (a, b) => {
      return b.weightAvg - a.weightAvg;
    };
    return weightConverted
      .sort(orderByWeightDesc)
      .filter((elm) => elm.weightAvg !== null);
  }
};

const filterByTemp = (temp, dbMerged) => {
  const filtered = [];
    dbMerged.map( elm => {      
      if(elm.temperament === undefined) elm['temperament'] = '';
      let aux = elm.temperament.split(', ');            
      let aux2 = aux.map(elm => elm = elm.toLowerCase());    
      if (aux2.includes(temp.toLowerCase())) return filtered.push(elm);
      else return elm;        
    });
    return filtered;
}

module.exports = {
  arrayCleaner,
  objTemplate,
  pagination,
  orderByName,
  orderByWeight,
  filterByTemp
};
