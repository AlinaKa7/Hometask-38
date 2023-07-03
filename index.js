function gotoLink(button) {
  let link = button.value;
  
  if (!/^https?:\/\//i.test(link) && !/^http?:\/\//i.test(link)) {
  link = "https://" + link;
  }
  
  console.log(link);
  window.open(link);
}


















// if (link.startsWith('http') === false && link.startsWith('https') === false) {
//   link = `https://${link}`;
// }

// if (!/^(?:f|ht)tps?\:\/\//.test(link) && !/^(?:f|ht)tp?\:\/\//.test(link)) {
//   link = "https://" + link;
// }