module.exports = function main() {
    let sequence = new Sequence([6, 9, 15, -2, 92, 11]);
    console.log(`o) 最小值 = ${sequence.minimum()}\no) 最大值 = ${sequence.maximum()}\no) 平均值 = ${sequence.average()}`);
};

class Sequence {
	constructor(input) {
		this.arr=input;
	}

	minimum() {
		var min=this.arr[0];
    	for(let i=0;i<this.arr.length;i++){
    		if(min>arr[i]){
    			min=arr[i];
    		}
    	}
    	return min;
  	}

  	maximun(){
  		var max=this.arr[0];
    	for(let i=0;i<this.arr.length;i++){
    		if(max<arr[i]){
    			max=arr[i];
    		}
    	}
    	return max;
  	}

  	average(){
  		var sum=0;
  		for(let i=0;i<this.arr.length;i++){
  			sum+=arr[i];
  		}
  		var aver=sum/this.arr.length;
  		return aver.toFixed(2);
  	}
}
