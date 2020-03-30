const notificacaoLead = (parametros) => {
    const [nome, numero] = parametros
    return `Lead ${nome} cadastrou-se no catálogo com o whatsapp ${numero}`
}

module.exports = notificacaoLead