import Ember from 'ember';

export default Ember.Component.extend({

  classNames: ['greeting'],

  text:'',
  displayText: '',


  didInsertElement() {
    this.runDisplayText();
  },

  runDisplayText() {
    let letterAr = this.get('text').split('');
    let timer = setInterval(() => {
      if(letterAr.length === 0) {
        clearInterval(timer);
        setTimeout(()=> {
          this.$('#greeting-cursor').addClass('hidden');
        }, 500);
      } else {
        let nextLetter = letterAr.shift();
        let prevText = this.get('displayText');
        this.set('displayText', `${prevText}${nextLetter}`);
      }
    }, 85);
  }
});
