import products from "../data/data";

function getItems(idCategory) {
  return new Promise((resolve) => {
    if (idCategory === undefined) {
      setTimeout(() => {
        resolve(products);
      }, 1000);
    } else {
      setTimeout(() => {
        const itemsRequested = products.filter(
          (item) => item.category === idCategory
        );
        resolve(itemsRequested);
      }, 1000);
    }
  });
}

export function getSingleItem(idParam) {
  return new Promise((resolve, reject) => {
    const itemRequested = products.find((item) => item.id === Number(idParam));
    if (itemRequested === undefined) reject("Item no encontrado");
    setTimeout(() => {
      resolve(itemRequested);
    }, 1000);
  });
}

export default getItems;