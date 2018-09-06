(function () {
    const o = {
      animal: 'dog',
      integer: 7,
      fruits: [
        'apple',
        'orange',
        'banana'
      ]
    };
  
    function convertJSON (object) {
      JSON.parse(object);
    }
  
    convertJSON(o);
  })();