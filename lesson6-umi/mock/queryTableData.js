const productTableData = [];
for (let i = 0; i < 10; i++) {
  productTableData.push({
    id: i,
    name: "名字" + i,
    age: i,
    city: "城市" + i
  });
}

export default {
    "POST /api/queryTableData": (req, res) => {
      res.send(productTableData);
    }
  };