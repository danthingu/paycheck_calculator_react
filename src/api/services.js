import axios from 'axios';

export const calculatePaycheck = salaryWorkSavingInfo => {
    var config = {
        headers: {'Access-Control-Allow-Origin': '*'}
    };
    return axios.post('https://qenzxs2x29.execute-api.us-west-2.amazonaws.com/Prod/calculate_paycheck', {salaryWorkSavingInfo})
        .then((resp) => {
            return resp.data
        })
}