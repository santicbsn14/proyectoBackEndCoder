import express from 'express'
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))

const PORT = 8082
let frase = 'frase inicial'
app.get('/api/frase', (req,res) =>{
    res.status(200).json({frase})
})
app.get('/api/palabras/:pos', (req,res) =>{
    const pos = +req.params.pos - 1;
    const palabras = frase.split(' ')
    const buscada = palabras[pos]
    res.status(200).json({buscada})
})
app.post('/api/palabras', (req,res) =>{
    const { palabra } = req.body;
    const palabras = frase.split(' ')
    palabras.push(palabra)
    frase = palabras.join(' ')
    const pos  = palabras.length
    res.status(201).json({agregada : palabra, pos})
})
app.put('/api/palabras/:pos', (req,res) =>{
    const pos = +req.params.pos -1;
    const { palabra } = req.body;
    const palabras = frase.split(' ');
    const anterior = palabras[pos]
    palabras.push(palabra)
    palabras[pos]= palabra
    frase = palabras.join(' ')
    res.status(200).json({actualizada : palabra, anterior})
})
app.delete('/api/palabras/:pos', (req,res) =>{
    const pos = +req.params.pos -1;
    const palabras = frase.split(' ');
   const  eliminada = palabras.splice(pos,1)[0]
    frase = palabras.join(' ')
    res.status(200).json({frase})
})
app.listen(PORT,()=>{
    console.log('Servidor escuchando en puerto 8082')
})