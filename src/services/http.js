import axios from 'axios'

export default {
  $get: function (url, data, header) {
    axios.get(url,data);
    return Promise((resolve, reject) => {
        
    })
  }
}