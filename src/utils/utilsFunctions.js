// helper functions

function byCategories(arrayCategoriesData, arrayCatergoriesClient, n) {
  if (arrayCategoriesData.includes(arrayCatergoriesClient[n]) === true) {
    return true;
  } else if (
    arrayCategoriesData.includes(arrayCatergoriesClient[n]) === false &&
    n < arrayCatergoriesClient.length
  ) {
    return byCategories(arrayCategoriesData, arrayCatergoriesClient, n + 1);
  } else {
    return false;
  }
}

export function filterbyCategory(data, category, nItem) {
  if (typeof category === "string") {
    const filterData = data.filter((item) => {
      return item.categories?.includes(category);
    });
    return filterData.slice(0, nItem);
  } else if (category.constructor.name === "Array") {
    const filterData2 = data.filter((item) => {
      return byCategories(item.categories, category, 0);
    });
    return filterData2.slice(0, nItem);
  }
}
