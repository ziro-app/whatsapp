const twilioTemplates = (name, params) => {
	// validate template params
	if (!params) throw { statusCode: 400, body: 'Request is missing template_parameters' }
	if (name === 'lead-registered')
		if (!params.name || !params.whats)
			throw { statusCode: 400, body: `Invalid template_parameters for template: '${name}'` }
	if (name === 'antifraud-trouble')
		if (!params.razao)
			throw { statusCode: 400, body: `Invalid template_parameters for template: '${name}'` }
	// match template name to its expected parameters
	const templates = {
		'lead-registered': 
			`Lead ${params.name} cadastrou-se no catálogo com o whatsapp ${params.whats}`,
		'antifraud-trouble':
			`Lead ${params.razao} com dificuldades no antifraude. Veja na planilha`
	}
	if (!templates[name]) throw { statusCode: 400, body: 'Invalid template_name' }
	return templates[name]
}

module.exports = twilioTemplates