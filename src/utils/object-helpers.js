export const updateObjectInArray = (items, itemId, objPropName, newObjectProps) => {
  return items.map(item => {
    if (item[objPropName] === itemId) {
      return {...item, ...newObjectProps};
    }
    return item;
  })
};

// // start coding!
//
// const profile = { name: 'Omar', lastName: 'Petrov', year: 1989 };
//
// const { name, ...shortProfile } = profile;
//
// //delete profile.name;
//
// //const keys = [...Object.keys(profile)].pop();
//
// //const result = {};
//
// //keys.forEach((key) => result[key] = profile[key]);
//
// //profile.name = undefined;
// //profile = JSON.parse(JSON.stringify(profile));
