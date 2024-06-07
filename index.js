const { Board, Led } = require("johnny-five")
const express = require('express')


//constante que simula uma placa arduino
const Board = new Board()

//iniciia elementos da placa 
Board.on('ready', () => {

    const Led = new Led(13)


    const app = express()

    app.get('/', (req, res) => {

        res.sendFile('index.html', { root: '.'})
    })        

    app.get('/led', (req, res) => {
        const [ turnTo ] = req.query

        if(typeof led == 'function') {
            led[turnTo]()
            res.send(`ligando led ${turnTo}`)
        }
        else{
            
            res.status(406).send('ação invalida')
        }
    })
    
    const port = process.env.PORT || 3000

    app.listen(port, () => console.log(`> Servidor rodando na porta ${port}`))

})