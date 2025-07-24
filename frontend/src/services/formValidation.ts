const eventCategories = ["CODING", "CIRCUITS_AND_ROBOTICS", "BUSINESS", "BRAINSTORMING", "GAMING","MISCELLANEOUS"];

function validateCategory(str: string): boolean | string {
  if (eventCategories.includes(str)) return true;

  return "Invalid Event Category";
}

function transformCategory(str: string){
  return str.toUpperCase();
}

export { validateCategory, transformCategory };