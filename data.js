const express = require("express");
const app = express();
const port = 3002;

const database = ["html", "css"];

app.use(express.json());

// Ajoute un langage dans "database"
app.post("/languages", (req, res) => {
    if(!req.body) {
      res.status(400).send("pas de body");
    } else {
      database.push(req.body.language);
      res.status(201).json({ language: req.body.language });
    }
});

//  TODO: GET /languages (renvoie la liste des langages de la database en json)
app.get("/languages", (req, res) => {
  res.status(201).json({languages: languages});
});

// TODO: PUT /languages/:name (remplace le langage passé dans l'url par celui passé dans le body, par exemple /languages/html avec {"language": "c++"}, remplace html par c++ dans la database)

app.put("/languages/ :name",(req, res) => {
  if(!req.params.name) {
    res.status(400).send("info manquante");
  } else if(!req.body.language) {
    res.status(400).send("y'a pas le language dans le body");
  } else if(!database.includes(req.params.name)) {
    res.status(404).send("language non trouvé");
  } else {
    const index = database.indexOf(req.params.name);
    database[index] = req.body.language;
    res.status(200).send("le language a été modifié");
  }
})

// TODO: DELETE /languages (supprime le langage passé dans le body, par exemple {"language": "c++"})

// app.delete("/languages", (req, res) => {
  
//   const name = parseInt(req.params.name); // Parse ID from URL parameter
//   const index = database.indexOf(req.params.name);
  
//     // Check if data exists for the ID
//     if (index === -1) {
//       return res.status(404).send("Data not found");
//     }
  
//     // Remove data from the array using splice
//     data.splice(index, 1);
  
//     res.json({ message: "Data deleted successfully" });
  
// })

// 💡 N'hésite pas à aller sur MDN pour choisir les bonnes méthodes de array pour modifier database

app.listen(port, () => {
  console.log(`Server started on <http://localhost>:${port}`);
});
