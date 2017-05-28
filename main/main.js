module.exports = function main() {
    let sequence = new Sequence([6, 9, 15, -2, 92, 11]);
    console.log(`o) 最小值 = ${sequence.minimum()}\no) 最大值 = ${sequence.maximum()}\no) 元素数量 = ${sequence.num()}\no) 平均值 = ${sequence.average()}`);
};

class Sequence {

	constructor(input) {
		this.input=input;
	}

	minimum() {
		var min=this.input[0];
    	for(let i=0;i<this.input.length;i++){
    		if(min>this.input[i]){
    			min=this.input[i];
    		}
    	}
    	return min;
  	}

  	maximum(){
  		var max=this.input[0];
    	for(let i=0;i<this.input.length;i++){
    		if(max<this.input[i]){
    			max=this.input[i];
    		}
    	}
    	return max;
  	}

  	average(){
  		var sum=0;
  		for(let i=0;i<this.input.length;i++){
  			sum+=this.input[i];
  		}
  		var aver=sum/this.input.length;
  		return aver.toFixed(2);
  	}

  	num(){
  		return this.input.length;
  	}
}
