module.exports = function main() {
    let sequence = new Sequence([6, 9, 15, -2, 92, 11]);
    console.log(`o) 最小值 = ${sequence.minimum()}\no) 最大值 = ${sequence.maximum()}\no) 平均值 = ${sequence.average()}`);
};

class Sequence {
	constructor(input) {
		this.input=input;
	}

	minimum() {
		var min=this.input[0];
    	for(let i=0;i<this.input.length;i++){
    		if(min>input[i]){
    			min=input[i];
    		}
    	}
    	return min;
  	}

  	maximun(){
  		var max=this.input[0];
    	for(let i=0;i<this.input.length;i++){
    		if(max<input[i]){
    			max=input[i];
    		}
    	}
    	return max;
  	}

  	average(){
  		var sum=0;
  		for(let i=0;i<this.input.length;i++){
  			sum+=input[i];
  		}
  		var aver=sum/this.input.length;
  		return aver.toFixed(2);
  	}
}
