export function handleClickShare() {
	const modal = document.querySelector('#modalWindow');

	const copyBtn = document.querySelector('#copyBtn');
	const copyAlert = document.querySelector('#copyAlert');

	copyBtn.textContent = window.location;

	function handleCopyClick() {
		navigator.clipboard.writeText(window.location);
		if (copyAlert.classList.contains('d-none')) {
			copyAlert.classList.remove('d-none');
			setTimeout(() => copyAlert.classList.add('d-none'), 2000);
		}
	}

	copyBtn.addEventListener('click', handleCopyClick);

	const shareVKButton = document.querySelector('#shareVKButton');
	const shareTGButton = document.querySelector('#shareTGButton');
	shareVKButton.href = `https://vk.com/share.php?${window.location}`;
	shareTGButton.href = `https://t.me/share/url?url=${window.location}`;

	modal.classList.toggle('d-none');

	if (!modal.classList.contains('d-none')) {
		function handleModalClose(e) {
			if (e.target === modal) {
				closeModal();
			}
		}

		function closeModal() {
			modal.classList.add('d-none');

			modal.removeEventListener('click', handleModalClose);
			copyBtn.removeEventListener('click', handleCopyClick);
		}

		modal.addEventListener('click', handleModalClose);

		function handleEscapeKey(e) {
			if (e.key === 'Escape') {
				closeModal();
				document.removeEventListener('keydown', handleEscapeKey);
			}
		}

		document.addEventListener('keydown', handleEscapeKey);

		modal._closeModal = closeModal;
		modal._handleEscapeKey = handleEscapeKey;
	} else {
		if (modal._closeModal) {
			const closeModal = modal._closeModal;
			closeModal();
		}
	}
}
