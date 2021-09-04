import axios from "axios"

class HelloWorldService {
    executeHelloWorldService() {
        return axios.get('http://localhost:8080/hello-world')
    }

    executeHelloWorldBeanService() {
        return axios.get('http://localhost:8080/hello-world-bean')
    }

    executeHelloWorldPathVeriableService(name) {
        let username = 'user'
        let password = 'password'

        let basicAuthHeaderString = 'Basic ' + window.btoa(`${username}:${password}`);

        return axios.get(`http://localhost:8080/hello-world/path-variable/${name}`,
            {
                headers : {
                    Authorization: basicAuthHeaderString 
                }
            }
        )
    }
}

export default new HelloWorldService()