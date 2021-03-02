function getChangeValue(obj) {
  Object.defineProperty(obj,'a',{
    get: function(value) {
      console.warn('get', value);
    },
    set: function(value) {
      console.warn('set', value);
    }
  })
}