const FormatNumber = (Number: any ) => {
  let FaNum = new Intl.NumberFormat('fa-IR').format(Number).replace(/\٬/g, "");
  return FaNum;
}