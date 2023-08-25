const Ticket = require('../models/ticket');
const Flight = require('../models/flight');

module.exports = {
    new: newTicket,
    create
}

async function newTicket(req, res) {
    const id = req.params.id
    res.render('tickets/new', {id})
}

async function create(req, res) {
    try {
        req.body.flight = req.params.id
        await Ticket.create(req.body)
        res.redirect(`/flights/${req.params.id}`)
    } catch (err) {
        console.log(err)
        res.redirect(`/flights/${req.params.id}/tickets/new`)
    }
}