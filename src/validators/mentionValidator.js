module.exports = function(data){
    // trabajo a partir del dato y lo que espero que tenga ese dato
    if (!data.body.message) {
        return res.status(400).json({ error: 'Message is required' });
      }
}