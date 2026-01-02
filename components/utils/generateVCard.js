import VCard from 'vcard-creator';

const socialUrls = {
	telegram: 'telegram.me',
	vk: 'vk.com',
	ok: 'ok.ru',
	max: 'max.ru',
};

export function generateVCard(json) {
	const vCardContent = new VCard();

	const lastname = json.name.lastname;
	const firstname = json.name.firstname;
	const additional = json.name.additional;

	vCardContent
		.addName(lastname, firstname, additional)
		.addCompany(json.organization)
		.addJobtitle(json.title);
	// .addURL(json.url)

	json.telephones.forEach((phone) => {
		vCardContent.addPhoneNumber(phone.number, 'type=' + phone.type);
	});

	json.emails.forEach((email) => {
		vCardContent.addEmail(email.address, 'type=' + email.type);
	});

	json.socials.forEach((social) => {
		if (socialUrls[social.type.toLowerCase()]) {
			vCardContent.addSocial(
				`https://${socialUrls[social.type.toLowerCase()]}/${social.userID}`,
				social.type,
				social.userID,
			);
		}
	});

	return vCardContent;
}

export function handleClickDownload(data) {
	const vCardContent = generateVCard(data);
	const blob = new Blob([vCardContent.toString()], { type: 'text/vcard' });
	const url = URL.createObjectURL(blob);

	const a = document.createElement('a');
	a.href = url;
	a.download = 'contact.vcf';

	a.click();

	URL.revokeObjectURL(url);
}
