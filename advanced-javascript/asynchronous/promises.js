class SonService {
    static getWeather() {
        let promise = new Promise((resolve, reject) => {

        });
    }
    return promise;
}


SonService.getWeather()
    .then(
        data => {
            if (data.forecast === 'good') {
                return 'Go fishing!';
            } else {
                return 'Prepare Sunday roast.';
            }
        },
        error => {console.log('Prepare Sunday roast.')}
    )
    .then(
        activity => {
            console.log(activity);
        }
    )
    .then(
        nonsense => {
            console.log(nonsense);
        }
    );
