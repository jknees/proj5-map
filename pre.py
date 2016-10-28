

def process(raw):

	entry = {}
	cooked = []

	for line in raw:
		entry['name'], entry['lat'], entry['lon'] = line.split(',')
		cooked.append(entry)

	return cooked

