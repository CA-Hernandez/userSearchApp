// this can be used for sorting cities

function mergesort(data){
    if (data.length() <= 1){
        return data;
    }
    
    const center = Math.floor(data.length() /2);
    return merge(data[0..center], data[center+1..data.length()]);
}


function merge(leftInput, rightInput){
    let newArray = []; 
    let left = 0; 
    let right = 0;

    while ((left < leftInput.length()) && (right < rightInput.length())){
        if (leftInput[left] < rightInput[right]){
            newArray.push(leftInput[left]);
            left += 1;
        }
        else{
            newArray.push(rightInput[right]);
            right += 1
        }


        if (left === leftInput.length()){
            return newArray.concat(rightInput.slice(right));
        }
        else{
            return newArray.concat(leftInput.slice(left));
        }
    }

}