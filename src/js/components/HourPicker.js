/* global rangeSlider */
import BaseWidget from './BaseWidget.js';
import {select, settings} from '../settings.js';

class HourPicker extends BaseWidget{

  constructor(wrapper){
    super(wrapper, settings.hours.open);

    const thisWidget = this;
    
    thisWidget.dom.input = wrapper.querySelector(select.widgets.HourPicker.input);
    thisWidget.dom.output = wrapper.querySelector(select.widgets.HourPicker.output);
    thisWidget.value.setValue(thisWidget.dom.input);
    thisWidget.initPlugin();

  }

  initPlugin(){
    const thisWidget = this;
    rangeSlider.create(thisWidget.dom.input);

    thisWidget.dom.input.addEventListener('input', function(){
      thisWidget.value.setValue(thisWidget.dom.input);
    });
  }

  parseValue(someNumber){
    return someNumber;
  }

  isValid(){
    return true;
  }

  renderValue(){
    const thisWidget = this;
    thisWidget.dom.output = thisWidget.value;
  }

}

export default HourPicker;