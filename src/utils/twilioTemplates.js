const twilioTemplates = (name, params) => {
	// match template name to its expected parameters
	const templates = {
		'lead-registered': 
			`${params.name} cadastrou-se no catálogo com o whatsapp ${params.whats}`
	}
	return templates[name]
}

module.exports = twilioTemplates