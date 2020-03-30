const notificacaoLead = require('./notificacaoLead')

const condicional = (modelo,parametros) => {
    if(modelo === 'Notificação Lead') return notificacaoLead(parametros)
}

module.exports = condicional