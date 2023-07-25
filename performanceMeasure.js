function AddLastName(){
  const startTime = new Date().getSeconds();
  const members = ['arnold', 'Archange', 'Aaron', 'Armand', 'Arielle', 'Arland'];
  const family = members.map(item => `${item} Mudosa`);
  const endtime =  new Date().getMilliseconds();
  console.log(family);
  return endtime - startTime;
}
console.log(AddLastName())
