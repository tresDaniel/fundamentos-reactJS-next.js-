export default function handler(req, res){
    const codigo = req.query.codigo

    res.status(200).json({
        id: codigo,
        nome: `Daniel ${codigo}`,
        email: `tres.daniel.s${codigo}@gmail.com` //Crase para interpolação
    })
}