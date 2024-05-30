function translateCategory(category: string) {
  switch (category) {
    case "men's clothing":
      return "Roupas Masculinas";
    case "women's clothing":
      return "Roupas Femininas";
    case "electronics":
      return "Eletrônicos";
    case "jewelery":
      return "Jóias";
    default:
      return category;
  }
}

function selectImage(category: string) {
  return `/images/categories/${category}.jpg`;
}

function transformData(categories: string[]) {
  return categories.map((category) => {
    return {
      label: translateCategory(category),
      image: selectImage(category),
      name: category,
    };
  });
}

export const categoryUtils = {
  transformData,
};
