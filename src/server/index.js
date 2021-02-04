const express = require('express')
const app = express();


//# middleware goes here, they are funtions that every endpoint has to go through before the actual endpoint

app.use(express.json())

//#Endpoints go here
app.get('/api/todo', ctrl.getItems)
app.post('/api/todo', ctrl.addItem)
app.put('/api/todo/:id', ctrl.editItem)
app.delete('/api/todo/:id',deleteItem)


//#
app.listen(3000, () => {
    console.log("Server 3000 is running smoothe")
})