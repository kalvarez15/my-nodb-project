const list = ['Legs-Squats', 'Arms-Biceps','Arms-Triceps', 'Chest', 'Traps']


module.exports = {
    getItems: (req, res) => {
        res.status(200).send(list)
    },
    addItem: (req, res) => {
        const {item} = req.body;
        list.push(item);
        res.status(200).send(list);
    },
    editItem: (req, res) => {
        const {item} = req.body
        const {id} = req.params
        const index = list.findIndex((element) => {
            return element.id === id;
        });


        list.splice(index, 1, item);

        res.status(200).send(list);
    },
    deleteItem: (req, res) => {
        const { id } = req.params;
        const index = list.findIndex((element) => {
            return element.id === id;
        });

        list.splice(index, 1);
        res.status(200).send(list);
    }
}