import axios from 'axios';

export const calculatePaycheck = salaryWorkSavingInfo => {
    return axios.post('https://pjok34vp3k.execute-api.us-west-2.amazonaws.com/prod/calculate_paycheck', {salaryWorkSavingInfo})
        .then((resp) => {
            return resp.data
        })
}