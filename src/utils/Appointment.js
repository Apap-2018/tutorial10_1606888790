const cors = "https://cors-anywhere.herokuapp.com/";
const baseUrl = "http://si-appointment.herokuapp.com/api";

export const Appointment = {

	/** 
	 * Fetch data all pasien
	 * @return listAllPasien
	 */
	getAllPasien() {
		return fetch(`${cors}${baseUrl}/1/getAllPasien`, {
			method: 'GET',
		})
		.then(response => {
			return response.json()
		})
		.then(jsonResponse => {
			return jsonResponse
		})
	},

	/** 
	 * Fetch detail data pasien
	 * @param idPasien
	 * @return detailPasien
	 */
	getDetailPasien(idPasien) {
		return fetch(`${cors}${baseUrl}/getPasien/${idPasien}`, {
			method: 'GET',
		})
		.then(response => {
			return response.json()
		})
		.then(jsonResponse => {
			return jsonResponse
		})
	},
	
	/** 
	 * POST data baru pasien ke SI-Appointment
	 * @param requestBody
	 * @return responseRequest
	 */
	updateStatusPasien(requestBody) {
		return fetch(`${cors}${baseUrl}/1/updatePasien`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		})
		.then(response => {
			return response.json()
		})
		.then(jsonResponse => {
			return jsonResponse
		})
	},
	
	/** 
	 * Fetch data all staf
	 * @return listAllStaf
	 */
	getAllStaffFarmasi() {
		return fetch(`${cors}${baseUrl}/1/getAllStaffFarmasi`, {
			method: 'GET',
		})
		.then(response => {
			return response.json()
		})
		.then(jsonResponse => {
			return jsonResponse
		})
	},
	
	/** 
	 * POST data hasil lab ke SI-Appointment
	 * @param requestBody
	 * @return responseRequest
	 */
	addLabResult(requestBody) {
		return fetch(`${cors}${baseUrl}/1/addLabResult`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		})
		.then(response => {
			return response.json()
		})
		.then(jsonResponse => {
			return jsonResponse
		})
	}
}