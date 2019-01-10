app.get("/", (req, res) => {
  res.render(path.resolve("dist"));
  /*res.sendFile("index.html", {
      root: path.resolve("dist")
    });*/
});

app.post("/", (req, res) => {
  res.json({ response: "response" });
});
